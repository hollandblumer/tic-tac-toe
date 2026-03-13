const SPECK_COUNT = 5000;
const ALPHA = 85;
const NOISE_SCALE = 0.01;
const SIZE_FACTOR = 0.002;
const BG_COLOR = "#120a0a";

let pg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeSpeckLayer();
}

function draw() {
  background(BG_COLOR);
  image(pg, 0, 0);
}

function makeSpeckLayer() {
  pg = createGraphics(width, height);
  pg.noStroke();

  for (let i = 0; i < SPECK_COUNT; i++) {
    const x = random(width);
    const y = random(height);
    const n = noise(x * NOISE_SCALE, y * NOISE_SCALE) * width * SIZE_FACTOR;
    pg.fill(255, ALPHA);
    pg.ellipse(x, y, n, n);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  makeSpeckLayer();
}
