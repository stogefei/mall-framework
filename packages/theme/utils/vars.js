/**
 * 获取less文件中的变量
 * @param {string} content less文件内容
 * @return {Object} vars less变量转换为json
 */
function parseLessVars (content, filter = null) {
  const vars = {};
  const contents = content.split('\n');
  contents.forEach(function (item, index) {
    const line = item || item.trim();
    if (line.startsWith('//') || line.startsWith('/*')) {
      return;
    }
    const pair = line.split(':');
    if (pair.length < 2) return;
    let [former, latter] = pair;
    former = former && former.trim();
    latter = latter && latter.trim();
    if (!former || !latter) return;
    if (!former.startsWith('@')) return;
    const key = former.replace('@', '');
    const values = latter.split(';');
    let value = '';
    if (values.length === 1) {
      let val = values[0];
      let num = 1;
      while (!val.includes(';')) {
        val += contents[index + num++].trim();
      }
      value = val.split(';')[0];
    } else {
      value = values[0];
    }

    value = value.replace('\r', '').replace(/^\s+|\s+$/g, '');

    // less escape
    if (value.includes('~')) {
      return;
    }
    if (filter && typeof filter === 'function') {
      if (filter(key, value)) {
        vars[key] = value;
      }
      return;
    }
    vars[key] = value;
  });
  return vars;
}

module.exports.parseVars = parseLessVars;
