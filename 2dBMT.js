function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // frameRate(1);
  const r1 = random(1); // generate two random numbers
  const r2 = random(1);
  const n1 = sqrt(-2.0 * log(r1)) * cos(2.0 * PI * r2); // Box-Muller transform
  const n2 = sqrt(-2.0 * log(r1)) * sin(2.0 * PI * r2); // Box-Muller transform
  let x = Math.abs(Math.floor(n1 * 50 + width / 2));
  let y = Math.abs(Math.floor(n2 * 50 + height / 2));
  // console.log(x, y);
  strokeWeight(2);
  point(x, y);
}
