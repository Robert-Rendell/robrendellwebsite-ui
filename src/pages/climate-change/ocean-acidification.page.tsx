import React from 'react';
import { useWindowSize } from '../../hooks/use-window-size.hook';
import '../page.css';
import { ClimateChangeBackButton } from './components/back-button.component';

export function OceanAcidification() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const height = windowSize[1]-150;

  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <ClimateChangeBackButton/>
        Ocean Acidification
      </h1>
      <iframe width={width} height={height} src="https://www.youtube.com/embed/L2bxwnm7JG4" 
        title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
    </div>
  );
}
