import axios from "axios";
import { decryptResponse, encryptRequest } from "./encryption";
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
    body: await encryptRequest(body),
  });

  const result = await response.json();
  const data = JSON.parse(await decryptResponse(result));

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
    .post(`${BaseURL}/${url}`, await encryptRequest(formData), {
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

export { axiosPostData, getData, postData };
