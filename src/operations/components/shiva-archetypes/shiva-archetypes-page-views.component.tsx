import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { PageViewerDocument } from "robrendellwebsite-common";

import { useWindowSize } from "../../../hooks/use-window-size.hook";
import { useOpsDashboard } from "../../hooks/use-ops-dashboard.hook";
import { OpsPageViewDetailComponent } from "../page-view-detail.component";

import InfinitySpinner from "../../../resources/infinity-spinner.svg";

export function ShivaArchetypesPageViewsComponent() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const allRoutes = [
    "lyrics/hunters-prayer",
    "lyrics/a-certain-truth",
    "lyrics/you-put-me-here",
    "lyrics/working-class-tories",
    "lyrics/triathlon",
    "lyrics/secret-service",
    "lyrics/play-to-your-strengths",
    "lyrics/natural-wonders",
    "lyrics/fourth-brain-between-the-legs",
    "newspaper-stories/gili-t-mabul",
    "newspaper-stories/the-scottish-mental-health-tribunal",
  ];
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
