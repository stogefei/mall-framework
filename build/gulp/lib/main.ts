import * as ts from 'typescript';
import * as path from 'path';
import * as _project from './project';
import * as utils from './utils';
import * as _reporter from './reporter';
import { FinalTransformers, GetCustomTransformers, TsConfig } from './types';

function compile(proj: _project.Project, theReporter?: _reporter.Reporter): compile.CompileStream;
function compile(settings: compile.Settings, theReporter?: _reporter.Reporter): compile.CompileStream;
function compile(): compile.CompileStream;
function compile(param?: any, theReporter?: _reporter.Reporter): compile.CompileStream {
	if (arguments.length >= 3) {
		utils.deprecate("Reporter are now passed as the second argument",
			"remove the second argument",
			"Filters have been removed as of gulp-typescript 3.0.\nThe reporter is now passed as the second argument instead of the third argument.");
	}

	let proj: _project.Project;
	if (typeof param === "function") {
		proj = param;
		if (arguments.length >= 2) {
			utils.deprecate("ts(tsProject, ...) has been deprecated",
				"use .pipe(tsProject(reporter)) instead",
				"As of gulp-typescript 3.0, .pipe(ts(tsProject, ...)) should be written as .pipe(tsProject(reporter)).");
		} else {
			utils.deprecate("ts(tsProject) has been deprecated",
				"use .pipe(tsProject()) instead",
				"As of gulp-typescript 3.0, .pipe(ts(tsProject)) should be written as .pipe(tsProject()).");
		}
	} else {
		proj = compile.createProject(param || {});
	}
	return proj(theReporter);
}

function getFinalTransformers(getCustomTransformers?: GetCustomTransformers): FinalTransformers {
	if (typeof getCustomTransformers === 'function') {
		return getCustomTransformers;
	}

	if (typeof getCustomTransformers === 'string') {
		try {
			getCustomTransformers = require(getCustomTransformers);
		} catch (err) {
			throw new Error(
				`Failed to load customTransformers from "${getCustomTransformers}": ${err.message}`
			);
		}

		if (typeof getCustomTransformers !== 'function') {
			throw new Error(
				`Custom transformers in "${getCustomTransformers}" should export a function, got ${typeof getCustomTransformers}`
			);
		}

		return getCustomTransformers;
	}

	return null;
}

function getTypeScript(typescript: typeof ts) {
	if (typescript) return typescript;
	try {
		return require('typescript');
	} catch (e) {
		utils.deprecate("TypeScript not installed",
			"install with `npm install typescript --save-dev`",
			"As of gulp-typescript 3.0, TypeScript isn't bundled with gulp-typescript any more.\nInstall the latest stable version with `npm install typescript --save-dev`\nor a nightly with `npm install typescript@next --save-dev`");
		throw new Error("TypeScript not installed");
	}
}

function checkAndNormalizeSettings(settings: compile.Settings): compile.Settings {
	const { getCustomTransformers, declarationFiles, noExternalResolve, sortOutput, typescript, ...standardSettings } = settings;

	if (settings.sourceRoot !== undefined) {
		console.warn('gulp-typescript: sourceRoot isn\'t supported any more. Use sourceRoot option of gulp-sourcemaps instead.')
	}

	if (noExternalResolve !== undefined) {
		utils.deprecate("noExternalResolve is deprecated",
			"use noResolve instead",
			"The non-standard option noExternalResolve has been removed as of gulp-typescript 3.0.\nUse noResolve instead.");
	}
	if (sortOutput !== undefined) {
		utils.deprecate("sortOutput is deprecated",
			"your project might work without it",
			"The non-standard option sortOutput has been removed as of gulp-typescript 3.0.\nYour project will probably compile without this option.\nOtherwise, if you're using gulp-concat, you should remove gulp-concat and use the outFile option instead.");
	}

	if (declarationFiles) {
		standardSettings.declaration = settings.declarationFiles;
	}

	return standardSettings;
}

function normalizeCompilerOptions(options: ts.CompilerOptions, typescript: typeof ts): void {
	options.sourceMap = true;
	(options as any).suppressOutputPathCheck = true;
	options.inlineSourceMap = false;
	options.sourceRoot = undefined;
	options.inlineSources = false;

	// For TS >=2.9, we set `declarationMap` to true, if `declaration` is set.
	// We check for this version by checking whether `createFileLevelUniqueName` exists.
	if ("createFileLevelUniqueName" in typescript && options.declaration && !options.isolatedModules) {
		options.declarationMap = true;
	}
}

function reportErrors(errors: ts.Diagnostic[], typescript: typeof ts, ignore: number[] = []): void {
	const reporter = _reporter.defaultReporter();
	for (const error of errors) {
		if (ignore.indexOf(error.code) !== -1) continue;

		reporter.error(utils.getError(error, typescript), typescript);
	}
}

module compile {
	export interface Settings {
		out?: string;
		outFile?: string;
		outDir?: string;

		allowNonTsExtensions?: boolean;
		charset?: string;
		codepage?: number;
		declaration?: boolean; // alias of declarationFiles
		locale?: string;
		mapRoot?: string;
		noEmitOnError?: boolean;
		noImplicitAny?: boolean;
		noLib?: boolean;
		noLibCheck?: boolean;
		noResolve?: boolean;
		preserveConstEnums?: boolean;
		removeComments?: boolean;
		suppressImplicitAnyIndexErrors?: boolean;

		target?: string | ts.ScriptTarget;
		module?: string | ts.ModuleKind;
		moduleResolution?: string | number;
		jsx?: string | number;

		declarationFiles?: boolean;

		noExternalResolve?: boolean;
		sortOutput?: boolean;

		getCustomTransformers?: GetCustomTransformers;
		typescript?: typeof ts;

		isolatedModules?: boolean;

		rootDir?: string;
		rootDirs?: any;

		lib?: string[];
		experimentalDecorators?: boolean;

		[ name: string ]: any;

		// Unsupported by gulp-typescript
		sourceRoot?: string; // Use sourceRoot in gulp-sourcemaps instead
	}
	export type Project = _project.Project;
	export type CompileStream = _project.ICompileStream;
	export import reporter = _reporter;

	export function createProject(tsConfigFileName: string, settings?: Settings): Project;
	export function createProject(settings?: Settings): Project;
	export function createProject(fileNameOrSettings?: string | Settings, settings?: Settings): Project {
		let finalTransformers: FinalTransformers;
		let tsConfigFileName: string = undefined;
		let tsConfigContent: TsConfig = undefined;
		let projectDirectory = process.cwd();
		let typescript: typeof ts;
		let compilerOptions: ts.CompilerOptions;
		let projectReferences: ReadonlyArray<ts.ProjectReference>;
		let fileName: string;

		let rawConfig: any;

		if (fileNameOrSettings !== undefined) {
			if (typeof fileNameOrSettings === 'string') {
				fileName = fileNameOrSettings;
				tsConfigFileName = path.resolve(process.cwd(), fileName);
				projectDirectory = path.dirname(tsConfigFileName);
				if (settings === undefined) settings = {};
			} else {
				settings = fileNameOrSettings || {};
			}

			finalTransformers = getFinalTransformers(settings.getCustomTransformers);

			typescript = getTypeScript(settings.typescript);
			settings = checkAndNormalizeSettings(settings);

			const settingsResult = typescript.convertCompilerOptionsFromJson(settings, projectDirectory);

			if (settingsResult.errors) {
				reportErrors(settingsResult.errors, typescript);
			}

			compilerOptions = settingsResult.options;

			if (fileName !== undefined) {
				let tsConfig = typescript.readConfigFile(tsConfigFileName, typescript.sys.readFile);
				if (tsConfig.error) {
					console.log(tsConfig.error.messageText);
				}

				let parsed: ts.ParsedCommandLine =
					typescript.parseJsonConfigFileContent(
						tsConfig.config || {},
						getTsconfigSystem(typescript),
						path.resolve(projectDirectory),
						compilerOptions,
						tsConfigFileName);

				rawConfig = parsed.raw;

				tsConfigContent = parsed.raw;

				if (parsed.errors) {
					reportErrors(parsed.errors, typescript, [18003]);
				}

				compilerOptions = parsed.options;
				projectReferences = parsed.projectReferences;
			}
		}

		normalizeCompilerOptions(compilerOptions, typescript);
		const project = _project.setupProject(projectDirectory, tsConfigFileName, rawConfig, tsConfigContent, compilerOptions, projectReferences, typescript, finalTransformers);

		return project;
	}

	export function filter(...args: any[]) {
		utils.deprecate('ts.filter() is deprecated',
			'soon you can use tsProject.resolve()',
			'Filters have been removed as of gulp-typescript 3.0.\nSoon tsProject.resolve() will be available as an alternative.\nSee https://github.com/ivogabe/gulp-typescript/issues/190.');
	}
}

function getTsconfigSystem(typescript: typeof ts): ts.ParseConfigHost {
	return {
		useCaseSensitiveFileNames: typescript.sys.useCaseSensitiveFileNames,
		readDirectory: () => [],
		fileExists: typescript.sys.fileExists,
		readFile: typescript.sys.readFile
	};
}

export = compile;
