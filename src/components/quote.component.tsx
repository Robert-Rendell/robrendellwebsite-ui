import React from "react";

type Props = {
  year: number;
};

export function QuoteComponent(props: React.PropsWithChildren<Props>) {
  return (
    <>
      <h2 className="centred">
        <i>&quot;{props.children}&quot;</i>
      </h2>
      <p className="centred">
        <i>Rob Rendell ({props.year})</i>
      </p>
    </>
  );
}
