import axios from "axios";
import { useEffect, useState } from "react";
import { KNOCK_KNOCK_SECURITY_KEY } from "../common/constants";
import { config } from "../config";

export function useKnockKnock() {
  const [isMyIpAddress, setIsMyIpAddress] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem(KNOCK_KNOCK_SECURITY_KEY) || "";
    axios
      .get(`${config.backend}/knock-knock`, {
        headers: { authorization: token },
      })
      .then(() => {
        setIsMyIpAddress(true);
      });
  }, []);
  return [isMyIpAddress];
}
