import axios from "axios";
import { useEffect, useState } from "react";
import { InterestingDateInHistory } from "../models/dates-in-history";

export function useDatesInHistory() {
  const [datesInHistory, setDatesInHistory] =
    useState<InterestingDateInHistory[]>();
  useEffect(() => {
    axios
      .get<InterestingDateInHistory[]>(
        "https://robrendellwebsite-public.s3.eu-west-1.amazonaws.com/dates-in-history.json",
        { headers: { "Content-Type": "application/json" } }
      )
      .then(
        (success) => {
          setDatesInHistory(success.data);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);
  return [datesInHistory];
}
