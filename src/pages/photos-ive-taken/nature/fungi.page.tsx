import React from "react";
import { SharedRoutes } from "../../../common/shared-routes";
import { SharedText } from "../../../common/shared-text";
import "../../page.css";
import { PhotosIveTakenPage } from "../photos-ive-taken.page";

export function FungiPage() {
  return (
    <PhotosIveTakenPage
      endpoint={SharedRoutes.PhotosIveTaken.Nature.Fungi}
      title={SharedText.PhotosIveTaken.Nature.Fungi}
    />
  );
}
