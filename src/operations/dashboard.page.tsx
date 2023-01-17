import React, { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
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
  return (
    <>
      <div className="standard-page-margins standard-page-styling">
        {hasAccess && (
          <>
            <h1>{SharedText.Operations.Dashboard}</h1>
            <Tabs
              defaultActiveKey="page-views"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="page-views" title="Page Views">
                <OpsPageViewsComponent />
              </Tab>
              <Tab eventKey="word-of-the-day" title="Word of the Day">
                <AddWordOfDayComponent />
              </Tab>
              <Tab eventKey="dates-in-history" title="Dates in History">
                <AddInterestingDateInHistoryComponent />
              </Tab>
            </Tabs>
          </>
        )}
      </div>
    </>
  );
}
