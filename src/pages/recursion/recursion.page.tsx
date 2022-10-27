import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import { AWSSIHLazyLoadImg as Img } from 'react-aws-sih-loader';
import { starRecursiveFnCode, starRecursiveFn, starIterativeFn, starIterativeFnCode } from './functions/stars';
import { doubleHelixSketch } from './p5-sketches/double-helix.sketch';
import { sutcliffePentagonSketch } from './p5-sketches/sutcliffe-pentagon.sketch';
import { gameOfLifeSketch } from './p5-sketches/game-of-life.sketch';
import '../page.css';
import { goldenSpiralSketch } from './p5-sketches/golden-spiral';
import { useWindowSize } from '../../hooks/use-window-size.hook';

export const RecursionPageComponent = (): any => {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 20;

  const onDoubleHelixSketchReady = () => {
    console.log('Double helix ready');
  };
  return (<>
    <div className="standard-page-margins standard-page-styling">
      <h2>
        Recursion and Fractals
      </h2>
      <hr/>
      <h3><i>&quot;What is Recursion?&quot;</i></h3>
      <p>
      Recursion is the repeated application of a recursive procedure or definition.
      </p>
      <h3>
        Recursion in the Natural World vs Digital World
      </h3>
      <p>
        We live in an unordered world and it is necessary for humans to
        create order, in our minds, so we can utilise reliable, deterministic logic.
        In the natural world, there is no such thing as a recursive call stack 
        keeping track of recursive functions. Instead these natural 
        recursive functions are better described as being painted onto 
        the canvas of the cosmos and that painting is infinitely being imagined.
        However we need a call stack on a machine so we can create order and this
        call stack is finite because memory on a machine is finite.
      </p>
      <p>
        When you reach the recursive call stack limit, you&apos;ll see the 
        classic <u>Stack Overflow</u> error.
      </p>
      <h3><i>&quot;Why is recursion such an alien concept to beginners?&quot;</i></h3>
      <p>
        I believe that&apos;s because our minds prefer to focus on one thing at at time and prefer dealing with
        (and finding solutions for) the problems that are, metaphorically, directly in front of us. 
        <p>
        Thinking recursively requires that you dig down past all the problems directly in front
        and get right to nub of the recursive tree before you start evaluating solutions. 
        </p>
        <p>
        It&apos;s very difficult for our minds to hold that many things in short term memory and remain accurate.
        </p>
        <p>
        In my mind, it makes sense that recursion is working in reverse of iteration with the help of
        a call stack.
        </p> 
        Learning to think recursively has been articulated effectively <a href="https://qr.ae/pvutmb">here.</a>
      </p>
      <hr/>

      <h3><i>&quot;What is a Fractal?&quot;</i></h3>
      <p>
      A <a href="https://fractalfoundation.org/resources/what-are-fractals/">fractal</a> is 
      a never-ending pattern. Fractals are infinitely complex 
      patterns that are self-similar across different scales.
      </p>
      <h3>Best Visual Examples of Fractals in Nature</h3>
      <h4>Fractal Tree - Trees</h4>
      <p>
        <a href="http://fractal-tree-simulator.surge.sh/">
          http://fractal-tree-simulator.surge.sh/
        </a>
      </p>
      <h4>Sutcliffe Pentagons - Leaves</h4>
      <p>
        The Sutcliffe Pentagon is a mathematical formula that allows 
        us to replicate a similar pattern of growth in leaves.
      </p>
      <p>
        <ReactP5Wrapper sketch={sutcliffePentagonSketch} screenWidth={width}/>
      </p>
      <p>
        Golden Spiral - Nautilus Shell
      </p>
      <p>
        <ReactP5Wrapper sketch={goldenSpiralSketch} />
      </p>
      <hr/>

      <h3>
        Human Genome
      </h3>
      <p>
        <i>&quot;So why is recursion important to humans?&quot;</i>
      </p>
      <p>
          I&apos;m ignorant to genetics and the human genome 
          (<a href="https://jameshfisher.com/2019/12/30/browsing-my-genome/">
          education to follow
        </a>), 
          however my feeling is that DNA is recursive in its physicality.
      </p>
      <p>
        The <a href="https://youtu.be/pktDqFy5IcE" 
          target="_blank" 
          rel="noreferrer">
              Tree of Life
        </a> shows that all life is connected 
        and the best designs have emerged through brutal evolution, over an unimaginable period of time.
        We see wonderful recursive patterns in plants which are made up of cells, 
        the same as all living things.
      </p>
      <p>
        <i>&quot;Is it worth contemplating that perhaps DNA in humans is also self referencing?&quot;</i>
      </p>
      <p>
        <Img src="self referencing dna.png" 
          config={{
            endpoint: 'https://robrendellwebsite-images.s3.eu-west-1.amazonaws.com/recursion/original/self+referencing+dna.png',
            bucket: 'robrendellwebsite-images',
            width: 640, 
            normalize: true,
          }} />
        <br/>
        Source: https://arxiv.org/ftp/arxiv/papers/1804/1804.03430.pdf
      </p>
      <p>
        <ReactP5Wrapper sketch={doubleHelixSketch} screenWidth={width} onReady={onDoubleHelixSketchReady}/>
        Source: https://editor.p5js.org/AlexandraLopez/sketches
      </p>
      <hr/>

      <h3>
        Recursion / Fractals in music
      </h3>
      <p>
        Adam Neely (<a href="https://www.sungazermusic.com/">Sungazer</a> bassist) has a fantastic video on how rhythm can be the same as pitch.
      </p>
      <p>
        You should watch the full video to understand how this relates to recursion and self referencing patterns.
      </p>
      <p>
        <iframe width={width} 
          height="315"
          src="https://www.youtube.com/embed/_gCJHNBEdoc"
          title="YouTube video player" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen></iframe>
      </p>
      <hr/>

      <h3>
        Conway&apos;s Game of Life: Cellular Automata
      </h3>
      <p>
        I can&apos;t write about recursion and fractals without going off on an unrelated tangent about Conways Game of Life:
      </p>
      <p>
        Unfortunately Daniel Shiffman&apos;s P5.js sketch of Game of Life isn&apos;t recursive... or fractal in its nature.
      </p>
      <p>
        <ReactP5Wrapper sketch={gameOfLifeSketch} screenWidth={width} />
      </p>
      <p>
        However... you will find some self referencing in this mind-blowing video, you must watch it to the end:
      </p>
      <div>
        <iframe width={width} height="315" src="https://www.youtube.com/embed/xP5-iIeKXE8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <hr/>
    
      <h3>
        Recursion and Iteration
      </h3>
      <p>
        When using iteration, you can achieve the same result as 
        recursion if you use an in-memory stack.
      </p>
      <p>
        In many cases you can only use recursion, as iteration requires that you
        know the limits of your data structure. In most cases,
        data structures like graphs are populated dynamically and can change.
      </p>
      <p>
        Using self reference allows us to dynamically traverse a graph while pushing
        to the recursive call stack.
      </p>
      <div>
        Recursive functions key points: 1. base case and 2. self referencing recursive case (also 3. helper functions):
        <p><u>Recursive approach</u>: <b>starRecursiveFn(5)</b> = { starRecursiveFn(5) }</p>
        <CopyBlock
          text={starRecursiveFnCode}
          theme={dracula}
          language={'typescript'}
          showLineNumbers={false}
          wrapLines
        />
        <p><u>Iterative approach</u>: <b>starIterativeFn(5)</b> = { starIterativeFn(5) }</p>
        <CopyBlock
          text={starIterativeFnCode}
          theme={dracula}
          language={'typescript'}
          showLineNumbers={false}
          wrapLines
        />
      </div>
    
      <hr/>
      <h3>
        Recursive Algorithms
      </h3>

      <p>Content coming soon</p>
    </div>
  </>);
};

export default RecursionPageComponent;