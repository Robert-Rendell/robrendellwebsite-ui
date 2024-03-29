import React, { useMemo, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { PageViewerDocument } from "robrendellwebsite-common";
import { SharedRoutes } from "../../common/shared-routes";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { useOpsDashboard } from "../hooks/use-ops-dashboard.hook";
import { OpsPageViewDetailComponent } from "./page-view-detail.component";
import InfinitySpinner from "../../resources/infinity-spinner.svg";

export function OpsPageViewsComponent() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const allRoutes = useMemo(() => {
    const routes = Object.values(SharedRoutes)
      .map((sharedRoute) => Object.values(sharedRoute))
      .flat()
      .filter(
        (sharedRoute) =>
          typeof sharedRoute === "string" &&
          !sharedRoute.includes("www.youtube.com")
      );
    routes.push(...Object.values(SharedRoutes.PhotosIveTaken.Nature));
    return routes;
  }, []);
  const [pageViews] = useOpsDashboard({ pageUrls: allRoutes });

  const [selectedPageViews, setSelectedPageViews] = useState<
    PageViewerDocument | undefined
  >();
  const onMobile = width < 600;
  return (
    <>
      {selectedPageViews && (
        <>
          <h2>
            {selectedPageViews.pageUrl}{" "}
            <Button onClick={() => setSelectedPageViews(undefined)}>X</Button>
          </h2>

          <OpsPageViewDetailComponent pageViewerDoc={selectedPageViews} />
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
            {pageViews
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
                    <td>{pageView?.pageUrl}</td>
                    <td>{pageView?.total}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </>
  );
}
