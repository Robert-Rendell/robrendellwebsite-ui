import React, { useMemo, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { SharedRoutes } from "../common/shared-routes";
import { useIsMyIPAddress } from "../hooks/use-is-my-ip-address.hook";
import "../pages/page.css";
import { useOpsDashboard } from "./hooks/use-ops-dashboard.hook";
import InfinitySpinner from "../resources/infinity-spinner.svg";
import { OpsPageViewDetailComponent } from "./components/page-view-detail.component";
import { useWindowSize } from "../hooks/use-window-size.hook";

export function OperationsDashboardPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const [hasAccess] = useIsMyIPAddress();
  const allRoutes = useMemo(() => {
    return Object.values(SharedRoutes)
      .map((sharedRoute) => Object.values(sharedRoute))
      .flat()
      .filter((sharedRoute) => !sharedRoute.includes("www.youtube.com"));
  }, []);
  const [pageViews] = useOpsDashboard({ pageUrls: allRoutes });
  const [selectedPageViews, setSelectedPageViews] = useState();
  const onMobile = width < 600;
  return (
    <>
      <div className="standard-page-margins standard-page-styling">
        {hasAccess && (
          <>
            <h1>Operations Dashboard</h1>
            <a href="/">Home</a>
            <hr />
            {selectedPageViews && (
              <>
                <h2>
                  {(selectedPageViews as any).pageUrl}{" "}
                  <Button onClick={() => setSelectedPageViews(undefined)}>
                    X
                  </Button>
                </h2>

                <OpsPageViewDetailComponent pagePageViews={selectedPageViews} />
              </>
            )}
            {typeof pageViews === "undefined" && (
              <p>
                Loading page views: <img src={InfinitySpinner} height={50} />
              </p>
            )}
            {typeof pageViews !== "undefined" && (
              <Table variant="dark" hover>
                <thead>
                  <tr>
                    {!onMobile && <th></th>}
                    <th>Route</th>
                    <th>Page views</th>
                  </tr>
                </thead>
                <tbody>
                  {(pageViews as Array<any>)
                    .filter((pageView) => pageView !== null)
                    .map((pageView, index) => {
                      return (
                        <tr
                          key={index}
                          onClick={() => {
                            window.scrollTo({ top: 0 });
                            setSelectedPageViews(pageView);
                          }}
                        >
                          {!onMobile && (
                            <td>
                              <Button>View</Button>
                            </td>
                          )}
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
