function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Generate random data with normal distribution
  let data = [];
  for (let i = 0; i < 1000; i++) {
    data.push(normalRandom() * 50 + 200); // adjust mean and std dev as needed
  }

  // Calculate histogram of data
  let binCount = 11;
  let binWidth = width / binCount;
  let bins = new Array(binCount).fill(0);
  for (let d of data) {
    let binIndex = floor(map(d, 0, width, 0, binCount));
    bins[binIndex]++;
  }

  // Draw histogram bars
  stroke(0);
  fill(200);
  for (let i = 0; i < binCount; i++) {
    let x = i * binWidth;
    let y = map(bins[i], 0, max(bins), height, 0);
    rect(x, y, binWidth, height - y);
  }

  // Draw normal distribution curve
  noFill();
  stroke(255, 0, 0);
  beginShape();
  for (let x = 0; x <= width; x++) {
    let y = height * normalDistribution(x, 200, 50); // adjust mean and std dev as needed
    vertex(x, y);
  }
  endShape();
}

// Box-Muller transform to generate normally distributed random values
function normalRandom() {
  let u1 = 1 - random();
  let u2 = 1 - random();
  let r = sqrt(-2 * log(u1));
  let theta = 2 * PI * u2;
  return r * cos(theta); // or r * sin(theta)
}

// Normal distribution function
function normalDistribution(x, mean, stdDev) {
  return (
    exp(-pow(x - mean, 2) / (2 * pow(stdDev, 2))) / (stdDev * sqrt(2 * PI))
  );
}
