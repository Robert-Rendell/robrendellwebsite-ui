import React from "react";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function IsBloodMagneticPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton /> {SharedText.Biomagnetism.IsBloodMagnetic}
      </h1>
      <hr/>
      <p>
        In the 1930s, it was found that haemoglobin has magnetic properties that
        are different depending on whether it is carrying oxygen or not. When
        the haemoglobin is not carrying oxygen it is more sensitive or
        paramagnetic than oxygenated blood.
      </p>
      <hr />
      <iframe
        width={width}
        height="315"
        src="https://www.youtube.com/embed/E-yHv91Y_oI?autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
