import axios from "axios";
import { useEffect, useState } from "react";
import { WordOfTheDay } from "robrendellwebsite-common";

export function useWordOfTheDay() {
  const [wordOfTheDay, setWordOfTheDay] = useState<WordOfTheDay[]>();
  useEffect(() => {
    axios
      .get<WordOfTheDay[]>(
        "https://robrendellwebsite-public.s3.eu-west-1.amazonaws.com/word-of-day.json",
        { headers: { "Content-Type": "application/json" } }
      )
      .then(
        (success) => {
          setWordOfTheDay(success.data);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);
  return [wordOfTheDay];
}
