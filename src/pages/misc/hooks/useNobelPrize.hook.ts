import axios from "axios";
import { NobelPrizeJson } from "robrendellwebsite-common";
import { useEffect, useRef, useState } from "react";

export function useNobelPrize() {
  const [nobelPrize, setNobelPrize] = useState<NobelPrizeJson>();
  const categories = useRef<string[]>();
  useEffect(() => {
    axios
      .get<NobelPrizeJson>(
        "https://robrendellwebsite-public.s3.eu-west-1.amazonaws.com/nobel-prizes.json",
        { headers: { "Content-Type": "application/json" } }
      )
      .then(
        (success) => {
          categories.current = Array.from(
            new Set(success.data.nobelPrizes?.map((p) => p.category.en))
          );
          success.data.nobelPrizes?.reverse();
          setNobelPrize(success.data);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);
  return { nobelPrize, categories };
}
