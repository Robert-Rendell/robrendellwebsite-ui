import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "../neurochemistry/components/question.component";
import { TesseractHypercube4dSketch } from "./p5-sketches/4d-hypercube.sketch";

export function DimensionsPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 20;
  usePageView(SharedRoutes.Recursion.Dimensions);

  return (
    <>
      <div
        id="dimensions"
        className="standard-page-margins standard-page-styling"
      >
        <h1>
          <RobBackButton /> {SharedText.Recursion.Dimensions}
        </h1>
        <MusicScrollDownMessage youtubeVideoEmbedId="_2vRbNehGB0">
          <QuestionComponent hrOff>What is 1D, 2D and 3D?</QuestionComponent>
          <p>
            This question is best answered by thinking about a graph:
            <ul>
              <li>1D = one axis (X axis);</li>
              <li>2D = 2 axis (X, Y axis);</li>
              <li>3D = 3 axis (X, Y, Z axis).</li>
            </ul>
          </p>
          <div className="centred">
            <img
              width={width <= 600 ? width : width / 2}
              src="https://t4.ftcdn.net/jpg/05/12/86/27/240_F_512862789_abYbb2RPLzpN8aAjteTBb4xGnRgqVSyw.jpg"
            />
          </div>
          <hr />
          <p></p>
          <h2>The Tesseract: 4D rotating object shadow</h2>
          <div className="centred">
            <ReactP5Wrapper
              sketch={TesseractHypercube4dSketch}
              screenWidth={width - 50}
            />
          </div>
        </MusicScrollDownMessage>
      </div>
    </>
  );
}
