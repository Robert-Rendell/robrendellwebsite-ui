import axios from "axios";
import { useEffect, useState } from "react";
import {
  ErrorResponse,
  InterestingDateInHistory,
} from "robrendellwebsite-common";
import { config } from "../../config";
import { Response } from "../../models/axios-response-wrapper";

export function useAddDateInHistory(
  dateInHistory: InterestingDateInHistory | undefined
) {
  const [response, setResponse] = useState<
    InterestingDateInHistory | ErrorResponse | null | undefined
  >();
  useEffect(() => {
    if (typeof dateInHistory !== "undefined" && dateInHistory !== null) {
      setResponse(null);
      axios
        .post(
          config.backend + "/operations/dates-in-history/add",
          dateInHistory,
          {
            validateStatus: function (status) {
              return status >= 200 && status <= 400;
            },
          }
        )
        .then((success: Response<InterestingDateInHistory>) => {
          setResponse(success.data);
        });
    }
  }, [dateInHistory]);
  return response;
}
