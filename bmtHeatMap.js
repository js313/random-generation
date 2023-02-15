let heatMap = [];
let cellSize = 20;

function setup() {
  createCanvas(400, 400);
  background(220);
  for (let i = 0; i < 400 / cellSize; i++) {
    heatMap.push([]);
    for (let j = 0; j < 400 / cellSize; j++) {
      heatMap[i].push(0);
    }
  }
}

function boxMuller(mu, sigma, U1, U2) {
  var R = Math.sqrt(-1 * Math.log(U1));
  var theta = 2 * Math.PI * U2;
  var z1 = mu + sigma * R * Math.cos(theta);
  var z2 = mu + sigma * R * Math.sin(theta);
  return [z1, z2];
}

function draw() {
  let [x, y] = boxMuller(width / cellSize / 2, 4, random(), random());
  x = (heatMap.length + (Math.floor(x) % heatMap.length)) % heatMap.length;
  y = (heatMap.length + (Math.floor(y) % heatMap.length)) % heatMap.length;
  heatMap[x][y]++;
  fill(heatMap[x][y], 50);
  noStroke();
  rect(cellSize * x, cellSize * y, cellSize, cellSize);
}
