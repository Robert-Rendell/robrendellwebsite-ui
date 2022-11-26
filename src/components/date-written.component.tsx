import React from "react";

export function DateWritten(props: React.PropsWithChildren) {
  return (
    <>
      <hr/>
      <p style={{textAlign: "right", }}>
        [<i>Date Written: {props.children}</i>]
      </p>
      <hr/>
    </>
  );
}
