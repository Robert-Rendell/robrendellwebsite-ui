import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { WordOfTheDay } from "../models/word-of-the-day";
import { Response } from "../../../models/axios-response-wrapper";

export function useWordOfTheDay() {
  const [wordOfTheDay, setWordOfTheDay] = useState<WordOfTheDay[]>();
  useEffect(() => {
    axios
      .get(
        "https://robrendellwebsite-public.s3.eu-west-1.amazonaws.com/word-of-day.json",
        { headers: { "Content-Type": "application/json" } }
      )
      .then(
        (success: Response<WordOfTheDay[]>) => {
          setWordOfTheDay(success.data);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);
  return [wordOfTheDay];
}
