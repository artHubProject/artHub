var osc, fft;

function setup() {
  createCanvas(720, 256);

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(.5);

  fft = new p5.FFT();
  osc.start();
}

function draw() {
  background(100);

  var waveform = fft.waveform();  // analyze the waveform
  beginShape();
  strokeWeight(10);
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();

  // change oscillator frequency based on mouseX
  var freq = map(mouseX, 0, width, 100, 1000);
  osc.freq(freq);

  var amp = map(mouseY, 0, height, 5, .01);
  osc.amp(amp);
}
