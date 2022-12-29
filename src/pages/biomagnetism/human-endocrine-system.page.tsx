import React from "react";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function BiomagnetismInHumanEndocrineSystemPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton /> {SharedText.Biomagnetism.MagnetismInTheHumanEndocrineSystem}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="">
        <p>
          Use google doc to populate this page
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
