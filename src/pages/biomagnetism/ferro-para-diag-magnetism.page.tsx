import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { RobBackButton } from "../../components/back-button.component";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function FerroParaDiaMagnetismPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(
    SharedRoutes.Biomagnetism.FerromagnetismParamagnetismDiamagnetism
  );
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton />{" "}
        {SharedText.Biomagnetism.FerromagnetismParamagnetismDiamagnetism}
      </h1>
      <hr />
      <img
        src="https://qph.cf2.quoracdn.net/main-qimg-c8a315afa199c474132e19c6eb1f98ae-lq"
        width={width}
      />
      <hr />
      <iframe
        width={width}
        height="315"
        src="https://www.youtube.com/embed/ppwCPv06uV0?autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
