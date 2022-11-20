import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { IndianBeliefsPieChart } from "./components/indian-beliefs.component";
import "./india.page.css";

export function IndiaPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div id="india-page">
      <h1>India</h1>
      <hr />
      <h2>2nd Largest Country by Population</h2>
      <hr />
      <h2>
        Home of the Oldest Belief System: <u>Hinduism</u>
      </h2>
      <hr />
      <HighchartsReact
        highcharts={Highcharts}
        options={IndianBeliefsPieChart}
      />
      <hr />
      <h1>Indian Regions</h1>
      <img
        width={width}
        src="https://img.freepik.com/premium-vector/high-quality-labeled-map-india-with-borders-regions_97886-10486.jpg?w=900"
      />
      <hr />
      <h1>Indian Languages</h1>
      <img
        width={width}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Language_region_maps_of_India.svg/1024px-Language_region_maps_of_India.svg.png"
      />
    </div>
  );
}
