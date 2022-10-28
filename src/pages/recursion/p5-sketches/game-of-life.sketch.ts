// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

import { P5Instance } from 'react-p5-wrapper';

// Game of Life
// Video: https://youtu.be/FWSR_7kZuYg

type Props = {
  onReady?: () => void;
  screenWidth: number;
}

const gameOfLifeSketch = (p5: P5Instance<Props>) => {
  function make2DArray(cols: number, rows: number) {
    const arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }
  
  let grid: number[][];
  let cols: number;
  let rows: number;
  const resolution = 10;
  const maxWidth = 600;
  let width = maxWidth;
  
  p5.setup = () => {
    p5.createCanvas(width, Math.ceil(width*(2/3)));
    cols = Math.ceil(p5.width / resolution);
    rows = Math.ceil(p5.height / resolution);
  
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = p5.floor(p5.random(2));
      }
    }
  };

  p5.updateWithProps = (props) => {
    if (props.onReady) {
      props.onReady();
      delete props.onReady;
    }
    if (props.screenWidth) {
      width = Math.ceil(Math.min(props.screenWidth, maxWidth));
    }
  };

  p5.mouseClicked = () => {
    if (0 <= p5.mouseX && p5.mouseX < p5.width &&
        0 <= p5.mouseY && p5.mouseY < p5.height) {
      p5.setup();
    }
  };
  
  p5.draw = () => {
    p5.background(0);
  
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * resolution;
        const y = j * resolution;
        if (grid[i][j] == 1) {
          p5.fill(255);
          p5.stroke(0);
          p5.rect(x, y, resolution - 1, resolution - 1);
        }
      }
    }
  
    const next = make2DArray(cols, rows);
  
    // Compute next based on grid
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const state = grid[i][j];
        // Count live neighbors!
        const neighbors = countNeighbors(grid, i, j);
  
        if (state == 0 && neighbors == 3) {
          next[i][j] = 1;
        } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
  
      }
    }
  
    grid = next;
    
  };
  
  
  function countNeighbors(grid: number[][], x: number, y: number) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        const col = (x + i + cols) % cols;
        const row = (y + j + rows) % rows;
        sum += grid[col][row];
      }
    }
    sum -= grid[x][y];
    return sum;
  }
};

export { gameOfLifeSketch };
