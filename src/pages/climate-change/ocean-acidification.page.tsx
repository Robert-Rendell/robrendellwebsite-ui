import React from "react";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";
import { RobBackButton } from "../../components/back-button.component";
import { SharedText } from "../../common/shared-text";
import { usePageView } from "../../hooks/use-page-view.hook";
import { SharedRoutes } from "../../common/shared-routes";

export function OceanAcidification() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const height = windowSize[1] - 150;
  usePageView(SharedRoutes.ClimateChange.OceanAcidification);

  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton />
        {SharedText.ClimateChange.OceanAcidification}
      </h1>
      <iframe
        width={width}
        height={height}
        src="https://www.youtube.com/embed/L2bxwnm7JG4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
