import React from "react";
import { render } from "@testing-library/react";
import { GoogleMapLink } from "./google-map-link.component";

describe("GoogleMapLinkComponent", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<GoogleMapLink />);
    expect(asFragment()).toMatchSnapshot();
  });
});
