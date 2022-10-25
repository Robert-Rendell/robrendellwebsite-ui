import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { starRecursiveFnCode, starRecursiveFn, starIterativeFn, starIterativeFnCode } from './functions/stars';
import { doubleHelixSketch } from './p5-sketches/double-helix.sketch';
import { sutcliffePentagonSketch } from './p5-sketches/sutcliffe-pentagon.sketch';
import './recursion.page.css';

type Props = {

}

class RecursionPageComponent extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // nothing
  }

  render() {
    return (<div className="home-page-margins page-styling">
    <h2>
      Recursion & Fractals
    </h2>
    <p>

    </p>
    <ol>
      <li>
      Recursive functions - base case and self referencing recursive case. Helper functions
      <p><b>Stars (recursive function)</b>: { starRecursiveFn(5)}</p>
      <CopyBlock
        text={starRecursiveFnCode}
        theme={dracula}
        language={'typescript'}
        showLineNumbers={false}
        startingLineNumber={1}
        wrapLines
      />
      <p><b>Stars (iterative function)</b>: { starIterativeFn(5)}</p>
      <CopyBlock
        text={starIterativeFnCode}
        theme={dracula}
        language={'typescript'}
        showLineNumbers={false}
        startingLineNumber={1}
        wrapLines
      />
      </li>
      <li>
      Stackoverstackoverflow error, we live in an unordered world and in order for us to apply logic we require it be ordered.
      </li>
      <li>
        <ul>
          <li>why is Recursion so important in nature and with humans?</li>
          <li>recursion is in our DNA yet our minds find it hard to understand recursive functions</li>
        </ul>
        <ReactP5Wrapper sketch={doubleHelixSketch} />
      </li>
      <li>
      Binary Search Tree
        <ul>
          <li>
          depth first
          </li>
          <li>
          breadth first
          </li>
        </ul>
      </li>

      <li>
      <ReactP5Wrapper sketch={sutcliffePentagonSketch} />
      </li>
      <li>
      ivy worm hole, inner pentagons spin at a different speed?
      </li>
      <li>
      tree fractals: http://fractal-tree-simulator.surge.sh/
      </li>
      <li>
      fractals - the shape of recursion
      </li>
    </ol>
    </div>)
  }
}

export default RecursionPageComponent;