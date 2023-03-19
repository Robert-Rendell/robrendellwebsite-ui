import React from "react";
import { render } from "@testing-library/react";
import { ImageGallery } from "./image-gallery.component";

describe("ImageGallery Component", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<ImageGallery images={[]}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});