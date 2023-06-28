import { JSEncrypt } from 'jsencrypt';
import { sm3 } from 'sm-crypto';

/**
 * 对目标字符串进行RSA加密
 * @param value 目标字符串
 * @param publicKey 公钥内容
 * @returns encryptedStr 加密结果
 */
export function RsaEncryption(value: string, publicKey: string): string {
  const encrypt: any = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  return encrypt.encrypt(value);
}

/**
 * 对目标字符串进行sm3加密
 * @param value 目标字符串
 * @returns encryptedStr 加密结果
 */
export function Sm3Encryption(value: string): string {
  return sm3(value);
}

export default {
  RsaEncryption,
  Sm3Encryption,
};
