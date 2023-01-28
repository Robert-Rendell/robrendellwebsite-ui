import { AxiosRequestConfig } from "axios";
import { KNOCK_KNOCK_SECURITY_KEY } from "./constants";

export const authorizationHeader: AxiosRequestConfig = {
  headers: {
    authorization: localStorage.getItem(KNOCK_KNOCK_SECURITY_KEY) || "",
  },
};
