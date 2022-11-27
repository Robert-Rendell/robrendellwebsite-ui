import React from "react";

export function ScrollToTopLink() {
  return (
    <>
      <span>
        Back to&nbsp;
        <a
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          top of page
        </a>
        .
      </span>
    </>
  );
}
