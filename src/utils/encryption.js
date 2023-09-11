import CryptoJS from "crypto-js";
import { nanoid } from "nanoid";

const frr = JSON.parse(localStorage.getItem("frr_buf"));
const dfr = localStorage.getItem("dfr_buf");
const resAes = process.env.REACT_APP_RESPONSE_AES_SECRET;

const decrypt = (str) => {
  const decrypted = CryptoJS.AES.decrypt(str, resAes);
  return decrypted.toString(CryptoJS.enc.Utf8);
};

const frag = (str, fragChunk, defragStep) => {
  if (!(fragChunk && defragStep)) return [];
  const arr = [];
  let keyIndex = 0;
  for (let i = 0; i < str.length; i += fragChunk) {
    const fragment = str.slice(i, i + fragChunk);
    const key = nanoid(fragChunk);
    if (i % defragStep === 0) {
      arr.push({ [fragment]: { [keyIndex++]: key } });
    } else {
      arr.push({ [key]: { [keyIndex++]: fragment } });
    }
  }
  return arr;
};

const defrag = (arr, defragStep) => {
  if (!defragStep) return "";
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    for (const [key, value] of Object.entries(obj)) {
      if (i % defragStep === 0) {
        str += key;
      } else {
        const sortedKeys = Object.keys(value).sort((a, b) => a - b);
        for (const keyIndex of sortedKeys) {
          str += value[keyIndex];
        }
      }
    }
  }
  return str;
};

const genFragKeys = () => {
  const defragStep = Number(JSON.parse(decrypt(dfr)));
  const mergedFrr = defrag(frr, defragStep);
  const fragChunk = Number(JSON.parse(decrypt(mergedFrr)));
  return { defragStep, fragChunk };
};

const encryptRequest = (data = {}) => {
  const { fragChunk, defragStep } = genFragKeys();
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), resAes);
  const cipherText = encrypted.toString();
  return JSON.stringify({ payload: frag(cipherText, fragChunk, defragStep) });
  // return JSON.stringify({ payload: cipherText });
};

const decryptResponse = (data = {}) => {
  const { defragStep } = genFragKeys();
  const mergedString = defrag(data?.cpr_ctx, defragStep);
  const decrypted = decrypt(mergedString);
  // const decrypted = decrypt(data?.cpr_ctx);
  const parsed = JSON.parse(decrypted);
  return parsed;
};

export { decryptResponse, encryptRequest };
