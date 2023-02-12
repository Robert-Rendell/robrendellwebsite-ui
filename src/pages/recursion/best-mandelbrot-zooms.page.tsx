import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";

export function BestMandelbrotZoomsPage() {
  usePageView(SharedRoutes.Recursion.BestMandelbrotZooms);

  return (
    <>
      <div className="standard-page-margins standard-page-styling">
        <h1>
          <RobBackButton /> {SharedText.Recursion.BestMandelbrotZooms}
        </h1>
        <hr/>
        <p>
          3D mandelbrot - ice music, lots of volcanos, mountains, forests and
          Borobudur temples
          <br />
          <NewTabLink href="https://www.youtube.com/watch?v=bQwx44v60Gk">Watch</NewTabLink>
        </p>
        <hr/>
        <p>
          2D mandelbrot - Slow and extremely detailed, self referencing obvious
          which is a delight, nice music. Could be watched at 1.5x speed but you
          might miss detail.
          <br />
          <NewTabLink href="https://www.youtube.com/watch?v=7SH2vnZ9Cu8">Watch</NewTabLink>
        </p>
        <hr/>
      </div>
    </>
  );
}
