import React from "react";
import { useWindowSize } from "../hooks/use-window-size.hook";
import { ScrollToBottomLink } from "./scroll-to-bottom-link.component";
import { ScrollToTopLink } from "./scroll-to-top-link.component";

type Props = {
  youtubeVideoEmbedId?: string;
  youtubeVideoUrl?: string;
  doNotAutoplay?: boolean;
  heightPercent?: number;
  start?: number;
};

const youtubeAutoPlay = "autoplay=1";
const youtubeEmbedSrc = "https://www.youtube.com/embed/";

export function MusicScrollDownMessage(props: React.PropsWithChildren<Props>) {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const height = windowSize[1];

  let youtubeLink;
  if (props.youtubeVideoEmbedId) {
    youtubeLink = youtubeEmbedSrc + props.youtubeVideoEmbedId;
  }
  if (props.youtubeVideoUrl) {
    youtubeLink = props.youtubeVideoUrl;
  }
  if (typeof youtubeLink !== "undefined") {
    if (!props.doNotAutoplay ) {
      youtubeLink += youtubeAutoPlay;
    }
    if (props.start) {
      if (youtubeLink.includes(youtubeAutoPlay)) {
        youtubeLink += "&";
      }
      youtubeLink += "start=" + props.start;
    }
  }

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
      {(youtubeLink) && (
        <>
          <hr />
          <iframe
            width={width}
            height={
              typeof props.heightPercent !== "undefined"
                ? height * props.heightPercent
                : "315"
            }
            src={youtubeLink}
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
