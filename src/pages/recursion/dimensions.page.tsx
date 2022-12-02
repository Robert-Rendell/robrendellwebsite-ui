import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { QuestionComponent } from "../neurochemistry/components/question.component";

export function DimensionsPage() {
  usePageView(SharedRoutes.Recursion.SimpleEquations);

  return (
    <>
      <div
        id="dimensions"
        className="standard-page-margins standard-page-styling"
      >
        <h1>{SharedText.Recursion.Dimensions}</h1>
        <MusicScrollDownMessage youtubeVideoEmbedId="_2vRbNehGB0">
          <QuestionComponent>What is 1D, 2D and 3D?</QuestionComponent>
        </MusicScrollDownMessage>
      </div>
    </>
  );
}
