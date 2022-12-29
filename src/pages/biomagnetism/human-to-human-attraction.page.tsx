import React from "react";
import { SharedText } from "../../common/shared-text";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function HumanToHumanAttractionPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
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
