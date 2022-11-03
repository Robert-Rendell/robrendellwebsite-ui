import React from 'react';
import '../../page.css';
import { PhotosIveTakenPage } from '../photos-ive-taken.page';

export function FungiPage() {
  return (
    <PhotosIveTakenPage 
      endpoint='/photos-ive-taken/nature/fungi'
      title='Photos I&apos;ve Taken: Fungi'
    />);
}
