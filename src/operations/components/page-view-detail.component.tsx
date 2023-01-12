import React from "react";
import { Table } from "react-bootstrap";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../../pages/page.css";

type Props = {
  pagePageViews?: any;
};

export function OpsPageViewDetailComponent(props: Props) {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <>
      <div className="standard-page-margins standard-page-styling">
        <Table variant="dark" hover className="small-table" width={width / 2}>
          <thead>
            <tr>
              <th>Date</th>
              <th>IP</th>
              <th>Location/Timezone</th>
              <th>Region</th>
              <th>Country</th>
              <th>Lat/Lng</th>
            </tr>
          </thead>
          <tbody style={{ borderTop: "none" }}>
            {props.pagePageViews?.views
              .map((pageView: any, index: number) => {
                return (
                  <>
                    <tr key={index}>
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
                      <td>{pageView.ipLocation?.region}</td>
                      <td>{pageView.ipLocation?.country}</td>
                      <td>{pageView.ipLocation?.ll}</td>
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
