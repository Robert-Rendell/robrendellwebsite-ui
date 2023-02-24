import React, { useState } from "react";
import { InfinitySpinnerComponent } from "../../components/infinity-spinner.component";
import DateRangeChart from "./components/date-range.chart";
import DistanceVsDateChart from "./components/distance-vs-date.chart";
import ElapsedTimeVsDateChart from "./components/elasped-time-vs-date.chart";
import { useHistoricalStravaData } from "./hooks/useHistoricalStravaData.hook";
import "./components/dashboard.chart.css";

export function StravaDashboardHistoricalComponent() {
  const [stravaGraphs] = useHistoricalStravaData();
  console.log(stravaGraphs);
  return (
    <>
      {!stravaGraphs && <InfinitySpinnerComponent/>}
      {stravaGraphs && (
        <div id="historical-stats-container">
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
            series={stravaGraphs.big_rides_this_year}
            yAxisText="Distance (m)"
            title="Long cycles 2021 - over 20km"
            seriesName="2021"
            colour="green"
            xAxis="date"
            type="scatter"
            crosshair="both"
          />

          <DistanceVsDateChart
            series={stravaGraphs.big_rides_last_year}
            yAxisText="Distance (m)"
            title="Long cycles 2020 - over 20km"
            seriesName="2020"
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
        </div>
      )}
    </>
  );
}
