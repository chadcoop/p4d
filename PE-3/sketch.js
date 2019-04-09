//Chad Cooper - PE Variables

//Global Rectangle Variables 
var rectX1 = 0
var rectY1 = 0
var rectX2 = 450
var rectY2 = 0

//Global Canvas 
var canvasSize=(500);

//Global Fill Variable 
var fillChange = 0

function setup() {
  createCanvas(canvasSize, canvasSize);
}


function draw() {
  background(200,255,255);
  
  //Circle frame by frame increments
  var center = canvasSize/2;
  var size = canvasSize * .1;
  
  //Rectangle frame by frame increments
  rectX1 = rectX1+1
  rectY1 = rectY1+1
 	rectX2 = rectX2-1
	rectY2 = rectY2+1
  
  //Fill frame by frame increments
  fillChange = fillChange + 1

	//Animate Circle Scale and Fill Change  
  fill(fillChange*2,0,0);  
	ellipse(center,center,frameCount);
  
	//Animate Rectangles Positions  
  fill(100,100,100)
  rect(rectX1,rectY1,size,size);
  rect(rectX2,rectY2,size,size);
}