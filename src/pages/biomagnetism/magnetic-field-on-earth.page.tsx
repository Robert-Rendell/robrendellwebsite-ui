import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { NewTabLink } from "../../components/new-tab-link.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function MagneticFieldOnEarthPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Biomagnetism.MagneticFieldOnEarth);
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton /> {SharedText.Biomagnetism.MagneticFieldOnEarth}
      </h1>
      <hr />
      <p>
        The flow of liquid iron at the center of the Earth generates an electric
        current that produces magnetic fields. Earth&apos;s magnetic field is
        produced very deep down in the core of the planet.
      </p>
      <p>
        The cycle continues because the charged metals passing through these
        fields produce their electric currents. This type of self-sustaining
        loop is called the{" "}
        <NewTabLink href="https://en.wikipedia.org/wiki/Dynamo_theory">
          geodynamo
        </NewTabLink>
        . The collective effect of magnetic fields produces a single vast
        magnetic field going to the planet. This is the reason behind the
        magnetic fields on Earth.
      </p>
      <p>
        The strength of a magnetic field is measured in teslas (T). The
        Earth&apos;s magnetic field is about 50µT in New Zealand.
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
