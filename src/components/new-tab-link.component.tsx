import React from "react";

type Props = {
  href?: string;
  label?: string;
  noNewTab?: boolean;
};

const newTabAttributes = {
  target: "_blank",
  rel: "noreferrer",
};

export function NewTabLink(props: React.PropsWithChildren<Props>) {
  if (!props.children) {
    throw Error("No children in NewTabLink");
  } else {
    return (
      <>
        <a
          href={props.href ?? String(props.children)}
          {...(!props.noNewTab ? newTabAttributes : {})}
        >
          {props.label ?? props.children}
        </a>
      </>
    );
  }
}
