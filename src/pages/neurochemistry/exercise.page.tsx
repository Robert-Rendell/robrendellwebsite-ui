import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function ExercisePage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.Exercise);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.Exercise}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="ndqyUDPVBt0">
        <p>
          Exercising is the single best course of action to improve your quality
          of life.
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
