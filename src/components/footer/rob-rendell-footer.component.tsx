import React, { useCallback, useMemo } from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { usePreferences } from "../../hooks/use-preferences.hook";
import Northumberland from "../../resources/flag-of-northumberland.svg";
import Saltire from "../../resources/saltire.svg";
import "./rob-rendell-footer.component.css";
import { config } from "../../config";
import { DISABLE_CUSTOM_ANALYTICS_KEY } from "../../common/constants";

export function RobRendellFooterComponent() {
  const { preferences } = usePreferences();
  const isFullScreen =
    preferences?.fullscreen &&
    window.location.pathname.includes(preferences.fullscreen);

  const disableAnalytics = useCallback(
    () => localStorage.setItem(DISABLE_CUSTOM_ANALYTICS_KEY, "true"),
    []
  );

  return !isFullScreen ? (
    <div
      className="centred"
      style={{
        background: "#282c34",
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
          Copyright &copy; 2021-2024 Robert Rendell.{" "}
          <span onClick={disableAnalytics}>All</span> rights reserved.
        </span>
      </div>
    </div>
  ) : (
    <></>
  );
}
