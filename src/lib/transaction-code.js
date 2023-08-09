import CryptoJS from "crypto-js";

const transactionKeySecret = process.env.REACT_APP_TRANSACTION_AES_SECRET;

/**
 * Returns decrypted transaction code
 * @param {String} encryptedData
 * @returns
 */
export const getTransactionCode = (encryptedData) => {
  try {
    if (!(encryptedData && transactionKeySecret)) {
      return;
    }
    const bytes = CryptoJS.AES.decrypt(encryptedData, transactionKeySecret);
    const code = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return code;
  } catch (error) {
    console.log(error.message);
  }
};
