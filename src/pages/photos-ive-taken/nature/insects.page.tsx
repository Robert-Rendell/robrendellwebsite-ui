import React, { useEffect } from 'react';
import '../../page.css';
import { PhotosIveTakenPage } from '../photos-ive-taken.page';
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
    <PhotosIveTakenPage 
      imgDivId='insects-page-img-div'
      title='Photos I&apos;ve Taken: Insects'
    />);
}
