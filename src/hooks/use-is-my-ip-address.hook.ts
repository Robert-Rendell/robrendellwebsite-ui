import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";

export function useIsMyIPAddress() {
  const [isMyIpAddress, setIsMyIpAddress] = useState<boolean>(false);
  useEffect(() => {
    axios.get(`${config.backend}/knock-knock`).then(() => {
      setIsMyIpAddress(true);
    });
  }, []);
  return [isMyIpAddress];
}
