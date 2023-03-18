import React from "react";
import { PhotosIveTakenPage } from "../photos-ive-taken.page";

export function WildFlowersPage() {
  return (
    <PhotosIveTakenPage
      title="Wild Flowers / Garden Flowers"
      endpoint="/photos-ive-taken/nature/wild-flowers"
    />
  );
}
