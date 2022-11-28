import React from "react";
import { RobBackButton } from "../../components/back-button.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function AdviceFromTheBeatlesPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton closeWindow /> Advice from The Beatles
      </h1>
      <img width={width} src="https://i.redd.it/ob5eruy3kfe41.jpg" />
    </div>
  );
}
