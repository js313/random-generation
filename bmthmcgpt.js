let scale = 2;
let cols, rows;
let heatmap;
let mean;

function setup() {
  createCanvas(400, 400);
  cols = floor(width / scale);
  rows = floor(height / scale);
  heatmap = make2DArray(cols, rows);
  mean = 0;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const r1 = random(1);
      const r2 = random(1);
      const n = sqrt(-2.0 * log(r1)) * cos(2.0 * PI * r2);
      heatmap[i][j] += n;
      mean += n;
    }
  }
  mean /= cols * rows;
}

function draw() {
  background(0);
  noStroke();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const c = map(heatmap[i][j], mean - 2.0, mean + 2.0, 0, 255);
      fill(c, 255, 255);
      rect(i * scale, j * scale, scale, scale);
    }
  }
}

function make2DArray(cols, rows) {
  const arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
