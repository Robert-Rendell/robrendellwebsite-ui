import React from "react";
import { SharedText } from "../../common/shared-text";
import { SharedRoutes } from "../../common/shared-routes";
import { usePageView } from "../../hooks/use-page-view.hook";

export function CustomAnalyticsPage() {
  usePageView(SharedRoutes.CustomAnalytics.LandingPage);
  return (
    <div className="standard-page-margins standard-page-styling">
      <h2>{SharedText.CustomAnalytics.LandingPage}</h2>
      <hr />
      <p>
        This project is to get experience using AWS CDK which allows
        infrastructure to be written as code.
      </p>
      <h3>Designs</h3>
      <img
        width="100%"
        style={{ maxWidth: 1200 }}
        src="https://raw.githubusercontent.com/Robert-Rendell/custom-analytics/8452ce4d9d1d1063f067ccdef8762543b1ba911e/designs/20-09-24.svg"
      />
      <hr />
      <h3>Code</h3>
      <p>
        Github:{" "}
        <a href="https://github.com/Robert-Rendell/custom-analytics">
          microservices monorepo
        </a>
      </p>
      <p>
        Github:{" "}
        <a href="https://github.com/Robert-Rendell/email-service">
          decoupled generic email microservice
        </a>
      </p>
      <hr />
      <h3>Pros of AWS CDK</h3>
      <ul>
        <li>
          Imperative programming with familiar languages (TypeScript, Python,
          Java, C#)
        </li>
        <li>Reusable Constructs for modular infrastructure</li>
        <li>High-level abstractions simplify resource management</li>
        <li>Synthesizes to CloudFormation, leveraging its benefits</li>
        <li>Integrates well with CI/CD pipelines</li>
        <li>Easier debugging with type-checking and autocompletion</li>
        <li>Rich ecosystem and growing community support</li>
        <li>Fast updates and support for new AWS services</li>
      </ul>

      <h3>Cons of AWS CDK</h3>
      <ul>
        <li>Steep learning curve for non-developers</li>
        <li>High-level abstractions can hide important details</li>
        <li>Generated CloudFormation templates can be complex</li>
        <li>Frequent breaking changes in some constructs</li>
        <li>Limited language support outside TypeScript</li>
        <li>Relies on CloudFormation, inheriting its limitations</li>
        <li>Smaller ecosystem compared to Terraform</li>
        <li>Increased complexity in large projects</li>
      </ul>
      <hr />
    </div>
  );
}
