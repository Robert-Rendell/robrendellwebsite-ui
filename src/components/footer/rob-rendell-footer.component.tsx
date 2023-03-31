import React, { useMemo } from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { usePreferences } from "../../hooks/use-preferences.hook";
import Northumberland from "../../resources/flag-of-northumberland.svg";
import Saltire from "../../resources/saltire.svg";
import "./rob-rendell-footer.component.css";
import { config } from "../../config";

export function RobRendellFooterComponent() {
  const { preferences } = usePreferences();
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
      className="centred"
      style={{
        ...(matrixTheme ? { background: "black" } : { background: "#282c34" }),
      }}
    >
      <div className="centred">
        {!config.minimal && (
          <>
            <img src={Northumberland} width="5%" className="flag-left" />
            <img src={Saltire} width="5%" className="flag-right" />
          </>
        )}
        <span className="footer-msg">
          Copyright &copy; 2021-2023 Robert Rendell. All rights reserved.
        </span>
      </div>
      {matrixTheme && (
        <>
          <div className="centred">
            <span className="footer-msg">
              All views and opinions expressed on this website are my own.
            </span>
          </div>
          <div className="centred">
            <span className="footer-msg">
              [Disclaimer]: I am not medically trained and I don&apos;t take any
              responsibility for you, nor do I accept any liability; go see your
              GP.
            </span>
          </div>
        </>
      )}
    </div>
  ) : (
    <></>
  );
}
