import React from "react";
import { RobBackButton } from "../../components/back-button.component";

export function TheRelaxationResponsePage() {
  return (
    <div className="standard-page-margins standard-page-styling black-bg" style={{height:"100%"}}>
      <h1>
        <RobBackButton /> The Relaxation Response
      </h1>
      <p>
        Got{" "}
        <a href="https://www.nhs.uk/mental-health/conditions/panic-disorder/">
          anxiety
        </a>
        ? Here&apos;s the answer:
      </p>
      <p>
        <img src="https://m.media-amazon.com/images/I/51hYvagEduL._SX406_BO1,204,203,200_.jpg" />
      </p>
      <p>
        <a href="https://www.amazon.co.uk/Relaxation-Response-Herbert-Benson/dp/0380815958">
          https://www.amazon.co.uk/Relaxation-Response-Herbert-Benson/dp/0380815958
        </a>
      </p>
    </div>
  );
}
