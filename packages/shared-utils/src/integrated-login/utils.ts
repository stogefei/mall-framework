export function parseQuery(url: string = window.location.href) {
  const vars: any = {};
  let hash;
  let urls = decodeURI(url).replace(window.location.origin, '');
  const find = urls.indexOf('#');
  if (find > -1) {
    urls = decodeURI(url).replace(window.location.origin + '/mobile#/', '');
  }
  const jhIndex = urls.indexOf('#');
  if (jhIndex > -1) {
    urls = urls.substr(0, jhIndex);
  }
  const index: string[] = urls.split('?');

  let hashes: string[];
  if (index.length > 1) {
    hashes = index[1].split('&');
    for (let i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars[hash[0]] = decodeURIComponent(hash[1]);
    }
  }
  return vars;
}
