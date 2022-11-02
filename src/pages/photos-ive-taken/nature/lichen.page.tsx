import React from 'react';
import '../../page.css';
import { PhotosIveTakenPage } from '../photos-ive-taken.page';

export function LichenPage() {
  return (
    <PhotosIveTakenPage 
      endpoint='/photos-ive-taken/nature/lichen'
      title='Photos I&apos;ve Taken: Lichen'
    />
  );
}
