import React from "react";
import { RobBackButton } from "../../components/back-button.component";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function SelfActualisationPeakExperiencesPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling black-bg-auto black-bg">
      <h1>
        <RobBackButton closeWindow /> Self-actualisation & Peak Experiences
      </h1>
      <p>
        Self-actualisation is the complete realisation of one&apos;s potential,
        and the full development of one&apos;s abilities and appreciation for
        life. This concept is at the top of Maslow&apos;s Hierarchy of Needs.
      </p>
      <p>
        <a
          href="https://www.simplypsychology.org/self-actualization.html#:~:text=Self%2Dactualization%20is%20the%20complete,every%20human%20being%20reaches%20it."
          target="_blank"
          rel="noreferrer"
        >
          https://www.simplypsychology.org/self-actualization
        </a>
      </p>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs"
          target="_blank"
          rel="noreferrer"
        >
          https://en.wikipedia.org/wiki/Maslow&apos;s_hierarchy_of_needs
        </a>
      </p>
      <img
        width={width}
        src="https://www.verywellmind.com/thmb/luJzFVjtfBsCuRanONrj18FQxA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4136760-article-what-is-maslows-hierarchy-of-needs-5a97179aeb97de003668392e.png"
      />
    </div>
  );
}
