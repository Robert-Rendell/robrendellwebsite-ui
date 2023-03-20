import React from "react";
import { render } from "@testing-library/react";
import { NewTabLink } from "./new-tab-link.component";

describe("NewTabLink component", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(
      <NewTabLink>
        <></>
      </NewTabLink>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
