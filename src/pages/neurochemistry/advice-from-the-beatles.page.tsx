import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function AdviceFromTheBeatlesPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Neurochemistry.AdviceFromTheBeatles);
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>
        <RobBackButton closeWindow /> {SharedText.Neurochemistry.AdviceFromTheBeatles}
      </h1>
      <img width={width} src="https://i.redd.it/ob5eruy3kfe41.jpg" />
    </div>
  );
}
