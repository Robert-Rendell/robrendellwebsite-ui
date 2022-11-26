import React from "react";

export function ScrollToBottomLink(props: React.PropsWithChildren) {
  return (
    <>
      <a href="javascript: document.body.scrollIntoView(false);">{ props.children ?? "scroll to bottom" }</a>
    </>
  );
}

