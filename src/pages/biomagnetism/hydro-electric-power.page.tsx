import React from "react";
import { SharedText } from "../../common/shared-text";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { QuestionComponent } from "../neurochemistry/components/question.component";
import "../page.css";

export function MagnetismInHydroElectricPowerPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Biomagnetism.MagnetismInHydroElectricPower}</h1>
      <QuestionComponent>What are the basics?</QuestionComponent>
      <iframe
        width={width}
        height="315"
        src="https://www.youtube.com/embed/q8HmRLCgDAI"
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <QuestionComponent>
        How does magnetic induction produce electricity?
      </QuestionComponent>
      <iframe
        width={width}
        height="315"
        src="https://www.youtube.com/embed/ZSCEfJ4TXW4?start=158"
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
