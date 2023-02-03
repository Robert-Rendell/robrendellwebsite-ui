import axios from "axios";
import { useCallback } from "react";
import { KeepNote } from "robrendellwebsite-common";
import { config } from "../../../config";

type Props = {
  jsonDataS3Url: string;
};

export const useGetImageData = (props: Props) =>
  useCallback(async () => {
    const response = await axios.get<KeepNote>(props.jsonDataS3Url, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  }, [config.backend, props]);
