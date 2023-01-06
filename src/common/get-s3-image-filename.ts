export const getS3ImageFilenameFromUrl = (url: string) =>
  url.split("?")[0].split("/").at(-1) || "";

export const getS3ImageFilenameFolderFromUrl = (url: string) =>
  decodeURI(url.split("?")[0].split("/").at(-2) || "");
