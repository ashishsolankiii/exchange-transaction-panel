import { postData } from "../../utils/fetch-services";
import { Notify } from "../../utils/notify";

const apiEndpoint = "/transferRequest";

export const getTransferRequests = async (params) => {
  try {
    const result = await postData(`${apiEndpoint}/getAllTransferRequest`, params);
    if (result.success) {
      return result.data;
    }
    throw new Error(result.message || "Error fetching withdraw groups.");
  } catch (e) {
    Notify.error(e.message);
  }
};
