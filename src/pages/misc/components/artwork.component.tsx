import React from "react";

type Props = {
  title: string;
  author: string;
  year: number;
  imageUrl: string;
  era: "Romanticism" | "Impressionist" | "Expressionism";
  medium: string;
  orientation: "portrait" | "landscape";
};
export function ArtworkComponent(props: React.PropsWithChildren<Props>) {
  return (
    <>
      <h2>
        {props.title},{" "}
        <i>
          {props.author} ({props.year})
        </i>
      </h2>
      <img
        width={props.orientation === "portrait" ? "50%" : "100%"}
        src={props.imageUrl}
      />
      <p>{props.children}</p>
      <p>
        <b>Era</b>: {props.era}
      </p>
      <p>
        <b>Medium</b>: {props.medium}
      </p>
    </>
  );
}
