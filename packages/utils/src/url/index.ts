/**
 * 获取浏览器参数
 * @param variable
 * @returns
 */
function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}
/**
 * 获取浏览器全部参数
 * @returns
 */
function getQueryVariables() {
  const variables = {};
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    variables[pair[0]] = pair[1];
  }
  return variables;
}

export { getQueryVariable, getQueryVariables };
export default {
  getQueryVariable,
  getQueryVariables,
};
