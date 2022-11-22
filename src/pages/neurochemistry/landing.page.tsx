import React from "react";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function NeurochemistryLandingPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling black-bg">
      <h1>Neurochemistry Project: Emotional Intelligence</h1>
      <h2>Topics</h2>
      <ol>
        <li>
          <a href="/neurochemistry/happiness">
            Rob&apos;s Mnemonic for Happiness: MC-EDOEGSA
          </a>
        </li>
        <li>
          <a href="/neurochemistry/zones-of-regulation">
            The Emotional Zones Of Regulation
          </a>
        </li>
        <li>
          <a href="/neurochemistry/self-love-not-narcissism">
            Self-love! (... And not Narcissism)
          </a>
        </li>
        <li>
          <a href="/neurochemistry/the-relaxation-response">
            The Relaxation Response
          </a>
        </li>
        <li>
          <a href="/neurochemistry/the-relaxation-response">
            Subconscious Positive Reactions
          </a>
        </li>
        <li>
          <a href="/neurochemistry/the-relaxation-response">
            Self-actualisation & Peak experiences
          </a>
        </li>
        <li>
          <a href="/neurochemistry/the-relaxation-response">
            Learning and Genetic Code
          </a>
        </li>
      </ol>
      <img width={width} src="https://wallpapers.com/images/hd/human-holos-in-green-matrix-hallway-9y0kbjdasshb9q2a-9y0kbjdasshb9q2a.webp"/>
    </div>
  );
}
