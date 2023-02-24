import axios from "axios";
import { useEffect, useState } from "react";

export function useHistoricalStravaData() {
  const [historicalStravaData, setHistoricalStravaData] = useState<any>();
  useEffect(() => {
    axios
      .get<any>(
        "https://robrendellwebsite-public.s3.eu-west-1.amazonaws.com/strava-dashboard-graphs-2019-2021.json",
        { headers: { "Content-Type": "application/json" } }
      )
      .then(
        (success) => {
          setHistoricalStravaData(success.data["strava_dashboard_graphs"]);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);
  return [historicalStravaData];
}
