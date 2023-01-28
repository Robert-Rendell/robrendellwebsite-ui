import axios from "axios";
import { useEffect, useState } from "react";
import { authorizationHeader } from "../common/auth-headers";
import { config } from "../config";

export function useKnockKnock() {
  const [isMyIpAddress, setIsMyIpAddress] = useState<boolean>(false);
  useEffect(() => {
    
    axios
      .get(`${config.backend}/knock-knock`, authorizationHeader)
      .then(() => {
        setIsMyIpAddress(true);
      });
  }, []);
  return [isMyIpAddress];
}
