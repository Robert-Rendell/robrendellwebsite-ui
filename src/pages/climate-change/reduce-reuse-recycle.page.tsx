import React from 'react';
import { useWindowSize } from '../../hooks/use-window-size.hook';
import '../page.css';
import { RobBackButton } from '../../components/back-button.component';

export function ReduceReuseRecyclePage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton/>
        Reduce, Reuse, Recycle
      </h1>
      
      <p>
        <img src="https://www.mapfre.com.mt/media/39737-scaled.jpg" width={width} height={width/2} />
      </p>
    </div>
  );
}
