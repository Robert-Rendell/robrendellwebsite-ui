import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  BattleshipsErrorResponse,
  BattleshipsGame,
  PostBattleshipsMakeMoveRequest,
  PostBattleshipsMakeMoveResponse,
} from "robrendellwebsite-common";
import { config } from "../../../../config";
import { BattleshipsAPI } from "../../battleships.api";

type Props = Partial<PostBattleshipsMakeMoveRequest> & {
  isSubmittingMove: boolean;
  reset: (newGameState?: BattleshipsGame) => void;
};

export function usePostBattleshipsMakeMove(props: Props) {
  const [newGameState, setNewGameState] = useState<BattleshipsGame>();
  const isBattleshipsGame = (
    res: PostBattleshipsMakeMoveResponse
  ): res is BattleshipsGame => {
    return (res as BattleshipsErrorResponse).errorMessage === undefined;
  };
  useEffect(() => {
    if (
      props.isSubmittingMove &&
      props.move &&
      props.gameId &&
      props.username
    ) {
      axios
        .post<
          unknown,
          AxiosResponse<PostBattleshipsMakeMoveResponse>,
          PostBattleshipsMakeMoveRequest
        >(
          `${config.backend}${BattleshipsAPI.POST.MakeMove.replace(
            ":gameId",
            props.gameId
          )}`,
          {
            gameId: props.gameId,
            move: props.move,
            username: props.username,
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
              setNewGameState(response.data);
              props.reset(response.data);
            } else {
              console.error(response.data.errorMessage, response.data.meta);
              alert(response.data.errorMessage);
              props.reset();
            }
          },
          (error) => {
            console.error(error);
          }
        );
    } else {
      props.reset();
    }
    // Only join when isSubmittingMove changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isSubmittingMove]);
  return [newGameState];
}
