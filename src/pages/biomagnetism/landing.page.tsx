import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { DateWritten } from "../../components/date-written.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import "../page.css";

export function BiomagnetismLandingPage() {
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Biomagnetism.LandingPage}</h1>
      <DateWritten>December 2022 and Jan 2023</DateWritten>
      <MusicScrollDownMessage youtubeVideoEmbedId="F0NraYVUuvw">
        <h2>Topics</h2>
        <ol className="ol-extra-margins">
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
            <NewTabLink
              href={SharedRoutes.Biomagnetism.MagneticFieldOnEarth}
              noNewTab
            >
              {SharedText.Biomagnetism.MagneticFieldOnEarth}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Biomagnetism.MagnetismInHydroElectricPower}
              noNewTab
            >
              {SharedText.Biomagnetism.MagnetismInHydroElectricPower}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={
                SharedRoutes.Biomagnetism
                  .FerromagnetismParamagnetismDiamagnetism
              }
              noNewTab
            >
              {SharedText.Biomagnetism.FerromagnetismParamagnetismDiamagnetism}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink href={SharedRoutes.Biomagnetism.WhatAreVibes} noNewTab>
              {SharedText.Biomagnetism.WhatAreVibes}
            </NewTabLink>
          </li>
          <li>
            {/* <NewTabLink href={SharedRoutes.Biomagnetism.HumanToHumanAttraction} noNewTab>
              {SharedText.Biomagnetism.HumanToHumanAttraction}
            </NewTabLink> */}
            {SharedText.Biomagnetism.HumanToHumanAttraction}... coming soon
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Biomagnetism.IsBloodMagnetic}
              noNewTab
            >
              {SharedText.Biomagnetism.IsBloodMagnetic}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Biomagnetism.ElectromagneticPulses}
              noNewTab
            >
              {SharedText.Biomagnetism.ElectromagneticPulses}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={SharedRoutes.Biomagnetism.VeritasiumHumanCompass}
              noNewTab
            >
              {SharedText.Biomagnetism.VeritasiumHumanCompass}
            </NewTabLink>
          </li>
          <li>
            <NewTabLink
              href={
                SharedRoutes.Biomagnetism.MagnetismInTheHumanEndocrineSystem
              }
              noNewTab
            >
              {SharedText.Biomagnetism.MagnetismInTheHumanEndocrineSystem}
            </NewTabLink>
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
