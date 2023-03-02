import React, { useState } from "react";
import { InfinitySpinnerComponent } from "../../components/infinity-spinner.component";
import DateRangeChart from "./components/date-range.chart";
import DistanceVsDateChart from "./components/distance-vs-date.chart";
import ElapsedTimeVsDateChart from "./components/elasped-time-vs-date.chart";
import { useHistoricalStravaData } from "./hooks/useHistoricalStravaData.hook";
import "./components/dashboard.chart.css";
import "../page.css";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function StravaDashboardHistoricalComponent() {
  const [stravaGraphs] = useHistoricalStravaData();
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;

  const onMobile = width < 600;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>Historical Strava Charts</h1>
      <p>
        I got injured in 2021 which dented my confidence and exercise
        motivation.
      </p>
      {onMobile && <p>This page is best viewed landscape!</p>}
      {!stravaGraphs && <InfinitySpinnerComponent />}
      {stravaGraphs && (
        <>
          <DateRangeChart
            series={stravaGraphs.accumulated_monthly_run_miles_graph}
            yAxisText="Miles"
            title="Accumulated Monthly Miles - Running"
            xAxis="month"
          />

          <DateRangeChart
            series={stravaGraphs?.accumulated_monthly_ride_miles_graph}
            yAxisText="Miles"
            title="Accumulated Monthly Miles - Cycling"
            xAxis="month"
          />

          <DistanceVsDateChart
            series={stravaGraphs.big_rides_2021}
            yAxisText="Distance (m)"
            title="Long cycles 2021 - over 20km"
            seriesName="2021"
            colour="green"
            xAxis="date"
            type="scatter"
            crosshair="both"
          />

          <DistanceVsDateChart
            series={stravaGraphs.big_rides_2020}
            yAxisText="Distance (m)"
            title="Long cycles 2020 - over 20km"
            seriesName="2020"
            colour="green"
            xAxis="date"
            type="scatter"
            crosshair="both"
          />

          <DistanceVsDateChart
            series={stravaGraphs.big_rides_2019}
            yAxisText="Distance (m)"
            title="Long cycles 2019 - over 20km"
            seriesName="2019"
            colour="green"
            xAxis="date"
            type="scatter"
            crosshair="both"
          />

          <ElapsedTimeVsDateChart
            series={stravaGraphs.run_times_5k}
            yAxisText="Times"
            title="Run Times - 5km"
            subtitle="5km"
            type="spline"
            crosshair="both"
          />

          <ElapsedTimeVsDateChart
            series={stravaGraphs.run_times_10k}
            yAxisText="Times"
            title="Run Times - 10km"
            subtitle="10km"
            type="spline"
          />

          <ElapsedTimeVsDateChart
            series={stravaGraphs.run_times_20k}
            yAxisText="Times"
            title="Run Times - 20km"
            subtitle="20km"
            type="spline"
          />
        </>
      )}
    </div>
  );
}
