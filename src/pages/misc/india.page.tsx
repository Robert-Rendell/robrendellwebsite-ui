import React from 'react';
import { useWindowSize } from '../../hooks/use-window-size.hook';

export function IndiaPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  return (<div className="standard-page-margins standard-page-styling">
    <img width={width} src="https://img.freepik.com/premium-vector/high-quality-labeled-map-india-with-borders-regions_97886-10486.jpg?w=900"/>
    <img width={width} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Language_region_maps_of_India.svg/1024px-Language_region_maps_of_India.svg.png" />
  </div>);
}