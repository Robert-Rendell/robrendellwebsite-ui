import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import "../page.css";

export function HumanToHumanAttractionPage() {
  usePageView(SharedRoutes.Biomagnetism.HumanToHumanAttraction);
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Biomagnetism.HumanToHumanAttraction}</h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="">
        <p>
          In humans, deposits of magnetite have been found in bones in our
          noses.
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
