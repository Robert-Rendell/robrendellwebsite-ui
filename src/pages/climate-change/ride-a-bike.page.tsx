import React from 'react';
import { useWindowSize } from '../../hooks/use-window-size.hook';
import '../page.css';

export function RideABikePage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const height = windowSize[1]-150;
  
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        Cycling: ditch the car and get yourself a pannier rack.
      </h1>
      <p>
        <img src="https://ilovebicycling.com/wp-content/uploads/2014/10/picture-123.png" width={width} height={(width/height)*450} />
      </p>
    </div>
  );
}
