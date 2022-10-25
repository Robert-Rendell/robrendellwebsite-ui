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
    <p style={{textAlign: "center"}}>
      <hr/>
       Work in Progress
       <hr/>
    </p>
    <h3>
      Recursion and Iteration
    </h3>
    <div>
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
    </div>
     
    <h3>
      Recursion in the Natural World
    </h3>
    <p>
      We live in an unordered world and it is necessary for us to create order so we can utilise reliable, deterministic logic.
      In the natural world, there is no such thing as a call stack keeping track of recursive functions. Instead these natural recursive functions are better described as being painted onto the canvas of the cosmos and that painting is infinitely being imagined.
      However it is finite on a machine and this is why you might get the stack overflow error if you exceed the call stack limit.
    </p>
    <p>
      Tree fractals: http://fractal-tree-simulator.surge.sh/
    </p>
    <p>
      The Sutcliffe Pentagon is a mathematical formula that allows us to replicate a similar pattern of growth in the leaves of an Ivy.
    </p>
    <p>
      <ReactP5Wrapper sketch={sutcliffePentagonSketch} />
    </p>
    <h3>
      DNA
    </h3>
    <p>
    <ul>
      <li>So why is Recursion so important to humans?</li>
      <li>Recursion is in our DNA! However, our minds prefer to focus on one thing at at time and are not naturally accustomed to recursively following each rabbit hole</li>
    </ul>
    <ReactP5Wrapper sketch={doubleHelixSketch} />
    </p>

    <h3>
      Recursive Algorithms
    </h3>

    <p>TO DO</p>
    
    {/* <p>
    Binary Search Tree
        <ul>
          <li>
          depth first
          </li>
          <li>
          breadth first
          </li>
        </ul>
    </p> */}
    </div>)
  }
}

export default RecursionPageComponent;