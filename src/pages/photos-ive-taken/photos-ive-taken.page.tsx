import React, { useCallback, useEffect, useRef, useState } from "react";
import { FullScreenS3ImageComponent } from "../../components/full-screen-image/full-screen-image.component";
import { ImageGallery } from "../../components/image-gallery.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useGetS3ImageUrls } from "./nature/hooks/useGetS3ImageUrls.hook";
import "../page.css";

type Props = {
  endpoint: string;
  title: string;
};
export function PhotosIveTakenPage(props: Props) {
  const handleImageClickedRef = useRef();
  const [images, setImages] = useState<JSX.Element[]>([]);
  const [imagesError, setImagesError] = useState<any>();
  const getS3ImageUrls = useGetS3ImageUrls({
    endpoint: props.endpoint,
    handleImageClickedRef,
  });
  usePageView(props.endpoint);

  const setPhotosIveTakenGallery = useCallback(
    async () =>
      getS3ImageUrls()
        .then((images: JSX.Element[]) => setImages(images))
        .catch((e) => setImagesError(e)),
    [getS3ImageUrls, setImages, setImagesError]
  );

  useEffect(() => {
    setPhotosIveTakenGallery();
    // gets stuck in infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>Photos I&apos;ve Taken: {props.title}</h1>
      <ImageGallery images={images ? images : []} imagesError={imagesError} />
      <FullScreenS3ImageComponent handleShowRef={handleImageClickedRef} />
    </div>
  );
}
