import React from "react";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { MusicScrollDownMessage } from "../../components/music-scroll-down.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function IsBloodMagneticPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton /> {SharedText.Biomagnetism.ElectromagneticPulse}
      </h1>
      <MusicScrollDownMessage youtubeVideoEmbedId="">
        <p>
          https://www.sciencelearn.org.nz/resources/1010-does-blood-have-magnetic-properties#:~:text=The%20iron%20part%20of%20haeme,or%20paramagnetic%20than%20oxygenated%20blood.
          In the 1930s, it was found that haemoglobin has magnetic properties
          that are different depending on whether it is carrying oxygen or not.
          When the haemoglobin is not carrying oxygen it is more sensitive or
          paramagnetic than oxygenated blood. The earth also has a magnetic
          field, which is caused by electrical currents within the earth. The
          strength of a magnetic field is measured in teslas (T). The Earth’s
          magnetic field is about 50µT in New Zealand. Find out more about this
          in our article, fossil compass. Much higher magnetic fields are used
          in other magnets.
        </p>
      </MusicScrollDownMessage>
    </div>
  );
}
