import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { PageView, PageViewerDocument } from "robrendellwebsite-common";
import { GoogleMapLink } from "../../components/google-map-link.component";
import { GoogleSearchLink } from "../../components/google-search-link.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../../pages/page.css";

type Props = {
  pageViewerDoc?: PageViewerDocument;
};

export function OpsPageViewDetailComponent(props: Props) {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const onMobile = width < 600;
  const [drilldown, setDrilldown] = useState<boolean>(false);
  return (
    <>
      <div className="standard-page-margins standard-page-styling">
        <Table variant="dark" hover className="small-table" width={width / 2}>
          <thead>
            <tr>
              {!drilldown && (
                <>
                  <th>Date</th>
                  <th>IP</th>
                  <th>Location/Timezone</th>
                </>
              )}
              {(drilldown || !onMobile) && (
                <>
                  <th>Region</th>
                  <th>Country</th>
                  <th>Lat/Lng</th>
                </>
              )}
            </tr>
          </thead>
          <tbody style={{ borderTop: "none" }}>
            {props.pageViewerDoc?.views
              .map((pageView: PageView, index: number) => {
                return (
                  <>
                    <tr
                      key={index}
                      onClick={() => {
                        if (onMobile) setDrilldown(!drilldown);
                      }}
                    >
                      {!drilldown && (
                        <>
                          <td>
                            {pageView.dateTime.replace(
                              "GMT+0000 (Coordinated Universal Time)",
                              ""
                            )}
                          </td>
                          <td>
                            <GoogleSearchLink query={pageView.ipAddress} />
                          </td>
                          <td>
                            {pageView.ipLocation?.city ||
                              pageView.ipLocation?.timezone}
                          </td>
                        </>
                      )}
                      {(drilldown || !onMobile) && (
                        <>
                          <td>{pageView.ipLocation?.region}</td>
                          <td>{pageView.ipLocation?.country}</td>
                          <td>
                            <GoogleMapLink ll={pageView.ipLocation?.ll} />
                          </td>
                        </>
                      )}
                    </tr>
                  </>
                );
              })
              .reverse()}
          </tbody>
        </Table>
      </div>
    </>
  );
}
