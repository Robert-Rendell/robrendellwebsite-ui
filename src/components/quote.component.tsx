import React from "react";

type Props = {
  year: number;
  author?: string;
};

export function QuoteComponent(props: React.PropsWithChildren<Props>) {
  return (
    <>
      <h2 className="centred">
        <i>&quot;{props.children}&quot;</i>
      </h2>
      <p className="centred">
        <i>{`${props.author ? props.author : "Rob Rendell"} (${
          props.year
        })`}</i>
      </p>
    </>
  );
}
