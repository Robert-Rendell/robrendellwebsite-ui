import { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../../../config";
import {
  LeaderboardEntry,
  SudokuLeaderboardResponse,
} from "robrendellwebsite-common";

/**
 * Response:
 * - leaderboard: []
 * - { 'timeTakenMs' | 'dateSubmitted' | 'submitterName' }
 */
export const useGetSudokuLeaderboard = (id?: string, completed?: boolean) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<SudokuLeaderboardResponse>(
        `${config.backend}/sudoku/leaderboard/${id}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setLeaderboard(response.data.leaderboard);
    };
    fetchData();
  }, [id, completed]);

  return leaderboard;
};
