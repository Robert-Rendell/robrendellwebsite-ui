import axios from "axios";
import { useEffect } from "react";
import { config } from "../config";

export type PageView = {
  ipAddress: { S: string };
  dateTime: { T: Date };
};

export type PageViewResponse = {
  total: { N: number },
  views: PageView[],
  pageUrl: { S: string },
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
