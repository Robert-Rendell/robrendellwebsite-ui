import React from "react";
import logo from "../resources/logo.svg";
import nodeJsLogo from "../resources/nodejs-logo.png";
import tsLogo from "../resources/ts-logo.png";
import awsLogo from "../resources/aws-logo.png";
import "../nav/nav.component.css";
import { StackOverflowIcon } from "./icons/stack-overflow.icon";
import { GitHubIcon } from "./icons/github.icon";
import { NewTabLink } from "./new-tab-link.component";

export function TechIconsComponent() {
  return (
    <>
      <img src={logo} width="40" height="40" alt="React" />
      <img
        src={tsLogo}
        className="tech-icons"
        width="30"
        height="30"
        alt="TypeScript"
      />
      <img
        src={nodeJsLogo}
        className="tech-icons nodejs-icon"
        width="30"
        height="30"
        alt="nodeJs"
      />
      <span className="tech-icons aws-icon-bg">
        <img
          src={awsLogo}
          className="aws-icon"
          width="30"
          height="20"
          alt="nodeJs"
        />
      </span>
    </>
  );
}
