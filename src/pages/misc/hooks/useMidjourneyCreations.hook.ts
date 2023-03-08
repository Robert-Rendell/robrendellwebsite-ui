import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../../../config";

export function useMidjourneyCreations() {
  const [midjourneyS3ImageUrls, setMidjourneyS3ImageUrls] = useState<string[]>(
    []
  );
  useEffect(() => {
    axios
      .get<string[]>(`${config.backend}/misc/midjourney-creations`, {
        headers: { "Content-Type": "application/json" },
      })
      .then(
        (success) => {
          setMidjourneyS3ImageUrls(success.data);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);
  return [midjourneyS3ImageUrls];
}
