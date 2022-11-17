import React from 'react';
import { useWindowSize } from '../../hooks/use-window-size.hook';
import '../page.css';

export function NeurochemistryLandingPage() {
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        Neurochemistry Project
      </h1>
      <h2>Topics</h2>
      <ol>
        <li>
          <a href="/neurochemistry/happiness">Rob&apos;s Mnemonic for Happiness: MC-EDOEGSA</a>
        </li>
        <li>
          <a href="/neurochemistry/zones-of-regulation">The Emotional Zones Of Regulation</a>
        </li>
        <li>
          <a href="/neurochemistry/self-love-not-narcissism">Self-love! (... And not Narcissism)</a>
        </li>
        <li>
          <a href="/neurochemistry/the-relaxation-response">The Relaxation Response</a>
        </li>
      </ol>
    </div>
  );
}
