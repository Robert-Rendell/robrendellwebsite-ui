import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  BattleshipsErrorResponse,
  BattleshipsStartConfiguration,
  PostBattleshipsStartConfigurationResponse,
  PostStartConfigurationRequest,
} from "robrendellwebsite-common";
import { config } from "../../../../config";
import { BattleshipsAPI } from "../../battleships.api";

type Props = {
  isSubmittingStartConfiguration: boolean;
  proposedStartConfiguration?: BattleshipsStartConfiguration;
  reset: (success?: boolean) => void;
};

export function usePostBattleshipsStartConfiguration(props: Props) {
  const [startConfiguration, setStartConfiguration] =
    useState<BattleshipsStartConfiguration>();
  const isStartConfiguration = (
    res: PostBattleshipsStartConfigurationResponse
  ): res is BattleshipsStartConfiguration => {
    return (res as BattleshipsErrorResponse).errorMessage === undefined;
  };
  const { username, gameId } = props.proposedStartConfiguration || {};
  useEffect(() => {
    if (
      props.isSubmittingStartConfiguration &&
      props.proposedStartConfiguration &&
      username &&
      gameId
    ) {
      axios
        .post<
          unknown,
          AxiosResponse<PostBattleshipsStartConfigurationResponse>,
          PostStartConfigurationRequest
        >(
          `${config.backend}${BattleshipsAPI.POST.StartConfiguration.replace(
            ":username",
            username
          ).replace(":gameId", gameId)}`,
          {
            ...props.proposedStartConfiguration,
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
            if (isStartConfiguration(response.data)) {
              setStartConfiguration(response.data);
              props.reset(true);
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
    // Only join when isSubmittingStartConfiguration changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isSubmittingStartConfiguration]);
  return [startConfiguration];
}
