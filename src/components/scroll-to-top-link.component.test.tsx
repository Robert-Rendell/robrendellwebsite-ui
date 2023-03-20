import React from "react";
import { render } from "@testing-library/react";
import { ScrollToTopLink } from "./scroll-to-top-link.component";

describe("ScrollToTopLink component", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<ScrollToTopLink/>);
    expect(asFragment()).toMatchSnapshot();
  });
});