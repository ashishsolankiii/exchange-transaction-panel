import { postData } from "../../utils/fetch-services";
import { Notify } from "../../utils/notify";

const apiEndpoint = "/depositRequest";

export const getDepositRequests = async (params) => {
  try {
    const result = await postData(`${apiEndpoint}/getAllDepositRequest`, params);
    if (result.success) {
      return result.data;
    }
    throw new Error(result.message || "Error fetching deposit request.");
  } catch (e) {
    Notify.error(e.message);
  }
};

export const updateDepositRequest = async (params, message = "Deposit request updated successfully.") => {
  try {
    const result = await postData(`${apiEndpoint}/updateDepositRequest`, params);
    if (result.success) {
      Notify.success(message);
      return result.data;
    }
    throw new Error(result.message || "Error updating deposit request.");
  } catch (e) {
    Notify.error(e.message);
  }
};

export const updateDepositRequestStatus = async (params, message = "Deposit request status updated successfully.") => {
  try {
    const result = await postData(`${apiEndpoint}/updateDepositRequestStatus`, params);
    if (result.success) {
      Notify.success(message);
      return result.data;
    }
    throw new Error(result.message || "Error updating deposit request.");
  } catch (e) {
    Notify.error(e.message);
  }
};
