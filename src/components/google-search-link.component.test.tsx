import React from "react";
import { render } from "@testing-library/react";
import { GoogleSearchLink } from "./google-search-link.component";

describe("GoogleSearchLink", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<GoogleSearchLink query="roberto"/>);
    expect(asFragment()).toMatchSnapshot();
  });
});