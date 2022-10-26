import React from 'react';
import { ReactP5Wrapper } from "react-p5-wrapper";
import { bifurcationDiagramSketch } from './p5-sketches/bifurcation-diagram.sketch';
import '../page.css';

type Props = {

}

class BifurcationLogisticalPage extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // nothing
  }

  render() {
    return (<div className="home-page-margins page-styling">
      <ReactP5Wrapper sketch={bifurcationDiagramSketch} />
      </div>
    );
  }
}

export {BifurcationLogisticalPage}