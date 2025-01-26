import React from "react";
import { Table } from "react-bootstrap";
import { LeaderboardEntry } from "robrendellwebsite-common";
import { useConvertMsToMinsSecs } from "../../hooks/useConvertMsToMinSecs.hook";

type Props = {
  leaderboard: LeaderboardEntry[];
};
export function SudokuLeaderboardComponent(props: Props) {
  const convertMsToMinsSecs = useConvertMsToMinsSecs();
  const leaderboardEntries = props.leaderboard
    ?.slice(0, 5)
    .map((item: LeaderboardEntry, index: number) => {
      return (
        <tr key={`leaderboard-entry-${index}`}>
          <td>{index + 1}</td>
          <td>
            {new Date(item.dateCompleted || (item as any).dateSubmitted)
              .toUTCString()
              .replace("GMT", "")}
          </td>
          <td>{item.submitterName || "anonymous"}</td>
          <td>{convertMsToMinsSecs(item.timeTakenMs)}</td>
          <td>{item.timesValidated || "-"}</td>
          <td>{item.invalidSubmissionCount || "-"}</td>
        </tr>
      );
    });
  return leaderboardEntries.length > 0 ? (
    <div id="leaderboard_parent" className="col left-right-padding-5">
      <div id="leaderboard">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Name</th>
              <th>Time</th>
              <th>Checks</th>
              <th>Mistakes</th>
            </tr>
          </thead>
          <tbody>{leaderboardEntries}</tbody>
        </Table>
      </div>
    </div>
  ) : (
    <></>
  );
}
