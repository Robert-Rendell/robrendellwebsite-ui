import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import "../page.css";

export function RecursionLandingPage() {
  usePageView("/recursion");

  return (
    <>
      <div className="standard-page-margins standard-page-styling">
        <h1>Recursion / Fractals Project</h1>

        <h2>Topics</h2>
        <MusicScrollDownMessage youtubeVideoEmbedId="">
          <ol>
            <li>
              <NewTabLink href={SharedRoutes.Recursion.RecursionAndFractals}>
                {SharedText.Recursion.RecursionAndFractals}
              </NewTabLink>
            </li>
            <li>
              <NewTabLink
                href={SharedRoutes.Recursion.BifurcationLogisticalMap}
              >
                {SharedText.Recursion.BifurcationLogisticalMap}
              </NewTabLink>
            </li>
            <li>
              <NewTabLink href={SharedRoutes.Recursion.SimpleEquations}>
                {SharedText.Recursion.SimpleEquations}
              </NewTabLink>
            </li>
          </ol>
        </MusicScrollDownMessage>
      </div>
    </>
  );
}
