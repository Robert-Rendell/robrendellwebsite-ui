import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { bifurcationDiagramSketch } from "./p5-sketches/bifurcation-diagram.sketch";
import "../page.css";
import { SharedText } from "../../common/shared-text";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { RobBackButton } from "../../components/back-button.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { usePageView } from "../../hooks/use-page-view.hook";
import { SharedRoutes } from "../../common/shared-routes";

export function BifurcationLogisticalPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Recursion.BifurcationLogisticalMap);
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton /> Chaos Theory:{" "}
        {SharedText.Recursion.BifurcationLogisticalMap}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="ovJcsL7vyrk" msg=" ">
        <ReactP5Wrapper sketch={bifurcationDiagramSketch} screenWidth={width} />
      </MusicScrollDownMessage>
    </div>
  );
}
