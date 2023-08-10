import { postData } from "../../utils/fetch-services";
import { Notify } from "../../utils/notify";

const apiEndpoint = "withdrawGroup/";

export const getWithdrawGroups = async (params) => {
  try {
    const result = await postData(`${apiEndpoint}/getAllWithdrawGroup`, params);
    if (result.success) {
      return result.data;
    }
    throw new Error(result.message || "Error fetching withdraw groups.");
  } catch (e) {
    Notify.error(e.message);
  }
};

export const getWithdrawGroupById = async (id) => {
  try {
    const result = await postData(`${apiEndpoint}/getWithdrawGroupById`, { _id: id });
    if (result.success) {
      return result.data.details;
    }
    throw new Error(result.message || "Error fetching withdraw group.");
  } catch (e) {
    Notify.error(e.message);
  }
};

export const createWithdrawGroup = async (data) => {
  try {
    const result = await postData(`${apiEndpoint}/createWithdrawGroup`, data);
    if (result.success) {
      Notify.success("Withdraw group created successfully.");
      return result.data;
    }
    throw new Error(result.message || "Error creating withdraw group.");
  } catch (e) {
    Notify.error(e.message);
  }
};

export const updateWithdrawGroup = async (data) => {
  try {
    const result = await postData(`${apiEndpoint}/updateWithdrawGroup`, data);
    if (result.success) {
      Notify.success("Withdraw group updated successfully.");
      return result.data;
    }
    throw new Error(result.message || "Error updating withdraw group.");
  } catch (e) {
    Notify.error(e.message);
  }
};

export const deleteWithdrawGroup = async (id) => {
  try {
    const result = await postData(`${apiEndpoint}/deleteWithdrawGroup`, { _id: id });
    if (result.success) {
      Notify.success("Withdraw group deleted successfully.");
      return result.success;
    }
    throw new Error(result.message || "Error deleting withdraw group.");
  } catch (e) {
    Notify.error(e.message);
  }
};
