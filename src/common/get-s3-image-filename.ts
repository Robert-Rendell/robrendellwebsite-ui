export const getS3ImageFilenameFromUrl = (url: string) =>
  url.split("?")[0].split("/").at(-1) || "";
