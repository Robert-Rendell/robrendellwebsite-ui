import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function BiomagnetismLandingPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Biomagnetism.LandingPage}</h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="F0NraYVUuvw">
        <h2>Topics</h2>
        <ol>
          <li>
            <NewTabLink
              href={SharedRoutes.Biomagnetism.MigratingBirds}
              noNewTab
            >
              {SharedText.Biomagnetism.MigratingBirds}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Biomagnetism.BiomagnetismInTheOcean}
              noNewTab
            >
              {SharedText.Biomagnetism.BiomagnetismInTheOcean}
            </NewTabLink>
          </li>
          <li>
            {/* <NewTabLink
              href={SharedRoutes.Biomagnetism.MagnetismInHydroElectricPower}
              noNewTab
            >
              {SharedText.Biomagnetism.MagnetismInHydroElectricPower}
            </NewTabLink> */}
            {SharedText.Biomagnetism.MagnetismInHydroElectricPower}... coming
            soon
          </li>
          <li>
            {/* <NewTabLink href={SharedRoutes.Biomagnetism.WhatAreVibes} noNewTab>
              {SharedText.Biomagnetism.WhatAreVibes}
            </NewTabLink> */}
            {SharedText.Biomagnetism.WhatAreVibes}... coming soon
          </li>
          <li>
            {/* <NewTabLink href={SharedRoutes.Biomagnetism.HumanToHumanAttraction} noNewTab>
              {SharedText.Biomagnetism.HumanToHumanAttraction}
            </NewTabLink> */}
            {SharedText.Biomagnetism.HumanToHumanAttraction}... coming soon
          </li>
        </ol>
        <p>
          <i>
            <NewTabLink href="/biomagnetism/references" noNewTab>
              References
            </NewTabLink>
          </i>
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
