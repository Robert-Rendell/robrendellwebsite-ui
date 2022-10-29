import React, { useEffect } from 'react';
import InfinitySpinner from '../../../resources/infinity-spinner.svg';
import '../../page.css';
import { useGetS3ImageUrls } from './hooks/useGetS3ImageUrls.hook';

export function ArachnidsPage() {
  const getArachnidsImageUrls = useGetS3ImageUrls( {
    endpoint: '/photos-ive-taken/nature/arachnids',
    targetDivId: 'arachnids-page-img-div'
  });

  useEffect(() => {
    getArachnidsImageUrls();
  }, []);
  
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        Arachnids
      </h1>
      <div id="arachnids-page-img-div">
        <h2>Loading images from S3...</h2>
        <img src={InfinitySpinner}/>
      </div>
    </div>
  );
}
