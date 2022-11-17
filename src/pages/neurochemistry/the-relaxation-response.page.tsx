import React from 'react';
import { useWindowSize } from '../../hooks/use-window-size.hook';


export function TheRelaxationResponsePage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 20;
  return (<div className="standard-page-margins standard-page-styling">
    <h1>The Relaxation Response</h1>
  </div>
  );
}
