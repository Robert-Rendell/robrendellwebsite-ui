import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  BattleshipsErrorResponse,
  BattleshipsGame,
  PostBattleshipsJoinGameRequest,
  PostBattleshipsJoinGameResponse,
} from "robrendellwebsite-common";
import { config } from "../../../config";
import { BattleshipsAPI } from "../battleships.api";

type Props = PostBattleshipsJoinGameRequest & {
  isJoiningGame: boolean;
  reset: () => void;
};

export function usePostBattleshipsJoinGame(props: Props) {
  const [game, setGame] = useState<BattleshipsGame>();
  const isBattleshipsGame = (
    res: PostBattleshipsJoinGameResponse
  ): res is BattleshipsGame => {
    return (res as BattleshipsErrorResponse).errorMessage === undefined;
  };
  useEffect(() => {
    if (props.isJoiningGame && props.username && props.gameId) {
      axios
        .post<
          unknown,
          AxiosResponse<PostBattleshipsJoinGameResponse>,
          PostBattleshipsJoinGameRequest
        >(
          `${config.backend}${BattleshipsAPI.POST.Join}`,
          {
            ...props,
          },
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
              props.reset();
            } else {
              console.error(response.data.errorMessage, response.data.meta);
              alert(response.data.errorMessage);
            }
          },
          (error) => {
            console.error(error);
          }
        );
    } else {
      props.reset();
    }
    // Only join when isJoiningGame changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isJoiningGame]);
  return [game];
}
