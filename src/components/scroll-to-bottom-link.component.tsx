import React from "react";

export function ScrollToBottomLink(props: React.PropsWithChildren) {
  // sub - subscript
  // sup - superscript
  // eg. Z<sub>n+1</sub> = Z<sub>n</sub><sup>2</sup> + C
  return (
    <>
      <a href="javascript: document.body.scrollIntoView(false);">{ props.children ?? "scroll to bottom" }</a>
    </>
  );
}

