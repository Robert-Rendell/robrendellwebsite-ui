import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { config } from "../../../config";
import "./uni-data-visualiser.component.css";
class UniDataVisualiserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      bestUnisForSubjectGraph: {},
      submissionsPerYear: {},
    };
    this.bestUnisForSubjectOptions = this.bestUnisForSubjectOptions.bind(this);
    this.submissionsPerYear = this.submissionsPerYear.bind(this);
  }

  /**
   * Object the back end returns:
   * 
   * rawData: {
      submissions;
      institutions;
    };
    bestUnisForSubject: [],
    submissionsPerYear: string[],
    listOfSubjectsAndWhereToStudy: string[];
    covid19CasesPerInstitution: string[];
   */
  componentDidMount() {
    axios
      .get(`${config.backend}/tech-tests/291121/getDashboardGraphs`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        if (response.data.bestUnisForSubject) {
          this.setState({
            bestUnisForSubjectGraph: this.bestUnisForSubjectOptions(
              response.data.bestUnisForSubject
            ),
            listOfSubjectsAndWhereToStudy:
              response.data.listOfSubjectsAndWhereToStudy,
            submissionsPerYear: this.submissionsPerYear(
              response.data.submissionsPerYear
            ),
          });
        }
      });
  }

  bestUnisForSubjectOptions(bestUnisForSubjectData) {
    return {
      chart: {
        type: "bar",
        width: 500,
      },
      title: {
        text: "Best Universities for Subjects",
      },
      subtitle: {
        text: "Based on the average student rating from questionnaire submissions",
      },
      xAxis: {
        enabled: false,
        categories: bestUnisForSubjectData.xAxis,
        title: {
          text: null,
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Average Student Rating",
          align: "high",
        },
        labels: {
          overflow: "justify",
        },
      },
      tooltip: {
        valueSuffix: " millions",
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
        shadow: true,
      },
      credits: {
        enabled: false,
      },
      series: bestUnisForSubjectData.series,
    };
  }

  submissionsPerYear(submissionsPerYearData) {
    return {
      chart: {
        type: "column",
      },
      title: {
        text: "Submissions Per Year",
      },
      xAxis: {
        categories: submissionsPerYearData.xAxis,
      },
      yAxis: {
        min: 0,
        title: {
          text: "No. of submissions",
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: "bold",
            color:
              // theme
              (Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color) ||
              "gray",
          },
        },
      },
      legend: {
        align: "right",
        x: -30,
        verticalAlign: "top",
        y: 25,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "white",
        borderColor: "#CCC",
        borderWidth: 1,
        shadow: false,
      },
      tooltip: {
        headerFormat: "<b>{point.x}</b><br/>",
        pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
      },
      plotOptions: {
        column: {
          stacking: "normal",
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: submissionsPerYearData.series,
      // [{
      //     name: 'John',
      //     data: [5, 3, 4, 7, 2]
      // }]
    };
  }

  render() {
    return (
      <div id="uni-data-body">
        <h2>Table of subjects and where to study</h2>
        <Table>
          <tbody>
            <tr>
              {this.state.listOfSubjectsAndWhereToStudy?.map((value, index) => (
                <td key={index}>{value.split(":")[0]}</td>
              ))}
            </tr>
            <tr>
              {this.state.listOfSubjectsAndWhereToStudy?.map((value, index) => (
                <td key={`${index}-2`}>{value.split(":")[1]}</td>
              ))}
            </tr>
          </tbody>
        </Table>
        <hr />
        <HighchartsReact
          highcharts={Highcharts}
          options={this.state.bestUnisForSubjectGraph}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={this.state.submissionsPerYear}
        />
      </div>
    );
  }
}

export { UniDataVisualiserComponent as default };
