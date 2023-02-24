import React, { useMemo } from "react";
import { SharedRoutes } from "../common/shared-routes";
import { usePreferences } from "../hooks/use-preferences.hook";
import { useWindowSize } from "../hooks/use-window-size.hook";
import Northumberland from "../resources/flag-of-northumberland.svg";
import Saltire from "../resources/saltire.svg";

export function RobRendellFooterComponent() {
  const { preferences } = usePreferences();
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const isFullScreen =
    preferences?.fullscreen &&
    window.location.pathname.includes(preferences.fullscreen);

  const matrixTheme = useMemo(
    () =>
      window.location.pathname.includes(
        SharedRoutes.Neurochemistry.LandingPage
      ),
    []
  );

  return !isFullScreen ? (
    <div
      style={matrixTheme ? { background: "black" } : { background: "#282c34" }}
    >
      <div className="centred">
        <img
          src={Northumberland}
          width={width / 20}
          style={{ margin: "10px", float: "left" }}
        />
        <img
          src={Saltire}
          width={width / 20}
          style={{ margin: "10px", float: "right" }}
        />
        <span style={{ color: "white", textAlign: "center" }}>
          Copyright &copy; 2021-2023 Robert Rendell. All rights reserved.
        </span>
      </div>
      <div className="centred">
        <span style={{ color: "white", textAlign: "center" }}>
          All views and opinions expressed on this website are my own.
        </span>
      </div>
      <div className="centred">
        <span style={{ color: "white", textAlign: "center" }}>
          [Disclaimer]: I am not medically trained and I don&apos;t take any
          responsibility for you, nor do I accept any liability; go see your GP.
        </span>
      </div>
      <div className="centred">
        <span style={{ color: "white", textAlign: "center" }}>
          [GDPR / Privacy]: By visiting any page other than the home page, you
          consent to me storing your IP address on AWS DynamoDB for educational
          purposes.
        </span>
      </div>
    </div>
  ) : (
    <></>
  );
}
