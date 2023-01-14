import axios from "axios";
import { useEffect, useState } from "react";
import {
  OperationsDashboardRequest,
  OperationsDashboardResponse,
  PageViewerDocument,
} from "robrendellwebsite-common";
import { config } from "../../config";
import { Response } from "../../models/axios-response-wrapper";

export function useOpsDashboard(request: OperationsDashboardRequest) {
  const [pageViews, setPageViews] = useState<
    (PageViewerDocument | undefined)[] | undefined
  >();
  useEffect(() => {
    axios
      .post(`${config.backend}/operations`, {
        headers: { "Content-Type": "application/json" },
        pageUrls: request.pageUrls,
      })
      .then((res: Response<OperationsDashboardResponse>) => {
        setPageViews(res.data.pageViews);
      });
  }, []);
  return [pageViews];
}
