let noiseMove = 0.01;
let xOff = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  background(255);
  //   frameRate(5);
  // Loop through each pixel in the canvas
  for (let x = 0; x < width; x++) {
    // Calculate the noise value at this x-coordinate
    let noiseVal = noise(xOff + x / 100) * 255;

    // Draw a line at the current x-coordinate with a height equal to the noise value
    stroke(noiseVal);
    line(x, height, x, height - noiseVal);

    // Increment the x-offset based on the noise scale
  }
  xOff += noiseMove;
}
