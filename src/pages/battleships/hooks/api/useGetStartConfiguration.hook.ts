import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  BattleshipsErrorResponse,
  BattleshipsGameId,
  BattleshipsStartConfiguration,
  BattleshipsUser,
  GetBattleshipsStartConfigurationResponse,
  GetStartConfigurationRequest,
} from "robrendellwebsite-common";
import { config } from "../../../../config";
import { BattleshipsAPI } from "../../battleships.api";

type Props = {
  gameId?: BattleshipsGameId;
  user?: BattleshipsUser;
  isGettingStartConfiguration: boolean;
  reset: (startConfiguration?: BattleshipsStartConfiguration) => void;
};
export function useGetStartConfiguration(props: Props) {
  const [startConfiguration, setStartConfiguration] =
    useState<BattleshipsStartConfiguration>();
  const isStartConfiguration = (
    res: GetBattleshipsStartConfigurationResponse
  ): res is BattleshipsStartConfiguration => {
    return (res as BattleshipsErrorResponse).errorMessage === undefined;
  };
  useEffect(() => {
    if (props.gameId && props.user) {
      axios
        .get<
          GetStartConfigurationRequest,
          AxiosResponse<GetBattleshipsStartConfigurationResponse>
        >(
          `${config.backend}${BattleshipsAPI.GET.StartConfiguration.replace(
            ":gameId",
            props.gameId || ""
          ).replace(":username", props.user.username)}`,
          {
            headers: { "Content-Type": "application/json" },
            validateStatus: function (status) {
              return status >= 200 && status <= 400;
            },
          }
        )
        .then(
          (response) => {
            if (isStartConfiguration(response.data)) {
              props.reset(response.data);
              setStartConfiguration(response.data);
            } else {
              props.reset();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isGettingStartConfiguration]);
  return [startConfiguration];
}
