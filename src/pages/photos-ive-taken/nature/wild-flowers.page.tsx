import React, { useEffect } from 'react';
import InfinitySpinner from '../../../resources/infinity-spinner.svg';
import '../../page.css';
import { useGetS3ImageUrls } from './hooks/useGetS3ImageUrls.hook';

export function WildFlowersPage() {
  const getWildFlowersImageUrls = useGetS3ImageUrls(
    '/photos-ive-taken/nature/wild-flowers',
    'wild-flowers-page-img-div'
  );

  useEffect(() => {
    getWildFlowersImageUrls();
  }, []);
  
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        Wild Flowers
      </h1>
      <div id="wild-flowers-page-img-div">
        <h2>Loading images from S3...</h2>
        <img src={InfinitySpinner}/>
      </div>
    </div>
  );
}
