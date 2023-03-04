import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  BattleshipsErrorResponse,
  BattleshipsGame,
  PostBattleshipsCreateGameRequest,
  PostBattleshipsCreateGameResponse,
} from "robrendellwebsite-common";
import { config } from "../../../config";
import { BattleshipsAPI } from "../battleships.api";

type Props = PostBattleshipsCreateGameRequest & {
  isCreatingGame: boolean;
  reset: () => void;
};

export function usePostBattleshipsCreateGame(props: Props) {
  const [game, setGame] = useState<BattleshipsGame>();
  const isBattleshipsGame = (
    res: PostBattleshipsCreateGameResponse
  ): res is BattleshipsGame => {
    return (res as BattleshipsErrorResponse).errorMessage === undefined;
  };
  useEffect(() => {
    if (
      props.isCreatingGame &&
      props.username &&
      props.boardDimensions.length
    ) {
      axios
        .post<
          unknown,
          AxiosResponse<PostBattleshipsCreateGameResponse>,
          PostBattleshipsCreateGameRequest
        >(
          `${config.backend}${BattleshipsAPI.POST.Create}`,
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
            }
          },
          (error) => {
            console.error(error);
          }
        );
    } else {
      props.reset();
    }
    // Only create when isCreatingGame changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isCreatingGame]);
  return [game];
}
