import React from "react";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";

export function TheRelaxationResponsePage() {
  return (
    <div
      className="standard-page-margins standard-page-styling black-bg"
      style={{ height: "100%" }}
    >
      <h1>
        <RobBackButton /> {SharedText.Neurochemistry.RelaxationResponse}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="dsmfIAyiois">
        <p>
        Got{" "}
          <NewTabLink href="https://www.nhs.uk/mental-health/conditions/panic-disorder/">
          anxiety
          </NewTabLink>
        ? Here&apos;s the answer:
        </p>
        <p>
          <img src="https://m.media-amazon.com/images/I/51hYvagEduL._SX406_BO1,204,203,200_.jpg" />
        </p>
        <p>
          <NewTabLink href="https://www.amazon.co.uk/Relaxation-Response-Herbert-Benson/dp/0380815958">
          https://www.amazon.co.uk/Relaxation-Response-Herbert-Benson/dp/0380815958
          </NewTabLink>
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
