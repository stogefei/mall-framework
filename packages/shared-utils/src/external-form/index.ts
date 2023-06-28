import Core from '@amaz/core';
function getExternalFormUrl(code, mobile = false) {
  let origin = mobile ? Core.config.mobileURL : Core.config.portalURL;
  if (!/^https?:\/\//.test(origin)) {
    origin = `${window.location.origin}${origin.substring(
      0,
      origin.length - 1,
    )}`;
  }
  return `${origin}/external-form/${code}`;
}
export { getExternalFormUrl };
