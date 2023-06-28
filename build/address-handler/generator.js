
/**
 * 构建地址精度和维度 来源于高德地图
 */
const axios = require('axios');
const ProgressBar = require('progress');
const pcaCode = require('./pca-code');
const fs = require('fs-extra');

const address = [];
const resAddress = [];
let total = 0;
let num = 0;
var akey = '363f73cc6d1cd03f815332fc5ed430e9';

Object.keys(pcaCode).forEach((code) => {
  total += Object.keys(pcaCode[code]).length;
});

function handler (code, pName, level = 0) {
  if (pcaCode[code] && level < 3) {
    Object.keys(pcaCode[code]).forEach((nCode) => {
      const nName = pName + pcaCode[code][nCode];
      address.push({
        fullName: nName,
        name: pcaCode[code][nCode],
        code: nCode,
        pCode: level > 0 ? code : null,
        level,
      });
      handler(nCode, nName, level + 1);
    });
  }
}

function requestHandler (last) {
  if (num >= address.length || last) {
    console.log();
    console.log('转换之前', resAddress.length);
    finallyHandler();

    let nTotal = 0;
    nTotal += resAddress.length;
    resAddress.forEach((item) => {
      if (item.children) {
        nTotal += item.children.length;
        if (item.children) {
          item.children.forEach((nItem) => {
            nTotal += nItem.children.length;
          });
        }
      }
    });
    console.log('转换之后总数校验：', '省份总数:', resAddress.length, '转换总数:', nTotal);
    const root = process.cwd();
    const text = `export default ${JSON.stringify(resAddress, null, 2)}`;
    fs.writeFileSync(root + '/build/address-handler/pca-llt.ts', text, { spaces: 2 });
    return;
  };
  const batch = address.slice(num, num + 10);
  let names = '';
  batch.forEach((item, index) => {
    names += item.fullName;
    if (index < 9) {
      names += '|';
    }
  });
  axios.get('https://restapi.amap.com/v3/geocode/geo', {
    params: {
      key: akey,
      address: names,
      s: 'rsv3',
      batch: true,
      // city: address[num].adcode,
    },
  }).then((item) => {
    const data = item.data;
    if (data.info === 'OK') {
      data.geocodes.forEach((nItem, index) => {
        const detail = address[num + index];
        const location = nItem.location.split(',');
        const resData = {
          name: detail.name,
          lng: parseFloat(location[0]),
          lat: parseFloat(location[1]),
          adcode: parseInt(detail.code),
          pcode: parseInt(detail.pCode),
          level: convert(detail.level),
        };
        if (detail.level < 2) {
          resData.children = [];
        }
        resAddress.push(resData);
      });
      num += 10;
      let l = false;
      if (num > address.length - 1) {
        num = address.length - 1;
        l = true;
      }
      bar.tick(10, {
        token1: total,
        token2: num + 1,
      }); // 进度步长
      requestHandler(l);
    }
  });
}
function convert (level) {
  switch (level) {
    case 0:
      return 'province';
    case 1:
      return 'city';
    case 2:
      return 'district';
    default:
      return null;
  }
}
function finallyHandler () {
  let item = null;
  for (let index = 0; index < resAddress.length; index++) {
    item = resAddress[index];
    if (item.pcode) {
      const pItem = resAddress.find((nItem) => nItem.adcode === item.pcode);
      pItem.children.push(item);
    }
  }
  for (let index = 0; index < resAddress.length; index++) {
    const nItem = resAddress[index];
    if (nItem.pcode) {
      resAddress.splice(index, 1);
      index--;
    }
    if (nItem.children && !nItem.children.length) {
      delete nItem.children;
    }
    delete nItem.pcode;
  }
}
handler(100000, '');
const bar = new ProgressBar('progress: [:bar] 总数: :token1 当前进度: :token2', { total, width: 40, complete: '*' });
requestHandler();
