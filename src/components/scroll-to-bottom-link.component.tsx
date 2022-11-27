import React from "react";

export function ScrollToBottomLink(props: React.PropsWithChildren) {
  return (
    <>
      <a
        className="scroll-to-bottom"
        onClick={() => document.body.scrollIntoView(false)}
      >
        {props.children ?? "scroll to bottom"}
      </a>
    </>
  );
}
