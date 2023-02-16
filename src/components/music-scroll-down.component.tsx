import React from "react";
import { usePreferences } from "../hooks/use-preferences.hook";
import { useWindowSize } from "../hooks/use-window-size.hook";
import { AutoplayToggleComponent } from "./autoplay-toggle.component";
import { ScrollToBottomLink } from "./scroll-to-bottom-link.component";
import { ScrollToTopLink } from "./scroll-to-top-link.component";

type Props = {
  youtubeVideoEmbedId?: string;
  youtubeVideoUrl?: string;
  doNotAutoplay?: boolean;
  heightPercent?: number;
  start?: number;
  msg?: string;
};

const youtubeEmbedSrc = "https://www.youtube.com/embed/";
const defaultMsg = (
  <>
    Scroll down to the <ScrollToBottomLink>bottom</ScrollToBottomLink> of this
    page and play the youtube video if you want music while reading :)
  </>
);

export function MusicScrollDownMessage(props: React.PropsWithChildren<Props>) {
  const { preferences } = usePreferences();
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const height = windowSize[1];
  const youtubeAutoPlay = `autoplay=${preferences?.autoplayEnabled ? 1 : 0}`;

  let youtubeLink;
  if (props.youtubeVideoEmbedId) {
    youtubeLink = youtubeEmbedSrc + props.youtubeVideoEmbedId;
  }
  if (props.youtubeVideoUrl) {
    youtubeLink = props.youtubeVideoUrl;
  }
  if (typeof youtubeLink !== "undefined") {
    youtubeLink += "?";
    if (!props.doNotAutoplay) {
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
        <i>{props.msg ? props.msg : defaultMsg}</i>
        <AutoplayToggleComponent />
      </p>
      <hr />
      {props.children}
      {youtubeLink && (
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      )}
      <ScrollToTopLink />
    </>
  );
}
