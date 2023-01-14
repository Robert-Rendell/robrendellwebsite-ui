import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function HumanToHumanAttractionPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
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
