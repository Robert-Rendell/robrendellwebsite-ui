import React from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { useKnockKnock } from "../hooks/use-knock-knock.hook";
import { SharedText } from "../common/shared-text";
import { OpsPageViewsComponent } from "./components/page-views.component";
import "../pages/page.css";
import "./operations.page.css";
import { AddWordOfDayComponent } from "./components/add-word-of-day.component";
import { AddInterestingDateInHistoryComponent } from "./components/add-date-in-history.component";
import { KNOCK_KNOCK_SECURITY_KEY } from "../common/constants";

export function OperationsDashboardPage() {
  const [hasAccess] = useKnockKnock();
  const hasToken = Boolean(localStorage.getItem(KNOCK_KNOCK_SECURITY_KEY));
  const clearToken = () => {
    localStorage.setItem(KNOCK_KNOCK_SECURITY_KEY, "");
  };
  return (
    <>
      <div className="standard-page-margins standard-page-styling">
        {hasAccess && (
          <>
            <h1>
              {SharedText.Operations.Dashboard}{" "}
              {hasToken && <Button onClick={clearToken}>Clear token</Button>}
            </h1>

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
              <Tab eventKey="robs-free-dog-walks" title="Rob's Free Dog Walks">
                <a href="https://robrendellwebsite-public.s3.eu-west-1.amazonaws.com/robs-free-dog-walks/dog-walking-calendar.json">
                  Dog Walking Calendar
                </a>
              </Tab>
              <Tab eventKey="shiva-archetypes" title="Shiva Archetypes">
                <a href="https://robrendellwebsite-public.s3.eu-west-1.amazonaws.com/robs-free-dog-walks/dog-walking-calendar.json">
                  Dog Walking Calendar
                </a>
              </Tab>
            </Tabs>
          </>
        )}
      </div>
    </>
  );
}
