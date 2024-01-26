const type = 'local';

let target;
switch (type) {
  case 'local':
    target = 'http://127.0.0.1:8000';
    break;
}
const options = {
  target,
  changeOrigin: true,
};

module.exports = {
  '/api': options,
};
