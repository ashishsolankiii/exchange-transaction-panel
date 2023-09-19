import CryptoJS from "crypto-js";
import { nanoid } from "nanoid";
import { Notify } from "./notify";

const resAes = process.env.REACT_APP_RESPONSE_AES_SECRET;

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

const handshake = async () => {
  try {
    const url = process.env.REACT_APP_BASE_URL?.replace("/api/v1", "");
    const response = await fetch(`${url}/handshake`, { method: "GET" });
    const data = await response.json();
    if (!data.success) {
      throw new Error("Handshake failed");
    }
    const fragBuf = JSON.stringify(data.metadata.relay.rel_buf1);
    const defragBuf = data.metadata.relay.rel_buf2;
    localStorage.setItem("frr_buf", fragBuf);
    localStorage.setItem("dfr_buf", defragBuf);

    return { fragBuf, defragBuf };
  } catch (e) {
    Notify.error("Error", "Unable to establish connection with server");
    return null;
  }
};

const decrypt = (str) => {
  if (!str) return null;
  const decrypted = CryptoJS.AES.decrypt(str, resAes);
  return decrypted.toString(CryptoJS.enc.Utf8);
};

const genFragKeys = async () => {
  let fragBuf = localStorage.getItem("frr_buf");
  let defragBuf = localStorage.getItem("dfr_buf");

  if (!(fragBuf && defragBuf)) {
    const response = await handshake();
    if (!response) {
      throw new Error("Handshake failed");
    } else {
      fragBuf = response.fragBuf;
      defragBuf = response.defragBuf;
    }
  }

  const defragStep = Number(JSON.parse(decrypt(defragBuf)));
  const fragChunk = Number(JSON.parse(decrypt(defrag(JSON.parse(fragBuf), defragStep))));

  return { defragStep, fragChunk };
};

const encryptRequest = async (data = {}) => {
  try {
    const { fragChunk, defragStep } = await genFragKeys();
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), resAes);
    const cipherText = encrypted.toString();

    return JSON.stringify({ payload: frag(cipherText, fragChunk, defragStep) });
  } catch (e) {
    Notify.error("Failed to encrypt request");
    return null;
  }
};

const decryptResponse = async (data = {}) => {
  try {
    const { defragStep } = await genFragKeys();
    const mergedString = defrag(data?.cpr_ctx, defragStep);
    const decrypted = decrypt(mergedString);
    // const decrypted = decrypt(data?.cpr_ctx);
    const parsed = JSON.parse(decrypted);
    return parsed;
  } catch (e) {
    Notify.error("Failed to decrypt response");
    return null;
  }
};

export { decryptResponse, encryptRequest };
