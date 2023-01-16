import React from "react";
import { Table } from "react-bootstrap";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { GoogleSearchLink } from "../../components/google-search-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { useWordOfTheDay } from "./hooks/useWordOfTheDay.hook";

export function WordOfTheDayPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Miscellaneous.WordOfTheDay);
  const onMobile = width < 600;
  const [wordOfTheDay] = useWordOfTheDay();
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Miscellaneous.WordOfTheDay}</h1>
      <Table variant="dark">
        <thead>
          <tr>
            <th>Date</th>
            <th>Word</th>
            <th>Definition</th>
            {!onMobile && <th>Context</th>}
          </tr>
        </thead>
        <tbody>
          {wordOfTheDay?.map((wordDef, index) => {
            return (
              index > 0 && (
                <tr key={index}>
                  <td>{wordDef.date}</td>
                  <td>{wordDef.word}</td>
                  <td>
                    {!onMobile ? (
                      wordDef.definition
                    ) : (
                      <GoogleSearchLink query={wordDef.word} />
                    )}
                  </td>
                  {!onMobile && (
                    <td>{wordDef.context.replace(/Nicole/g, "Yin")}</td>
                  )}
                </tr>
              )
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
