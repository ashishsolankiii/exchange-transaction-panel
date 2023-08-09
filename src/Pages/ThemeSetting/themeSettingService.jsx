import { postData } from "../../utils/fetch-services";

export const getAllData = async (page, perPage, sortBy, direction, searchQuery, parentId) => {
  const result = await postData("users/getAllUsers", {
    page: page,
    perPage: perPage,
    sortBy: sortBy,
    direction: direction,
    searchQuery: searchQuery,
    parentId: parentId,
  });
  return result.success ? result.data : [];
};

export const deleteData = async (id) => {
  const result = await postData("users/deleteUser", {
    _id: id,
  });
  return result.success;
};

export const getThemeSettingById = async (id) => {
  if (!id) {
    return null;
  }

  const result = await postData("themeSetting/getThemeSettingById", {
    userId: id,
  });
  return result.success ? result.data.details : [];
};

export const addData = async (request) => {
  const result = await postData("users/createUser", request);
  return result;
};

export const updateThemeSetting = async (request) => {
  const result = await postData("themeSetting/updateThemeSetting", request);
  return result;
};
