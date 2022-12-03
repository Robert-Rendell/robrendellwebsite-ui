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
          <p>
            We cannot possibly see, smell, feel, touch or hear in 4 dimensions.
            The closest thing we can get is to see a shadow in 3D of a 4D shape.
          </p>
          <p>
            As we are beings inside of a 3D environment, perspective is a huge
            part of this and our eyes are a single viewpoint where the light
            arrives into our cornea. Our eyes always see in 2D; despite our mind
            being able to remember and build a 3d model in our imagination (and
            keep track of that model).
          </p>
          <hr />
          <p>
            The Tesseract is a 4D object that, for the purposes of this article,
            is currently rotating inside 4D space.
          </p>
          <p>
            The animation below is the shadow (if there is such a thing in 4D), of the tesseract shape.
            By rule of extrapolation, 3D objects cast a 2D shadow; and 2D objects cast a 1D shadow.
          </p>
          <p>
            Using this rule, we can say 4D objects cast a 3D shadow. This is what we are looking at below:
          </p>
          <hr />
          <div className="centred">
            <ReactP5Wrapper
              sketch={TesseractHypercube4dSketch}
              screenWidth={width - 50}
            />
          </div>
          <QuestionComponent>
            What is it like to have lived and evolved in 4D?
          </QuestionComponent>
          <p>Imagine our eyes can see in 3D inside a 4D environment.</p>
          <p>
            With our perspective (viewpoint) we can see all sides of the
            tesseract shape at once.
          </p>
          <p>
            Our minds, however, are able to imagine ∞D space (I believe ∞D is
            everything beyond 3D).
          </p>
          <p>
            I believe this is the point where this article relates to recursion.
          </p>
          <p>
            I believe that if there was a species that lived and evolved in 4D,
            their minds would be fully at peace with recursion and infinity.
          </p>
        </MusicScrollDownMessage>
      </div>
    </>
  );
}
