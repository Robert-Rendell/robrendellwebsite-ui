import axios from "axios";
import { useEffect } from "react";
import { config } from "../config";

export function useIsMyIPAddress(
  callback: (success: boolean, error?: string) => void
) {
  useEffect(() => {
    axios
      .get(`${config.backend}/knock-knock`)
      .then((_res) => {
        callback(true);
      })
      .catch((reason) => {
        callback(false, reason);
      });
  }, []);
}
