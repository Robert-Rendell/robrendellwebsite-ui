import React, { useEffect } from 'react';
import InfinitySpinner from '../../../resources/infinity-spinner.svg';
import '../../page.css';
import { useGetS3ImageUrls } from './hooks/useGetS3ImageUrls.hook';

export function InsectsPage() {
  const getInsectsImageUrls = useGetS3ImageUrls( {
    endpoint: '/photos-ive-taken/nature/insects',
    targetDivId: 'insects-page-img-div'
  });

  useEffect(() => {
    getInsectsImageUrls();
  }, []);
  
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
      Photos I&apos;ve Taken: Insects
      </h1>
      <div id="insects-page-img-div">
        <h2>Loading images from S3...</h2>
        <img src={InfinitySpinner}/>
      </div>
    </div>
  );
}
