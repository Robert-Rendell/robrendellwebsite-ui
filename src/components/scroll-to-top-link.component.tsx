import React from "react";

export function ScrollToTopLink() {
  return (
    <>
      <span>
        Back to&nbsp;
        <a
          href=""
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
        top of page
        </a>.
      </span>
    </>
  );
}
