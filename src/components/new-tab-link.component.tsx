import React from "react";

type Props = {
    href?: string,
    label?: string,
}

export function NewTabLink(props: React.PropsWithChildren<Props>) {
  if (!props.children) {
    throw Error("No children in NewTabLink");
  } else {
    return (
      <>
        <a
          href={props.href ?? String(props.children)}
          target="_blank"
          rel="noreferrer"
        >
          {props.label ?? props.children}
        </a>
      </>
    );
  }
}
