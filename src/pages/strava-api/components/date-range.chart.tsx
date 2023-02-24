import linegraph from "../highcharts-templates/linegraph.js";
import React from "react";
import DashboardChart from "./dashboard.chart";

class DateRangeChart extends React.Component<any> {
  buildGraph() {
    const graph = JSON.parse(JSON.stringify(linegraph.template));

    graph.yAxis.title.text = this.props.yAxisText;

    if (this.props.xAxis === "month") {
      graph.xAxis.categories = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    }

    if (this.props.yAxisText === "Miles") {
      graph.tooltip = {
        valueDecimals: 0,
        valueSuffix: " miles",
      };
    }

    const graphSeries = [];
    for (const index in this.props.series) {
      const seriesData = linegraph.seriesDataTemplate(
        index,
        this.props.series[index]
      );
      graphSeries.push(seriesData);
    }

    graph.series = graphSeries;
    return graph;
  }

  render() {
    console.log("Rendering date range chart - [" + this.props.title + "]");
    return (
      <>
        <h2>{this.props.title}</h2>
        <DashboardChart title={this.props.title} options={this.buildGraph()} />
      </>
    );
  }
}

export default DateRangeChart;
