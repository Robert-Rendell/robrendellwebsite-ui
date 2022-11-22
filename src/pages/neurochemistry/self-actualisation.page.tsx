import React from "react";
import { RobBackButton } from "../../components/back-button.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function SelfActualisationPeakExperiencesPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling black-bg-auto black-bg">
      <h1>
        <RobBackButton /> Self-actualisation & Peak Experiences
      </h1>
      <p>
      Self-actualization is the complete realization of one&apos;s potential, and the full development of one&apos;s abilities and appreciation for life. This concept is at the top of the Maslow hierarchy of needs, so not every human being reaches it.
      </p>
      <a href="https://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs">https://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs</a>
      <img width={width} src="https://www.verywellmind.com/thmb/luJzFVjtfBsCuRanONrj18FQxA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4136760-article-what-is-maslows-hierarchy-of-needs-5a97179aeb97de003668392e.png"/>
    </div>
  );
}
