import React from "react";
import { render } from "@testing-library/react";
import { ScrollToBottomLink } from "./scroll-to-bottom-link.component";

describe("ScrollToBottomLink component", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<ScrollToBottomLink />);
    expect(asFragment()).toMatchSnapshot();
  });
});
