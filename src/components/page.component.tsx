import React from "react";
import { usePageView } from "../hooks/use-page-view.hook";
import "../pages/page.css";
type Props = {
  route: string;
  title: string;
};
export function PageComponent(props: React.PropsWithChildren<Props>) {
  usePageView(props.route);
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{props.title}</h1>
      <hr />
      {props.children}
    </div>
  );
}
