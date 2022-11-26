import React from "react";

export function Equation(props: React.PropsWithChildren) {
  // sub - subscript
  // sup - superscript
  // eg. Z<sub>n+1</sub> = Z<sub>n</sub><sup>2</sup> + C
  return (
    <>
      <h2>
        <ul>
          <li>{ props.children }</li>
        </ul>
      </h2>
    </>
  );
}
