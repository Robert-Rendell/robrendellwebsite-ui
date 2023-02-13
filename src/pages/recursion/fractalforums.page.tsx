import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function FractalForumsPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 20;
  usePageView(SharedRoutes.Recursion.FractalForums);

  return (
    <>
      <div className="standard-page-margins standard-page-styling">
        <h1>
          <RobBackButton /> {SharedText.Recursion.FractalForums}
        </h1>
        <hr />
        <NewTabLink href="https://fractalforums.org">Fractal Forums</NewTabLink>
        <br />
        <NewTabLink href="https://fractalforums.org/index.php?action=gallery;cat=25">
          Image of the Month
        </NewTabLink>
        <hr />
        <img
          src="https://fractalforums.org/gallery/95-290319114302.jpeg"
          width={width}
        />
        <img
          src="https://fractalforums.org/gallery/95-280619003438.jpeg"
          width={width}
        />
        <hr />
      </div>
    </>
  );
}
