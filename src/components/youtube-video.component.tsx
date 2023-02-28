import React from "react";

const youtubeEmbedSrc = "https://www.youtube.com/embed/";

type Props = {
  youtubeVideoEmbedId?: string;
  youtubeVideoUrl?: string;
  start?: number;
};

export function YouTubeVideoComponent(props: Props) {
  let youtubeLink;
  if (props.youtubeVideoEmbedId) {
    youtubeLink = youtubeEmbedSrc + props.youtubeVideoEmbedId;
  }
  if (props.youtubeVideoUrl) {
    youtubeLink = props.youtubeVideoUrl;
  }
  if (typeof youtubeLink !== "undefined") {
    youtubeLink += "?";
    if (props.start) {
      youtubeLink += "start=" + props.start;
    }
  }
  return (
    <>
      <iframe
        width="100%"
        height={315}
        src={youtubeLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}
