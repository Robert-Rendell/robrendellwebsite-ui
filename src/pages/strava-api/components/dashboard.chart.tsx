import React from "react";
import Card from "react-bootstrap/Card";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./dashboard.chart.css";

function DashboardChart(props: any) {
  return (
    <Card className="card">
      <Card.Header as="h5">{props.title}</Card.Header>
      <Card.Body className="card-body">
        <HighchartsReact highcharts={Highcharts} options={props.options} />
      </Card.Body>
    </Card>
  );
}

export default DashboardChart;
