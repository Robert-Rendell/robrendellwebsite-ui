import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { bifurcationDiagramSketch } from "./p5-sketches/bifurcation-diagram.sketch";
import "../page.css";
import { SharedText } from "../../common/shared-text";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { RobBackButton } from "../../components/back-button.component";

export function BifurcationLogisticalPage() {
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton /> Chaos Theory:{" "}
        {SharedText.Recursion.BifurcationLogisticalMap}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="ovJcsL7vyrk" msg=" ">
        <ReactP5Wrapper sketch={bifurcationDiagramSketch} />
      </MusicScrollDownMessage>
    </div>
  );
}
