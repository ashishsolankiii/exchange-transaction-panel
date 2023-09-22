import axios from "axios";
import { decryptResponse, encryptRequest, generateEncHeaders } from "./encryption";
//import { NotificationManager } from 'components/common/react-notifications';

const BaseURL = process.env.REACT_APP_BASE_URL;
const postData = async (url, body) => {
  const encHeaders = await generateEncHeaders();
  const response = await fetch(`${BaseURL}/${url}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      ...encHeaders,
    },
    body: await encryptRequest(body),
  });

  const result = await response.json();
  const data = await decryptResponse(result);

  return data;
};

const getData = async (url) => {
  const encHeaders = await generateEncHeaders();
  const response = await fetch(`${BaseURL}/${url}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...encHeaders,
    },
  });
  const result = await response.json();
  const data = await decryptResponse(result);
  return data;
};

const axiosPostData = async (url, formData) => {
  const encHeaders = await generateEncHeaders();
  return axios
    .post(`${BaseURL}/${url}`, await encryptRequest(formData), {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("jws_token"),
        ...encHeaders,
      },
    })
    .then(async ({ data }) => {
      return await decryptResponse(data);
    })
    .catch((err) => console.log(err));
};

export { axiosPostData, getData, postData };
