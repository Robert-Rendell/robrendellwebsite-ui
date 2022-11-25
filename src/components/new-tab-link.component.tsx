import React from "react";

type Props = {
    href: string,
}

export function NewTabLink(props: React.PropsWithChildren<Props>) {
  return (
    <>
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
    </>
  );
}
