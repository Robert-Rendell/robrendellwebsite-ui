import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  BattleshipsErrorResponse,
  BattleshipsGame,
  GetBattleshipsGameResponse,
  GetGameStateRequest,
} from "robrendellwebsite-common";
import { config } from "../../../config";
import { BattleshipsAPI } from "../battleships.api";

type Props = {
  gameId: string;
};
export function useGetBattleshipsGame(props: Props) {
  const [game, setGame] = useState<BattleshipsGame>();
  const isBattleshipsGame = (
    res: GetBattleshipsGameResponse
  ): res is BattleshipsGame => {
    return (res as BattleshipsErrorResponse).errorMessage === undefined;
  };
  useEffect(() => {
    axios
      .get<GetGameStateRequest, AxiosResponse<GetBattleshipsGameResponse>>(
        `${config.backend}${BattleshipsAPI.GET.GameState.replace(
          ":gameId",
          props.gameId
        )}`,
        {
          headers: { "Content-Type": "application/json" },
          validateStatus: function (status) {
            return status >= 200 && status <= 400;
          },
        }
      )
      .then(
        (response) => {
          if (isBattleshipsGame(response.data)) {
            setGame(response.data);
          } else {
            console.error(response.data.errorMessage, response.data.meta);
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }, [props.gameId]);
  return [game];
}
