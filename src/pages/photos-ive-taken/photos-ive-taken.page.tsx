import React from 'react';
import InfinitySpinner from '../../resources/infinity-spinner.svg';
import '../page.css';

type Props = {
    imgDivId: string;
    title: string;
}
export function PhotosIveTakenPage(props: Props) {
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        { props.title }
      </h1>
      <div id={props.imgDivId}>
        <h2>Loading images from S3...</h2>
        <img src={InfinitySpinner}/>
      </div>
    </div>
  );
}