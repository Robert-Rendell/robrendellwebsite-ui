import React, { useEffect } from 'react';
import '../../page.css';
import { PhotosIveTakenPage } from '../photos-ive-taken.page';
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
    <PhotosIveTakenPage 
      imgDivId="arachnids-page-img-div"
      title='Photos I&apos;ve Taken: Arachnids'
    />);
}
