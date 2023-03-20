import React from "react";
import { render } from "@testing-library/react";
import { S3LoadedThumbnail } from "./s3-loaded-image.component";

describe("S3LoadedThumbnail component", () => {
  test.skip("should match snapshot", () => {
    const { asFragment } = render(
      <S3LoadedThumbnail imgUrl="hi/rob?query" onClick={"" as any} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
