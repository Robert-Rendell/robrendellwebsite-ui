import React from "react";

export function Emphasised(props: React.PropsWithChildren) {
  return (
    <>
      <p className="centred">&#62; {props.children} &#60;</p>
    </>
  );
}
