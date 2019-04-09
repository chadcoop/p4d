//ChadCooper
//SelfPortrait
//01_28_19

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(215,255,255);
  fill(255,255,255);
  
  //backgroundShapes
	rect(105,3,200,393);
  fill(255,0,0);
  triangle(103,205,299,105,3,3);
  
  fill(205,255,255);

  //hat
  beginShape();
  strokeWeight(6);
  curveVertex(205 ,55);
  curveVertex(205 ,55);
  curveVertex(230 ,60);
  curveVertex(255 ,80);
  curveVertex(265 ,120);
  curveVertex(205 ,120);
	curveVertex(145 ,120);
  curveVertex(155 ,80);
  curveVertex(180 ,60);
  curveVertex(205 ,55);
  curveVertex(205 ,55);
  endShape();
  
  strokeWeight(2);
  stroke(0,0,0);
  fill(205,255,255);
  
  //shoulders
  beginShape();
  curveVertex(50 ,400);
  curveVertex(50 ,400);
  curveVertex(100 ,310);
  curveVertex(300 ,310);
  curveVertex(350 ,400);
  curveVertex(350 ,400);
  endShape();


  //shirtCollar
  fill(255,0,0);
 	ellipse(205,305,130,30);
  
  fill(236,190,163);

  //neck
  beginShape();
  curveVertex(205 ,215);
  curveVertex(205 ,215);
  curveVertex(235 ,215);
  curveVertex(240 ,260);
  curveVertex(255 ,300);
  curveVertex(205, 310);
  curveVertex(160 ,300);
  curveVertex(170 ,260);
  curveVertex(175 ,215);
  curveVertex(205 ,215);
  curveVertex(205 ,215);
  endShape();
  
  
  //faceForm
  beginShape();
  strokeWeight(6);
  curveVertex(205 ,243);
  curveVertex(205 ,243);
  curveVertex(225 ,238);
  curveVertex(250 ,215);
  curveVertex(270 ,140);  
  curveVertex(240 ,90);
  curveVertex(205 ,80);
  curveVertex(170 ,90);
  curveVertex(140 ,140);
  curveVertex(160 ,215);
  curveVertex(185 ,238);
  curveVertex(205 ,243);
  curveVertex(205 ,243);
  endShape();
  
  strokeWeight(1);
  
  //chinDetail
  beginShape();
  curveVertex(190 ,230);
  curveVertex(190 ,230);
  curveVertex(205 ,225); 
  curveVertex(220	,230);
	curveVertex(220	,230);
  endShape();
  
  //foreheadDetail
  beginShape();
  curveVertex(190 ,110);
  curveVertex(190 ,110);
  curveVertex(205 ,109); 
  curveVertex(220	,110);
	curveVertex(220	,110);
  endShape();
  
  beginShape();
  curveVertex(195 ,115);
  curveVertex(195 ,115);
  curveVertex(205 ,114); 
  curveVertex(215	,115);
	curveVertex(215	,115);
  endShape();
  
  strokeWeight(4);
  
  //lips
  fill(178,111,90);
  beginShape();
  curveVertex(182 ,210);
  curveVertex(182 ,210);
  curveVertex(205 ,215); 
  curveVertex(228	,210);
	curveVertex(228	,210);
  endShape();
  
  beginShape();
  curveVertex(182 ,210);
  curveVertex(182 ,210);
  curveVertex(200 ,208); 
  curveVertex(210 ,208); 
  curveVertex(228	,210);
	curveVertex(228	,210);
  endShape();
  
  strokeWeight(2);
  fill(236,190,163);

  //cheeks
  beginShape();
  curveVertex(175 ,215);
  curveVertex(175 ,215);
  curveVertex(173 ,210); 
  curveVertex(175	,205);
	curveVertex(175	,205);
  endShape();
  
  beginShape();
  curveVertex(235 ,215);
  curveVertex(235 ,215);
  curveVertex(238 ,210); 
  curveVertex(235	,205);
	curveVertex(235	,205);
  endShape();
  
  strokeWeight(4);

  //nose
  
  beginShape();
  curveVertex(210 ,162);
  curveVertex(210 ,162);
  curveVertex(218 ,195); 
  curveVertex(205 ,192); 
  curveVertex(192 ,195); 
  curveVertex(200	,162);
	curveVertex(200	,162);
  endShape();
  
  
  //RightEar
  beginShape();
  curveVertex(272 ,145);
  curveVertex(272 ,145);
  curveVertex(280 ,140);
  curveVertex(290 ,155);  
  curveVertex(275 ,185);  
  curveVertex(265 ,190);
  curveVertex(265 ,190);
  endShape();
  arc(275,160,10,10,PI+HALF_PI,HALF_PI);  
  
  //LeftEar
  beginShape();
  curveVertex(142 ,145);
  curveVertex(142 ,145);
  curveVertex(130 ,140);
  curveVertex(120 ,155);  
  curveVertex(135 ,185);  
  curveVertex(145 ,190);
  curveVertex(145 ,190);
  endShape();
  arc(135,160,10,10,HALF_PI, HALF_PI+PI);
  
  //eyes
  fill(255,255,255);
  strokeWeight(2);
  ellipse(175,150,20,10);
  ellipse(235,150,20,10);
  fill(0,0,210);
  ellipse(175,150,5,5);
  ellipse(235,150,5,5);
  
  //leftGlasses
  noFill();
  beginShape();
  strokeWeight(5);
  stroke(0,0,0);
  curveVertex(150 ,140);
  curveVertex(150 ,140);
  curveVertex(152	,160);
  curveVertex(180	,165);
  curveVertex(200	,160);
  curveVertex(200	,140);
  curveVertex(150	,140);
	curveVertex(150	,140);
  endShape();
  
  //rightGlasses
  beginShape();
  curveVertex(260 ,140);
  curveVertex(260 ,140);
  curveVertex(258	,160);
  curveVertex(230	,165);
  curveVertex(210	,160);
  curveVertex(210	,140);
  curveVertex(260	,140);
	curveVertex(260	,140);
  endShape();
  
  line(190,138,215,138);
  
  //glassesArms
  line(150,140,145,137);
  line(260,140,265,137);

  fill(255,0,0);
  
  //hatBrim
  beginShape();
  strokeWeight(6);
  curveVertex(205 ,95);
  curveVertex(205 ,95);
  curveVertex(230 ,100);
  curveVertex(270 ,120);
  curveVertex(240 ,90);
  curveVertex(205 ,78);
  curveVertex(170 ,90);
  curveVertex(140 ,120);
  curveVertex(180 ,100);
  curveVertex(205 ,95);
  curveVertex(205 ,95);
  endShape();
  
  //foreGroundShape
  quad(399,397,303,350,103,400,380,250);
  strokeWeight(6);

  //borderFrame
  noFill();
  rect(3,3,394,394);

  

  

}
