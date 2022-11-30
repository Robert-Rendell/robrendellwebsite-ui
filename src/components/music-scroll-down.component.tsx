import React from "react";
import { useWindowSize } from "../hooks/use-window-size.hook";
import { ScrollToBottomLink } from "./scroll-to-bottom-link.component";
import { ScrollToTopLink } from "./scroll-to-top-link.component";

type Props = {
  youtubeVideoUrl?: string;
  doNotAutoplay?: boolean;
  heightPercent?: number;
};

export function MusicScrollDownMessage(props: React.PropsWithChildren<Props>) {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const height = windowSize[1];
  return (
    <>
      <p>
        <i>
          Scroll down to the <ScrollToBottomLink>bottom</ScrollToBottomLink> of
          this page and play the youtube video if you want music while reading
          :)
        </i>
      </p>
      <hr />
      {props.children}
      {props.youtubeVideoUrl && (
        <>
          <hr />
          <iframe
            width={width}
            height={
              typeof props.heightPercent !== "undefined"
                ? height * props.heightPercent
                : "315"
            }
            src={`${props.youtubeVideoUrl}?${
              props.doNotAutoplay ? "" : "autoplay=1"
            }`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      )}
      <ScrollToTopLink />
    </>
  );
}
