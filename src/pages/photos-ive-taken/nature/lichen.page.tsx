import React, { useEffect } from 'react';
import '../../page.css';
import { PhotosIveTakenPage } from '../photos-ive-taken.page';
import { useGetS3ImageUrls } from './hooks/useGetS3ImageUrls.hook';

export function LichenPage() {
  const getLichenImageUrls = useGetS3ImageUrls( {
    endpoint: '/photos-ive-taken/nature/lichen',
    targetDivId: 'lichen-page-img-div'
  });

  useEffect(() => {
    getLichenImageUrls();
  }, []);
  
  return (
    <PhotosIveTakenPage 
      imgDivId="lichen-page-img-div"
      title='Photos I&apos;ve Taken: Lichen'
    />
  );
}
