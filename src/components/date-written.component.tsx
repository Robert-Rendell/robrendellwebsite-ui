import React from "react";

export function DateWritten(props: React.PropsWithChildren) {
  return (
    <>
      <hr />
      <span>
        [<i>Date Written: {props.children}</i>]
      </span>
    </>
  );
}
