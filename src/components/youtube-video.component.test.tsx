import React from "react";
import { render } from "@testing-library/react";
import { YouTubeVideoComponent } from "./youtube-video.component";

describe("YouTubeVideoComponent", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<YouTubeVideoComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
