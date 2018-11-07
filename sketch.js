var canvas;  // assign variables
var font,
  fontsize = 250

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('SpicyRice-Regular.ttf');
}

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
 canvas.position(0,0);
background('rgb(100%,0%,10%)');

// Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
	
}

function draw() {// put drawing code here

textAlign(CENTER);
drawWords( width * .5 );
	
}
function drawWords(){
  fill(255);
  text("RED!",width/2, height/4);
	
	
}

var canvas;
var font,
  fontsize = 250

// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2;


function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('SpicyRice-Regular.ttf');
}

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
 canvas.position(0,0);
background('rgb(100%,0%,10%)');

	  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
	
  // Define colors
  b1 = color(240, 65, 50);
  b2 = color(170, 30, 45);

  noLoop();
	
}

function draw() {// put drawing code here


	
  // Background
  setGradient(0, 0, width, height, b1, b2, Y_AXIS);
	textAlign(CENTER);
	drawWords( width * .5 );
	
}

function drawWords(){
  fill(255);
  text("RED!",width/2, height/4);
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(b1, b2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }


}
  }
