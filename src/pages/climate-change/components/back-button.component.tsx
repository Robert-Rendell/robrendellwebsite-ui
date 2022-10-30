import React from 'react';
import { Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

export function ClimateChangeBackButton() {
  return (<>
    <Button onClick={() => window.location.href = './'}>
      <ArrowLeft/>
    &nbsp;Back
    </Button>
  </>);
}