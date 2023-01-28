import { AxiosRequestHeaders } from "axios";
import { KNOCK_KNOCK_SECURITY_KEY } from "./constants";

export const authorizationHeader: AxiosRequestHeaders = {
  headers: localStorage.getItem(KNOCK_KNOCK_SECURITY_KEY) || "",
};
