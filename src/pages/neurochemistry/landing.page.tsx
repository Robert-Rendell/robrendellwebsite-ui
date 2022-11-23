import React from "react";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import "../page.css";

export function NeurochemistryLandingPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (
    <div className="standard-page-margins standard-page-styling black-bg-auto black-bg">
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
          <a href="/neurochemistry/subconscious-positive-reactions">
            Subconscious Positive Reactions
          </a>
        </li>
        <li>
          <a
            href="/neurochemistry/self-actualisation-peak-experiences"
          >
            Self-actualisation & Peak Experiences
          </a>
        </li>
        <li>
          <a href="/neurochemistry/learning-and-genetic-code">
            Learning and Genetic Code
          </a>
        </li>
        <li>
          <a href="/neurochemistry/let-it-go">
            Let it Go / Let it Be
          </a>
        </li>
        <li>
          <a href="/neurochemistry/advice-from-the-beatles">
            Advice from The Beatles
          </a>
        </li>
      </ol>
      <p>
        <i><a href="/neurochemistry/references">References</a></i>
      </p>
      <img
        width={width}
        src="https://wallpapers.com/images/hd/human-holos-in-green-matrix-hallway-9y0kbjdasshb9q2a-9y0kbjdasshb9q2a.webp"
      />
    </div>
  );
}
