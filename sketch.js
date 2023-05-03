var fred= 0;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
   
}

//The draw function happens over and over again
function draw() {
 background(201,251,fred); //greenish yellow
  //circle
  fill(246,157,fred);
  stroke(0);
  strokeWeight(5);
  rect(mouseX,mouseY,50,50);
  stroke(255,5,127) // an RGB color for the circle's border
  strokeWeight(2);
  fill(130,255,10,mouseX); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,200,fred,fred); // center of canvas, 20px dia
  line(10,100,200,fred);
  strokeWeight(0);
  fill(255);
  ellipse(mouseX,mouseY,30,30);
  textSize(100);
  fill(230,145,210);
  stroke(255,5,127) // an RGB color for the circle's border
  strokeWeight(5);
  textFont("Helvetica");
  text('Hello',250,100);
}

function mousePressed() {
  if (fred>=255){
    fred=0
   } else {
   fred=fred+5;
   }
   
}