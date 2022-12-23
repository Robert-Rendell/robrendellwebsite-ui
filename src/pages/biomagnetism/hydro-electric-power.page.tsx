import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function MagnetismInHydroElectricPowerPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Biomagnetism.MagnetismInHydroElectricPower}</h1>
      <MusicScrollDownMessage youtubeVideoEmbedId=""></MusicScrollDownMessage>
    </div>
  );
}
