const request = require('request');
const fs = require('fs-extra');
const proxy = require('../../../build/proxy');

const options = {
  url: proxy['/api'].target + 'api/v2/api-docs?group=All',
  method: 'GET',
};

module.exports = () => {
  return new Promise((resolve, reject) => {
    request(options, function (err, response, body) {
      if (!err && response.statusCode === 200) {
        fs.writeJSONSync('./text.json', JSON.parse(body), {
          spaces: 2,
        });
        resolve(JSON.parse(body));
      } else {
        reject(err);
      }
    });
  });
};
