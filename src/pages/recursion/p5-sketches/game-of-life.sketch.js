// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Game of Life
// Video: https://youtu.be/FWSR_7kZuYg

const gameOfLifeSketch = (p5) => {
  function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }
  
  let grid;
  let cols;
  let rows;
  let resolution = 10;
  let maxWidth = 600;
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
        let x = i * resolution;
        let y = j * resolution;
        if (grid[i][j] == 1) {
          p5.fill(255);
          p5.stroke(0);
          p5.rect(x, y, resolution - 1, resolution - 1);
        }
      }
    }
  
    let next = make2DArray(cols, rows);
  
    // Compute next based on grid
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let state = grid[i][j];
        // Count live neighbors!
        let neighbors = countNeighbors(grid, i, j);
  
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
  
  
  function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;
        sum += grid[col][row];
      }
    }
    sum -= grid[x][y];
    return sum;
  }
};

export { gameOfLifeSketch };
