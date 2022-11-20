import React from "react";
import "../../page.css";
import { PhotosIveTakenPage } from "../photos-ive-taken.page";

export function InsectsPage() {
  return (
    <PhotosIveTakenPage
      endpoint="/photos-ive-taken/nature/insects"
      title="Photos I've Taken: Insects"
    />
  );
}
