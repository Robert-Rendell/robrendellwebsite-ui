import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { SharedRoutes } from "../common/shared-routes";
import { useIsMyIPAddress } from "../hooks/use-is-my-ip-address.hook";
import { SharedText } from "../common/shared-text";
import { OpsPageViewsComponent } from "./components/page-views.component";
import "../pages/page.css";
import "./operations.page.css";
import { AddWordOfDayComponent } from "./components/add-word-of-day.component";
import { AddInterestingDateInHistoryComponent } from "./components/add-date-in-history.component";

export function OperationsDashboardPage() {
  const [hasAccess] = useIsMyIPAddress();

  const [selectedView, setSelectedView] = useState<string>();
  return (
    <>
      <div className="standard-page-margins standard-page-styling">
        {hasAccess && (
          <>
            <h1>{SharedText.Operations.Dashboard}</h1>
            <div className="ops-dashboard-menu">
              <Button href="/">Home</Button>&nbsp;|&nbsp;
              <Button
                onClick={() =>
                  setSelectedView(SharedRoutes.Operations.PageViews)
                }
              >
                {SharedText.Operations.PageViews}
              </Button>
              &nbsp;|&nbsp;
              <Button
                onClick={() =>
                  setSelectedView(SharedRoutes.Operations.WordOfTheDay)
                }
              >
                {SharedText.Operations.WordOfTheDay}
              </Button>
              &nbsp;|&nbsp;
              <Button
                onClick={() =>
                  setSelectedView(
                    SharedRoutes.Operations.InterestingDatesInHistory
                  )
                }
              >
                {SharedText.Operations.InterestingDatesInHistory}
              </Button>
            </div>
            <hr />
            {selectedView === SharedRoutes.Operations.PageViews && (
              <OpsPageViewsComponent />
            )}
            {selectedView === SharedRoutes.Operations.WordOfTheDay && (
              <AddWordOfDayComponent />
            )}
            {selectedView ===
              SharedRoutes.Operations.InterestingDatesInHistory && (
              <AddInterestingDateInHistoryComponent />
            )}
          </>
        )}
      </div>
    </>
  );
}
