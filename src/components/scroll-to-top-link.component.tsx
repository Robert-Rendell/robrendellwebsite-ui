import React from "react";

export function ScrollToTopLink(props: React.PropsWithChildren) {
  return (
    <>
      <a href="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{ props.children ?? "scroll to top" }</a>
    </>
  );
}



