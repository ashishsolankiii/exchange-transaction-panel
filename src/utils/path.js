export const isPath = (path, search = "") => {
  return path.split("/").reverse()[0] === search.replace("/", "");
};
