/**
 * 千分位
 * @param value
 * @returns
 */
function thousand(value: number | string): string {
  let number = value.toString();
  const tmp: string[] = number.split('.');
  tmp[0] = tmp[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  number = tmp.join('.');
  return number;
}

export default {
  thousand,
};
