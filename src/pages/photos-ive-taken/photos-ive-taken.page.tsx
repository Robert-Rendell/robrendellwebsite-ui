import React, { useCallback, useEffect, useRef, useState } from "react";
import { FullScreenS3ImageComponent } from "../../components/full-screen-image/full-screen-image.component";
import { ImageGallery } from "../../components/image-gallery.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import "../page.css";
import { useGetS3ImageUrls } from "./nature/hooks/useGetS3ImageUrls.hook";

type Props = {
  endpoint: string;
  title: string;
};
export function PhotosIveTakenPage(props: Props) {
  const handleImageClickedRef = useRef();
  const [images, setImages] = useState<JSX.Element[]>([]);
  const getS3ImageUrls = useGetS3ImageUrls({
    endpoint: props.endpoint,
    handleImageClickedRef,
  });
  usePageView(props.endpoint);

  const setPhotosIveTakenGallery = useCallback(
    async () =>
      getS3ImageUrls().then((images: JSX.Element[]) => setImages(images)),
    [getS3ImageUrls, setImages]
  );

  useEffect(() => {
    setPhotosIveTakenGallery();
  }, [setPhotosIveTakenGallery]);
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>Photos I&apos;ve Taken: {props.title}</h1>
      <ImageGallery images={images ? images : []} />
      <FullScreenS3ImageComponent handleShowRef={handleImageClickedRef} />
    </div>
  );
}
