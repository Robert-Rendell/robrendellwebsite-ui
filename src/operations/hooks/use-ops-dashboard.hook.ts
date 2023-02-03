import axios from "axios";
import { useEffect, useState } from "react";
import {
  OperationsDashboardRequest,
  OperationsDashboardResponse,
  PageViewerDocument,
} from "robrendellwebsite-common";
import { config } from "../../config";

export function useOpsDashboard(request: OperationsDashboardRequest) {
  const [pageViews, setPageViews] = useState<
    (PageViewerDocument | undefined)[] | undefined
  >();
  useEffect(() => {
    axios
      .post<OperationsDashboardResponse>(`${config.backend}/operations`, {
        headers: { "Content-Type": "application/json" },
        pageUrls: request.pageUrls,
      })
      .then((res) => {
        setPageViews(res.data.pageViews);
      });
  }, []);
  return [pageViews];
}
