/* eslint-disable indent */
import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { useDatesInHistory } from "./hooks/useDatesInHistory.hook";

const maxLengthOnMobile = 70;

export function InterestingDatesInHistoryPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Miscellaneous.WordOfTheDay);
  const onMobile = width < 600;
  const [datesInHistory] = useDatesInHistory();
  const [expandedDateIndex, setExpandedDateIndex] = useState<number>();
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Miscellaneous.InterestingDatesInHistory}</h1>
      <Table variant="dark">
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>School</th>
          </tr>
        </thead>
        <tbody>
          {datesInHistory?.map((dateInHistory, index) => {
            return (
              index > 0 && (
                <tr key={index}>
                  <td>{dateInHistory.date}</td>

                  <td>
                    {dateInHistory.event.length < maxLengthOnMobile ||
                    expandedDateIndex === index ||
                    !onMobile ? (
                      dateInHistory.event
                    ) : (
                      <>
                        {dateInHistory.event.substring(0, maxLengthOnMobile)}{" "}
                        <Button
                          size="sm"
                          onClick={() => setExpandedDateIndex(index)}
                        >
                          ...
                        </Button>
                      </>
                    )}
                    {expandedDateIndex === index && (
                      <Button
                        size="sm"
                        onClick={() => setExpandedDateIndex(undefined)}
                      >
                        x
                      </Button>
                    )}
                  </td>
                  <td>{dateInHistory.school}</td>
                </tr>
              )
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
