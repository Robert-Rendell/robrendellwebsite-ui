import React, { useEffect } from 'react';
import { PhotosIveTakenPage } from '../photos-ive-taken.page';
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
    <PhotosIveTakenPage 
      imgDivId='wild-flowers-page-img-div'
      title='Photos I&apos;ve Taken: Wild flowers / Garden Flowers'
    />
  );
}
