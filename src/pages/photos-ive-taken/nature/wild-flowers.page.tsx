import React, { useEffect } from 'react';
import InfinitySpinner from '../../../resources/infinity-spinner.svg';
import '../../page.css';
import { useGetS3ImageUrls } from './hooks/useGetS3ImageUrls.hook';

export function WildFlowersPage() {
  const getWildFlowersImageUrls = useGetS3ImageUrls({
    endpoint: '/photos-ive-taken/nature/wild-flowers',
    targetDivId: 'wild-flowers-page-img-div'
  });

  useEffect(() => {
    getWildFlowersImageUrls();
  }, []);
  
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        Photos I&apos;ve Taken: Wild flowers / garden flowers
      </h1>
      <div id="wild-flowers-page-img-div">
        <h2>Loading images from S3...</h2>
        <img src={InfinitySpinner}/>
      </div>
    </div>
  );
}
