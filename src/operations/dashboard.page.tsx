import React, { useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import { SharedRoutes } from "../common/shared-routes";
import {
  useIsMyIPAddress,
} from "../hooks/use-is-my-ip-address.hook";
import "../pages/page.css";
import { useOpsDashboard } from "./hooks/use-ops-dashboard.hook";
import InfinitySpinner from "../resources/infinity-spinner.svg";

export function OperationsDashboardPage() {
  const [hasAccess] = useIsMyIPAddress();
  const allRoutes = useMemo(() => {
    return Object.values(SharedRoutes)
      .map((sharedRoute) => Object.values(sharedRoute))
      .flat()
      .filter((sharedRoute) => !sharedRoute.includes("www.youtube.com"));
  }, []);
  const [pageViews] = useOpsDashboard({ pageUrls: allRoutes });
  return (
    <>
      <div className="standard-page-margins standard-page-styling">
        {hasAccess && (
          <>
            <h1>Operations Dashboard</h1>
            <a href="/">Home</a>
            <hr/>
            {typeof pageViews === "undefined" && (
              <p>Loading page views: <img src={InfinitySpinner} height={50} /></p>
            )}
            {typeof pageViews !== "undefined" && (
              <Table variant="dark" hover>
                <thead>
                  <tr>
                    <th>Route</th>
                    <th>Page views</th>
                  </tr>
                </thead>
                <tbody>
                  {(pageViews as Array<any>)
                    .filter((pageView) => pageView !== null)
                    .map((pageView, index) => {
                      return (
                        <tr key={index}>
                          <td>{pageView.pageUrl}</td>
                          <td>{pageView.total}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            )}
          </>
        )}
      </div>
    </>
  );
}
