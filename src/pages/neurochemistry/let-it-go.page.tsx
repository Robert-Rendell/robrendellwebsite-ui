import React from "react";
import { RobBackButton } from "../../components/back-button.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function LetItGoPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const height = windowSize[1] - 200;
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton /> Let it Go / Let it Be ...
      </h1>
      <iframe
        width={width}
        height={height}
        src="https://www.youtube.com/embed/QDYfEBY9NM4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
