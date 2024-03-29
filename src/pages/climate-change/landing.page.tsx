import React from "react";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import "../page.css";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";

export function ClimateChangeLandingPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.ClimateChange.LandingPage);

  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.ClimateChange.LandingPage}</h1>
      <h2>Topics</h2>
      <ol>
        <li>
          <a href={SharedRoutes.ClimateChange.Ruminants}>
            {SharedText.ClimateChange.Ruminants}
          </a>
        </li>
        <li>
          <a href={SharedRoutes.ClimateChange.RideABike}>
            {SharedText.ClimateChange.RideABike}
          </a>
        </li>
        <li>
          <a href={SharedRoutes.ClimateChange.OceanAcidification}>
            {SharedText.ClimateChange.OceanAcidification}
          </a>
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
          <NewTabLink href="https://www.timeshighereducation.com/impactrankings">
            World University Rankings: Sustainable Development Goals Impact
            Ranking 2022
          </NewTabLink>
        </li>
        <li>
          <NewTabLink href={SharedRoutes.ClimateChange.CarlSagan1985}>
            {SharedText.ClimateChange.CarlSagan1985}
          </NewTabLink>
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
