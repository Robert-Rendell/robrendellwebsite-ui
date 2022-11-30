import axios from "axios";
import { useEffect } from "react";
import { config } from "../config";

export type PageView = {
  ipAddress: string;
  dateTime: string;
};

export type PageViewResponse = {
  total: number;
  views: PageView[];
  pageUrl: string;
}

export function usePageView(pageUrl: string, pageViewsSetFn?: (val: PageViewResponse) => void) {
  useEffect(() => {
    axios
      .post(`${config.backend}/view-page`, {
        headers: { "Content-Type": "application/json" },
        pageUrl: pageUrl,
      })
      .then((res) => {
        if (pageViewsSetFn) {
          pageViewsSetFn(res.data);
        }
      });
  }, [pageUrl]);
}
