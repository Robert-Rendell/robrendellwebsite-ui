import React from "react";
import { SharedText } from "../../common/shared-text";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function BiomagnetismInTheOceanPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Biomagnetism.BiomagnetismInTheOcean}</h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="">
        <p>
          Cartilaginous fish including sharks and stingrays can detect small
          variations in electric potential with their electroreceptive organs,
          the&nbsp;
          <NewTabLink href="https://en.wikipedia.org/wiki/Ampullae_of_Lorenzini">
            ampullae of Lorenzini
          </NewTabLink>
          . These appear to be able to detect{" "}
          <NewTabLink href="https://en.wikipedia.org/wiki/Ampullae_of_Lorenzini#Magnetoreception">
            magnetic fields by induction
          </NewTabLink>
          . There is some evidence that these fish use magnetic fields in
          navigation.
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
