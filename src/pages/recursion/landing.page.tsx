import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { DateWritten } from "../../components/date-written.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import "../page.css";

export function RecursionLandingPage() {
  usePageView(SharedRoutes.Recursion.LandingPage);
  return (
    <>
      <div className="standard-page-margins standard-page-styling">
        <h1>{SharedText.Recursion.RecursionAndFractals}</h1>
        <DateWritten>Nov 2022</DateWritten>
        <MusicScrollDownMessage youtubeVideoEmbedId="GRQDOyO68kY" start={3}>
          <h2>Topics</h2>
          <ol>
            <li>
              <NewTabLink
                href={SharedRoutes.Recursion.RecursionAndFractals}
                noNewTab
              >
                {SharedText.Recursion.RecursionAndFractals}
              </NewTabLink>
            </li>
            <li>
              <NewTabLink
                href={SharedRoutes.Recursion.BifurcationLogisticalMap}
                noNewTab
              >
                {SharedText.Recursion.BifurcationLogisticalMap}
              </NewTabLink>
            </li>
            <li>
              <NewTabLink
                href={SharedRoutes.Recursion.SimpleEquations}
                noNewTab
              >
                {SharedText.Recursion.SimpleEquations}
              </NewTabLink>
            </li>
            <li>
              <NewTabLink href={SharedRoutes.Recursion.Dimensions} noNewTab>
                {SharedText.Recursion.Dimensions}
              </NewTabLink>
            </li>
            <li>
              <NewTabLink
                href={SharedRoutes.Recursion.IsImaginationASense}
                noNewTab
              >
                {SharedText.Recursion.IsImaginationASense}
              </NewTabLink>
            </li>
          </ol>
        </MusicScrollDownMessage>
      </div>
    </>
  );
}
