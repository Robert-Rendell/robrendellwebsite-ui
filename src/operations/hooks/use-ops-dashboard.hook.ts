import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../../config";

type Props = {
  pageUrls: string[];
};
export function useOpsDashboard(props: Props) {
  const [pageViews, setPageViews] = useState();
  useEffect(() => {
    axios
      .post(`${config.backend}/operations`, {
        headers: { "Content-Type": "application/json" },
        pageUrls: props.pageUrls,
      })
      .then((res) => {
        setPageViews(res.data.pageViews);
      });
  }, []);
  return [pageViews];
}
