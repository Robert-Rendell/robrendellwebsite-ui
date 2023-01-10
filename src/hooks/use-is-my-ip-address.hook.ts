import axios from "axios";
import { useEffect } from "react";
import { config } from "../config";

export type IsMyIPAddressProps = {
  success: boolean;
  error?: string;
};
export type IsMyIPAddressCallbackFn = (props: IsMyIPAddressProps) => void;
export function useIsMyIPAddress(callback: IsMyIPAddressCallbackFn) {
  useEffect(() => {
    axios
      .get(`${config.backend}/knock-knock`)
      .then(() => {
        callback({ success: true });
      })
      .catch((reason) => {
        callback({ success: false, error: reason });
      });
  }, []);
}
