import React from "react";
import { Badge } from "react-bootstrap";
import { PageViewResponse } from "../hooks/use-page-view.hook";
import InfinitySpinner from "../resources/infinity-spinner.svg";

type Props = {
  pageViews?: PageViewResponse;
  caption?: string;
};
export function PageViewsComponent(props: Props) {
  return (
    <>
      {props.caption ? `${props.caption} ` : "Minds unlocked: "}
      {typeof props.pageViews === "undefined" && (
        <img src={InfinitySpinner} height={50} />
      )}
      {props.pageViews && (
        <>
          <Badge bg="dark">
            <>{props.pageViews.total}</>
          </Badge>
        </>
      )}
    </>
  );
}
