height = 400;
width = 400;
let bins = 51;
let counts = new Array(bins).fill(0);
let mu = bins / 2;
let sigma = 10;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function boxMuller(mu, sigma, U1, U2) {
  var R = Math.sqrt(-1 * Math.log(U1));
  var theta = 2 * Math.PI * U2;
  var z1 = mu + sigma * R * Math.cos(theta);
  var z2 = mu + sigma * R * Math.sin(theta);
  return [z1, z2];
}

function draw() {
  // frameRate(1);
  let U1 = random();
  let U2 = random();

  // Use Box-Muller transform to generate normal random variables
  let [z1, z2] = boxMuller(mu, sigma, U1, U2);

  // Increment the count for the appropriate bin
  // let binIndex = (bins + Math.floor(z1)) % bins;
  let binIndex = (bins + (Math.floor(z1) % bins)) % bins;
  if (binIndex >= 0 && binIndex < bins) {
    counts[binIndex]++;
    if (counts[binIndex] > height) noLoop();
  }

  // Plot the histogram as a bar chart
  let binWidth = width / bins;
  for (let i = 0; i < bins; i++) {
    rect(i * binWidth, height - counts[i], binWidth, counts[i]);
  }
}
