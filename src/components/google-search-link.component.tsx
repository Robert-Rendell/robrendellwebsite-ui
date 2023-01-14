import React from "react";
import { NewTabLink } from "./new-tab-link.component";

type Props = {
  query: string;
  label?: string;
};

export const GoogleSearchLink = (props: Props) => {
  return props.query ? (
    <NewTabLink href={`https://www.google.com/search?q=${props.query}`}>
      {props.label || props.query}
    </NewTabLink>
  ) : (
    <></>
  );
};
