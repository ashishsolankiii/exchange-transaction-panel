import axios from "axios";
import { decryptResponse, encryptRequest } from "./encryption";

const BaseURL = process.env.REACT_APP_BASE_URL;
const postData = async (url, body, token = null) => {
  const jwsToken = localStorage.getItem("jws_token");

  const response = await fetch(`${BaseURL}/${url}`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: token || jwsToken,
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
    body: encryptRequest(body),
  });

  const result = await response.json();
  const data = JSON.parse(decryptResponse(result));

  if ([200, 201].includes(response.status)) {
    return data;
  } else if (response.status === 401) {
    localStorage.clear();
    window.location.reload();
  } else if (response.status > 400) {
    const { message = "Something went wrong" } = data;
    return { success: false, message };
  }

  return { success: false, message: "Something went wrong." };
};

const getData = async (url) => {
  const jwsToken = localStorage.getItem("jws_token");
  const response = await fetch(`${BaseURL}/${url}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: jwsToken,
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  const result2 = await response.json();

  if (response.status === 401) {
    localStorage.clear();
    window.location.reload(false);
  } else if (response.status !== 200) {
    // NotificationManager.error(
    //   result2?.message ?? 'Something Went Wrong',
    //   'Error',
    //   3000,
    //   null,
    //   null,
    //   ''
    // );
  }

  return result2;
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
    .catch((err) => {
      if (err.response.status === 401) {
        localStorage.clear();
        window.location.reload(false);
      } else if (err.response.status !== 200) {
        // NotificationManager.error(
        //   err.response.data.message,
        //   'Error message',
        //   3000,
        //   null,
        //   null,
        //   ''
        // );
      }
    });
};
export { axiosPostData, getData, postData };
