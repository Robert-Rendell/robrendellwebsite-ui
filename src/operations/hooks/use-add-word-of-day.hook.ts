import axios from "axios";
import { useEffect, useState } from "react";
import { ErrorResponse, WordOfTheDay } from "robrendellwebsite-common";
import { authorizationHeader } from "../../common/auth-headers";
import { config } from "../../config";

export function useAddWordOfDay(wordOfDay: WordOfTheDay | undefined) {
  const [response, setResponse] = useState<
    WordOfTheDay | ErrorResponse | null | undefined
  >();
  useEffect(() => {
    if (typeof wordOfDay !== "undefined" && wordOfDay !== null) {
      setResponse(null);
      axios
        .post<WordOfTheDay>(
          config.backend + "/operations/word-of-the-day/add",
          wordOfDay,
          {
            ...authorizationHeader,
            validateStatus: function (status) {
              return status >= 200 && status <= 400;
            },
          }
        )
        .then((success) => {
          setResponse(success.data);
        });
    }
  }, [wordOfDay]);
  return response;
}
