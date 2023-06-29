const fs = require('fs-extra');
const path = require('path');

module.exports = function (context) {
  const sep = path.sep;
  const root = path.resolve(__dirname, `..${sep}..${sep}`);
  const packages = path.resolve(root, 'packages');
  let type = this.rootContext.replace(`${packages}${sep}`, '');
  if (this.context.includes('skip')) {
    type = 'skip';
  }
  const spath = `${root}${sep}extends${sep}entry${sep}${type}${sep}index.ts`;
  let content = context;
  if (fs.existsSync(spath)) {
    const lastImportIndex = content.lastIndexOf('import ');
    const header = content.slice(0, lastImportIndex);
    let footer = content.slice(lastImportIndex);
    const importStr = footer.match(/^import.*?\n/)[0];
    const extentStr = `import '@extends/entry/${type}';\n`;
    footer = footer.replace(importStr, importStr + extentStr);
    content = header + footer;
  }

  return content;
};
