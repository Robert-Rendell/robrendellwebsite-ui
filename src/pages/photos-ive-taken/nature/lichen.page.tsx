import React, { useEffect } from 'react';
import InfinitySpinner from '../../../resources/infinity-spinner.svg';
import '../../page.css';
import { useGetS3ImageUrls } from './hooks/useGetS3ImageUrls.hook';

export function LichenPage() {
  const getLichenImageUrls = useGetS3ImageUrls(
    '/photos-ive-taken/nature/lichen',
    'lichen-page-img-div'
  );

  useEffect(() => {
    getLichenImageUrls();
  }, []);
  
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        Lichen
      </h1>
      <div id="lichen-page-img-div">
        <h2>Loading images from S3...</h2>
        <img src={InfinitySpinner}/>
      </div>
    </div>
  );
}
