import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { NewTabLink } from "../../components/new-tab-link.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../../pages/page.css";

type Props = {
  pagePageViews?: any;
};

export function OpsPageViewDetailComponent(props: Props) {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const onMobile = width < 600;
  const [drilldown, setDrilldown] = useState<boolean>(false);
  const GoogleMapLink = (ll: any) => {
    return (
      <NewTabLink
        href={`https://www.google.com/maps/search/${ll.ll[0]},${ll.ll[1]}`}
      >
        See on map
      </NewTabLink>
    );
  };
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
            {props.pagePageViews?.views
              .map((pageView: any, index: number) => {
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
                          <td>{pageView.ipAddress}</td>
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
