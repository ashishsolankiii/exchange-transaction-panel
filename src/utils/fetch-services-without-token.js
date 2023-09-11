import axios from "axios";
import { decryptResponse, encryptRequest } from "./encryption";
import { Notify } from "./notify";
//import { NotificationManager } from 'components/common/react-notifications';

const BaseURL = process.env.REACT_APP_BASE_URL;
const postData = async (url, body) => {
  const response = await fetch(`${BaseURL}/${url}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
    body: encryptRequest(body),
  });

  const result = await response.json();
  const data = JSON.parse(decryptResponse(result));

  return data;
};
const getData = async (url) => {
  const response = await fetch(`${BaseURL}/${url}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const result = await response.json();
  return result;
};

const axiosPostData = async (url, formData) => {
  return axios
    .post(`${BaseURL}/${url}`, encryptRequest(formData), {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("jws_token"),
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

const handshake = async () => {
  try {
    const url = BaseURL.replace("/api/v1", "");
    const response = await fetch(`${url}/handshake`, { method: "GET" });
    const data = await response.json();
    if (!data.success) {
      throw new Error("Handshake failed");
    }
    localStorage.setItem("frr_buf", JSON.stringify(data.metadata.relay.rel_buf1));
    localStorage.setItem("dfr_buf", data.metadata.relay.rel_buf2);
  } catch (e) {
    Notify.error("Error", "Unable to establish connection with server");
  }
};

export { axiosPostData, getData, handshake, postData };
