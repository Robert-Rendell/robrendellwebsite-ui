import React from 'react';
import { useWindowSize } from '../../hooks/use-window-size.hook';
import '../page.css';

export function RenewableEnergyPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const height = windowSize[1]-150;
  
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        Renewable Energy
      </h1>
      <iframe width={width} height={height}
        src="https://www.youtube.com/embed/1kUE0BZtTRc?start=6" 
        title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
    </div>
  );
}
