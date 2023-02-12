

import axios from "axios";
import { useEffect, useState } from "react";

export function useNobelPrize() {
  const [nobelPrize, setNobelPrize] =
    useState<any[]>();
  useEffect(() => {
    axios
      .get<any[]>(
        "https://robrendellwebsite-public.s3.eu-west-1.amazonaws.com/nobel-prizes.json",
        { headers: { "Content-Type": "application/json" } }
      )
      .then(
        (success) => {
          setNobelPrize(success.data);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);
  return [nobelPrize];
}
