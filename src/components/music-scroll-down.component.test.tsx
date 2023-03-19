import React from "react";
import { render } from "@testing-library/react";
import { MusicScrollDownMessage } from "./music-scroll-down.component";

describe("MusicScrollDownMessage component", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<MusicScrollDownMessage/>);
    expect(asFragment()).toMatchSnapshot();
  });
});