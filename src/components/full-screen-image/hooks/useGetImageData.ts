import axios from "axios";
import { useCallback } from "react";
import { KeepNote } from "robrendellwebsite-common";
import { config } from "../../../config";

type Props = {
  jsonDataS3Url: string;
};

export const useGetImageData = (props: Props) =>
  useCallback(async () => {
    const response: KeepNote = await axios.get(props.jsonDataS3Url, {
      headers: { "Content-Type": "application/json" },
    });
    return response;
  }, [config.backend, props]);
