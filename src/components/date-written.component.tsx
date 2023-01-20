import React from "react";

type Props = {
  dateStarted?: boolean;
};

export function DateWritten(props: React.PropsWithChildren<Props>) {
  return (
    <>
      <hr />
      <span>
        [
        <i>
          Date {props.dateStarted ? "Project Started" : "Written"}:{" "}
          {props.children}
        </i>
        ]
      </span>
    </>
  );
}
