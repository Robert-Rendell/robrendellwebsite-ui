import React from "react";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";
import { RobBackButton } from "../../components/back-button.component";
import { SharedRoutes } from "../../common/shared-routes";
import { usePageView } from "../../hooks/use-page-view.hook";

export function RideABikePage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const height = windowSize[1] - 150;
  usePageView(SharedRoutes.ClimateChange.RideABike);

  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton />
        Cycling: ditch the car and get yourself a pannier rack.
      </h1>
      <p>
        <img
          src="https://ilovebicycling.com/wp-content/uploads/2014/10/picture-123.png"
          width={width}
          height={(width / height) * 450}
        />
      </p>
    </div>
  );
}
