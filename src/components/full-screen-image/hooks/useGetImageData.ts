import axios from "axios";
import { useCallback } from "react";
import { KeepNote } from "robrendellwebsite-common";
import { config } from "../../../config";
import { Response } from "../../../models/axios-response-wrapper";

type Props = {
  jsonDataS3Url: string;
};

export const useGetImageData = (props: Props) =>
  useCallback(async () => {
    const response: Response<KeepNote> = await axios.get(props.jsonDataS3Url, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  }, [config.backend, props]);
