import React, { ReactNode } from 'react';
import { v4 } from 'uuid';
import InfinitySpinner from '../../../resources/infinity-spinner.svg';

type Props = {
    images: ReactNode[]
}
export function HomePageImageGallery(props: Props) {
  return (<>
    { props.images.length === 0 && <>
      <h2>Loading images from S3...</h2>
      <img src={InfinitySpinner}/>
    </>}
    { props.images.map((image) =>  (<span key={v4()}>{image}</span>)) }
  </>);
}