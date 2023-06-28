const { generate } = require('@ant-design/colors');

module.exports = function palette (colors) {
  if (!colors) {
    return false;
  }
  const paletteResult = {};
  const presetColors = [
    'blue',
    'red',
    'green',
    'orange',
    'yellow',
    'purple',
    'pink',
    'polar-green',
    'light-blue',
    'gray',
    'golden-purple',
    'light-purple',
    'dust-red',
    'volcano-orange',
    'geek-blue',
    'cyan',
    'bluish-green',
    'daybreak-blue',
  ];
  presetColors.forEach((key) => {
    const bbColor = colors[`bb-${key}`];
    if (bbColor) {
      const colorLevels = generate(bbColor);
      if (colorLevels.length > 0) {
        colorLevels.forEach((val, i) => {
          const h3VarName = `bb-${key}-${i + 1}`;
          paletteResult[h3VarName] = val;
        });
      }
    }
  });
  return paletteResult;
};
