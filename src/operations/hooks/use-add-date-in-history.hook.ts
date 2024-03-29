import axios from "axios";
import { useEffect, useState } from "react";
import {
  AddDateInHistoryRequest,
  AddDateInHistoryResponse,
} from "robrendellwebsite-common";
import { authorizationHeader } from "../../common/auth-headers";
import { config } from "../../config";

export function useAddDateInHistory(
  dateInHistory: AddDateInHistoryRequest | undefined
) {
  const [response, setResponse] = useState<
    AddDateInHistoryResponse | null | undefined
  >();
  useEffect(() => {
    if (typeof dateInHistory !== "undefined" && dateInHistory !== null) {
      setResponse(null);
      axios
        .post<AddDateInHistoryResponse>(
          config.backend + "/operations/dates-in-history/add",
          dateInHistory,
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
  }, [dateInHistory]);
  return response;
}
