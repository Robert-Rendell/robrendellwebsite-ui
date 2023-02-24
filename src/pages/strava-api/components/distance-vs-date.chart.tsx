import linegraph from "../highcharts-templates/linegraph.js";
import React from "react";
import DashboardChart from "./dashboard.chart";

class DistanceVsDateChart extends React.Component<any> {
  buildGraph() {
    const graph = JSON.parse(JSON.stringify(linegraph.template));
    if (this.props.type) {
      graph.chart = { type: this.props.type };
    }
    graph.yAxis.title.text = this.props.yAxisText;

    graph.xAxis = {
      type: "datetime",
      dateTimeLabelFormats: {
        // don't display the dummy year
        month: "%b %Y",
        year: "%b",
      },
      title: {
        text: "Date",
      },
    };

    if (this.props.crosshair) {
      graph.xAxis.crosshair = true;
      graph.yAxis.crosshair = true;
    }

    const graphSeries = [];
    for (const index in this.props.series) {
      const dateParsed = Date.parse(this.props.series[index][0]);
      const seriesData = {
        x: dateParsed,
        y: this.props.series[index][1],
        label:
          this.props.series[index][2] +
          "<br/><b>Elapsed: </b>" +
          this.props.series[index][3] +
          "<br/><b>Elevation: </b>" +
          this.props.series[index][4] +
          "m",
      };
      graphSeries.push(seriesData);
    }

    graph.tooltip = {
      pointFormat:
        "<span style='color:{point.color}'>\u25CF</span><b> {point.label}</b><br/><b>Distance: </b>{point.y:,.0f}m",
    };
    if (this.props.type === "scatter") {
      graph.plotOptions.scatter = {
        tooltip: {
          headerFormat: "{point.x:%d-%m-%y}<br/>",
          pointFormat: graph.tooltip.pointFormat,
        },
      };
    }

    graph.series = [
      {
        name: this.props.seriesName + " - count: " + this.props.series.length,
        data: graphSeries,
        color: this.props.colour,
      },
    ];
    return graph;
  }

  render() {
    console.log(
      "Rendering distance vs date chart - [" + this.props.title + "]"
    );
    return (
      <>
        <DashboardChart title={this.props.title} options={this.buildGraph()} />
      </>
    );
  }
}

export default DistanceVsDateChart;
