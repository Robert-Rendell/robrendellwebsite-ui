/* eslint-disable indent */
import React, { useMemo, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { InterestingDateInHistory } from "robrendellwebsite-common";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { InfinitySpinnerComponent } from "../../components/infinity-spinner.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { useDatesInHistory } from "./hooks/useDatesInHistory.hook";

const maxLengthOnMobile = 70;
const selectASchool = "--- Select a school ---";

export function InterestingDatesInHistoryPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Miscellaneous.WordOfTheDay);
  const onMobile = width < 600;
  const [datesInHistory] = useDatesInHistory();
  const [expandedDateIndex, setExpandedDateIndex] = useState<number>();
  const schools = useMemo(
    () => Array.from(new Set(datesInHistory?.map((date) => date.school))),
    [datesInHistory]
  );
  const [filter, setFilter] = useState<
    Partial<InterestingDateInHistory> | undefined
  >();
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Miscellaneous.InterestingDatesInHistory}</h1>
      {!datesInHistory ? (
        <InfinitySpinnerComponent />
      ) : (
        <>
          <select
            onChange={(ev) => {
              setFilter({ school: ev.target.value });
            }}
          >
            <option label={selectASchool} value={selectASchool}></option>
            {schools?.map((s) => (
              <>
                <option label={s} value={s}></option>
              </>
            ))}
          </select>
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
                const shouldShow =
                  typeof filter === "undefined" ||
                  filter.school === selectASchool ||
                  filter.school?.toUpperCase() ===
                    dateInHistory.school.trim().toUpperCase();
                return (
                  shouldShow && (
                    <tr key={index}>
                      <td onClick={() => alert("Index: " + index)}>
                        {dateInHistory.date}
                      </td>

                      <td>
                        {dateInHistory.event.length < maxLengthOnMobile ||
                        expandedDateIndex === index ||
                        !onMobile ? (
                          dateInHistory.event
                        ) : (
                          <>
                            {dateInHistory.event.substring(
                              0,
                              maxLengthOnMobile
                            )}{" "}
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
        </>
      )}
      ;
    </div>
  );
}
