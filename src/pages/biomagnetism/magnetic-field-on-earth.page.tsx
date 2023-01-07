import React from "react";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function MagneticFieldOnEarthPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton /> {SharedText.Biomagnetism.MagneticFieldOnEarth}
      </h1>
      <p>
        The flow of liquid iron at the center of the Earth generates an electric
        current that produces magnetic fields. Earth&apos;s magnetic field is
        produced very deep down in the core of the planet. The cycle continues
        because the charged metals passing through these fields produce their
        electric currents. This type of self-sustaining loop is called the{" "}
        <NewTabLink href="https://en.wikipedia.org/wiki/Dynamo_theory">
          geodynamo
        </NewTabLink>
        . The collective effect of magnetic fields produces a single vast
        magnetic field going to the planet. This is the reason behind the
        magnetic fields on Earth.
      </p>
      <iframe
        width={width}
        height="315"
        src="https://www.youtube.com/embed/MtLC8evycaE?start=5&autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
