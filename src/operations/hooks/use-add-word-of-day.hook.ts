import axios from "axios";
import { useEffect, useState } from "react";
import { ErrorResponse, WordOfTheDay } from "robrendellwebsite-common";
import { config } from "../../config";
import { Response } from "../../models/axios-response-wrapper";

export function useAddWordOfDay(wordOfDay: WordOfTheDay | undefined) {
  const [response, setResponse] = useState<
    WordOfTheDay | ErrorResponse | null | undefined
  >();
  useEffect(() => {
    if (typeof wordOfDay !== "undefined" && wordOfDay !== null) {
      setResponse(null);
      axios
        .post(config.backend + "/operations/word-of-the-day/add", wordOfDay, {
          validateStatus: function (status) {
            return status >= 200 && status <= 400;
          },
        })
        .then((success: Response<WordOfTheDay>) => {
          setResponse(success.data);
        });
    }
  }, [wordOfDay]);
  return response;
}
