import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function LetItGoPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const height = windowSize[1] - 200;
  usePageView(SharedRoutes.Neurochemistry.LetItBe);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.LetItBe} ...
      </h1>
      <iframe
        width={width}
        height={height}
        src="https://www.youtube.com/embed/QDYfEBY9NM4?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
