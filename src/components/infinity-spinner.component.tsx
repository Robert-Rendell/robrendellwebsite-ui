import React from "react";
import InfinitySpinner from "../resources/infinity-spinner.svg";

type Props = {
  size?: number;
};
export function InfinitySpinnerComponent(props: Props) {
  return <img src={InfinitySpinner} width={props.size} />;
}
