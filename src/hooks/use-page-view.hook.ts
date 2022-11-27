import axios from "axios";
import { useEffect } from "react";
import { config } from "../config";

export function usePageView(pageUrl: string) {
  useEffect(() => {
    axios
      .post(`${config.backend}/view-page`, {
        headers: { "Content-Type": "application/json" },
        pageUrl: pageUrl,
      });
  }, []);
}