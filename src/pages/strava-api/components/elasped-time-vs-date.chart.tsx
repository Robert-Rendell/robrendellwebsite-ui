import linegraph from "../highcharts-templates/linegraph";
import React from "react";
import DashboardChart from "./dashboard.chart";

class ElapsedTimeVsDateChart extends React.Component<any> {
  buildGraph() {
    const graph = JSON.parse(JSON.stringify(linegraph.template));
    if (this.props.type) {
      graph.chart = { type: this.props.type };
    }
    if (this.props.series) {
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
      graph.yAxis = {
        type: "datetime",
        dateTimeLabelFormats: {
          //force all formats to be indexhour:minute:second
          second: "%H:%M",
          minute: "%H:%M",
          hour: "%H:%M",
          day: "%H:%M",
          week: "%H:%M",
          month: "%H:%M",
          year: "%H:%M",
        },
      };
      if (this.props.crosshair) {
        graph.xAxis.crosshair = true;
        graph.yAxis.crosshair = true;
      }
      graph.tooltip = {
        pointFormat:
          "<span style='color:{point.color}'>\u25CF</span><b> {point.label}</b><br/>",
      };
      const graphSeries = [];
      let minYValue = Number.MAX_SAFE_INTEGER;
      let minTimeParsed;
      let minYValueLabel = "No fastest time";
      let minIndex = -1;

      for (const index in this.props.series) {
        const dateParsed = Date.parse(this.props.series[index][0]);
        const hms = this.props.series[index][1]; // your input string
        const a = hms.split(":"); // split it at the colons
        // minutes are worth 60 seconds. Hours are worth 60 minutes.
        const seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
        const timeParsed = Date.parse("1-1-1 " + hms);
        if (seconds < minYValue) {
          minTimeParsed = timeParsed;
          minYValue = seconds;
          minYValueLabel = hms;
          minIndex = parseInt(index);
        }
        const seriesItem = { x: dateParsed, y: timeParsed, label: hms };
        graphSeries.push(seriesItem);
      }

      graph.series = [{ name: "All time", data: graphSeries }];
      graph.yAxis.plotLines = [
        {
          value: minTimeParsed,
          color: "#FF0000",
          dashStyle: "shortdash",
          width: 2,
          label: {
            text:
              "Fastest " +
              this.props.subtitle +
              " - " +
              minYValueLabel +
              " on " +
              this.props.series[minIndex][0].split("T")[0],
          },
        },
      ];
    }
    if (this.props.type === "scatter") {
      graph.plotOptions.scatter = {
        tooltip: {
          headerFormat: "{point.x:%d-%m-%y}<br/>",
          pointFormat: graph.tooltip.pointFormat,
        },
      };
    }
    graph.yAxis.title = { text: this.props.yAxisText };
    return graph;
  }

  render() {
    console.log(
      "Rendering elapsed time vs date chart - [" + this.props.title + "]"
    );
    return (
      <>
        <h2>{this.props.title}</h2>
        <DashboardChart title={this.props.title} options={this.buildGraph()} />
      </>
    );
  }
}

export default ElapsedTimeVsDateChart;
