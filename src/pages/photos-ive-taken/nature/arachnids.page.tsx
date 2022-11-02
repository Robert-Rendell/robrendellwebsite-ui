import React from 'react';
import '../../page.css';
import { PhotosIveTakenPage } from '../photos-ive-taken.page';

export function ArachnidsPage() {
  return (
    <PhotosIveTakenPage 
      endpoint='/photos-ive-taken/nature/arachnids'
      title='Photos I&apos;ve Taken: Arachnids'
    />);
}
