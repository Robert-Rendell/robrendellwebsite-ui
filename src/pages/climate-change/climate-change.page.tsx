import React from "react";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function ClimateChangePage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;

  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>Climate Change Project</h1>
      <h2>Topics</h2>
      <ol>
        <li>
          <a href="/climate-change/ruminants">Ruminants</a>
        </li>
        <li>
          <a href="/climate-change/ride-a-bike">Ride a Bike!</a>
        </li>
        <li>
          <a href="/climate-change/ocean-acidification">Ocean Acidification</a>
        </li>
        <li>
          <a href="/climate-change/reduce-reuse-recycle">
            Reduce, Reuse, Recycle
          </a>
        </li>
        <li>
          <a href="/climate-change/renewable-energy">Renewable Energy</a>
        </li>
        <li>
          <a href="https://www.timeshighereducation.com/impactrankings">
            World University Rankings: Sustainable Development Goals Impact
            Ranking 2022
          </a>
        </li>
      </ol>
      <hr />
      <img
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2015/12/english_SDG_17goals_poster_all_languages_with_UN_emblem_1.png"
        width={width}
        height={width / 1.75}
      />
    </div>
  );
}
