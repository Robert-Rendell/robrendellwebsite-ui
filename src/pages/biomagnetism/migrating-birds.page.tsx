import React from "react";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function MigratingBirdsPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton /> {SharedText.Biomagnetism.MigratingBirds}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="tbONsqxGCHQ" start={13}>
        <p>
          Bird migrations were recorded in Europe from at least 3,000 years ago
          by the Ancient Greek writers Hesiod, Homer, Herodotus and Aristotle.
        </p>
        <p>
          Migrating birds navigate using celestial cues from the sun and stars,{" "}
          <u>the earth&apos;s magnetic field</u>, and mental maps.
        </p>
        <p>
          There is a small spot on the beak of pigeons and some other birds that
          contains{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Magnetite">
            magnetite
          </NewTabLink>
          .
        </p>
        <p>
          Magnetite is a magnetised rock, which may act as a tiny GPS unit for
          homing pigeons by giving it information about its position relative to
          Earth&apos;s poles.
        </p>
        <p>
          It is thought that birds can use both the beak magnetite and the eye
          sensors to travel long distances over areas that do not have many
          landmarks, such as the ocean.
        </p>
        <hr />
        <p>
          We already know about lots of animals and birds that use magnetic
          material in their bodies to help them understand where they are.
        </p>
        <p>
          The homing pigeon has an innate homing ability, meaning that it will
          generally return to its nest using{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Magnetoreception">
            magnetoreception
          </NewTabLink>
          .
        </p>
        <div style={{ width: "100%", background: "white" }} className="centred">
          <p>
            <img src="https://cdn.the-scientist.com/assets/articleNo/38949/iImg/20738/462c987f-677d-4028-8e6d-11d3d854b249-bird-infograph.jpg" />
          </p>
        </div>
      </MusicScrollDownMessage>
    </div>
  );
}
