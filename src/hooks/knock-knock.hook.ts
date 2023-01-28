import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";

const KNOCK_KNOCK_SECURITY_KEY = "KNOCK_KNOCK_SECURITY_KEY";

export function useKnockKnock() {
  const [isMyIpAddress, setIsMyIpAddress] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem(KNOCK_KNOCK_SECURITY_KEY) || "";
    axios.get(`${config.backend}/knock-knock`, { headers: { authorization: token } }).then(() => {
      setIsMyIpAddress(true);
    });
  }, []);
  return [isMyIpAddress];
}
