import { postData, axiosPostData } from "../../utils/fetch-services";

export const getAllTransferType = async (request) => {
  const result = await postData("transferType/getAllTransferType", request);
  return result.success ? result.data : [];
};

export const getAllTransferTypeOptions = async (request) => {
  const result = await postData("transferType/getAllTransferTypeList", request);
  return result.success ? result.data : [];
};

export const deleteTransferType = async (id) => {
  const result = await postData("transferType/deleteTransferType", {
    _id: id,
  });
  return result.success;
};

export const getTransferTypeDetailByID = async (id) => {
  if (!id) {
    return null;
  }
  const result = await postData("transferType/getTransferTypeById", {
    _id: id,
  });
  return result.success ? result.data.details : [];
};

export const addTransferType = async (request) => {
  try {
    const result = await axiosPostData("transferType/createTransferType", request);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateTransferType = async (request) => {
  const result = await axiosPostData("transferType/updateTransferType", request);
  return result;
};

export const changeStatus = async (request) => {
  const result = await postData("transferType/updateTransferTypeStatus", request);
  return result;
};
