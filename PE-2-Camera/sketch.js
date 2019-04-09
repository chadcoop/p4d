//Chad Cooper - Drawingv2

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,127,132);
  rectMode(CORNER);
  
  //neckStrap
  beginShape();
  noFill();
  strokeWeight(6);
  stroke(32,78,95);
  curveVertex(85,150);
  curveVertex(85,150);
  curveVertex(40,280);
  curveVertex(150,230);
  curveVertex(360,230);
  curveVertex(360,280);
  curveVertex(315,150);
  curveVertex(315,150);
  endShape();
  
  //neckStrapConnection
  strokeWeight(4);
  stroke(121,167,168);
  arc(312,150,10,10,PI+HALF_PI,HALF_PI)
	arc(88,150,10,10,HALF_PI, HALF_PI+PI)
  
  //shutterButton
  strokeWeight(2);
  stroke(255,137,132);

  fill(32,78,95);
  rect(95,120,30,-10);
 	fill(183,215,216);
  rect(100,110,20,-5);
  
  //shutterSpeedDialFilmRewind
  fill(32,78,95);
  rect(260,120,20,-5);
  rect(135,120,20,-5);
  
  //drawBody
  noStroke();
  fill(237,247,245);
  rect(90,120,220,160);
    
  //bodyTopAndBottom
  fill(183,215,216);
  rect(90,120,220,10);
  rect(90,270,220,10);
  
  //lens
  fill(32,78,95);
  ellipse(200,200, 120);
  fill(121,167,168);
  ellipse(200,200,100);
 	noStroke();
  	//apertureOctagon
  	stroke(255,137,132);
  	strokeWeight(2);
  	line(185,170,215,170);
  	line(185,230,215,230);
  	line(170,215,170,185);
  	line(230,215,230,185);
		line(170,185,185,170);
  	line(230,185,215,170);
  	line(170,215,185,230);
  
		//apertureBlades
  	line(230,215,215,230);
		line(185,170,170,161);
		line(170,185,154,185);
  	line(215,153,215,170);
  	line(185,247,185,230);
		line(230,215,247,215);
		line(229,240,215,230);
  	line(170,215,158,225);
  	line(230,185,242,175);
  	noStroke();
  	fill(32,78,98);
		ellipse(200,200,68);

  //flash
  fill(183,215,216);
  quad(160,120,175,75,225,75,240,120);
  
  	//flashDetail
    fill(237,247,245);
  	quad(172.5,97.5,227.5,97.5,227.5,112.5,172.5,112.5);	
  	stroke(255,137,132);
  	strokeWeight(2);
	  point(175,100);
  	point(180,100);
  	point(185,100);
 		point(190,100);    
  	point(195,100);
  	point(200,100);
  	point(205,100);
  	point(210,100);
  	point(215,100);
  	point(220,100);
  	point(225,100);
		point(175,105);
  	point(180,105);
  	point(185,105);
  	point(190,105);    
  	point(195,105);
  	point(200,105);
  	point(205,105);
  	point(210,105);
  	point(215,105);
  	point(220,105);
  	point(225,105);
  	point(175,110);
  	point(180,110);
  	point(185,110);
  	point(190,110);    
  	point(195,110);
  	point(200,110);
  	point(205,110);
  	point(210,110);
  	point(215,110);
  	point(220,110);
  	point(225,110);
  
  	//canon
  	stroke(32,78,95);  	
    strokeWeight(1.5);
  	line(177.5,80,182.5,80);
  	line(177.5,90,182.5,90);
  	line(177.5,80,177.5,90);
  	line(190,80,187.5,90);
  	line(190,80,192.5,90);
  	line(189,88,191,88);
  	line(197.5,80,197.5,90);
  	line(197.5,80,202.5,90);
  	line(202.5,80,202.5,90);
  	line(207.5,80,207.5,90);
  	line(212.5,80,212.5,90);
  	line(212.5,90,207.5,90);
  	line(212.5,80,207.5,80);
  	line(217.5,80,217.5,90);
  	line(217.5,80,222.5,90);
  	line(222.5,80,222.5,90);
  
  //triangleDetail
  noStroke();
  fill(32,78,95);
  triangle(100,140,150,140,100,190);
  triangle(300,260,250,260,300,210);
  
  //selfTimer
  stroke(32,78,85);  	
  strokeWeight(1);
 	fill(121,167,168);
  noStroke();
  rect(114,230,12,-30);    
  stroke(32,78,85);  	
  strokeWeight(1);
  line(120,200,120,220);
  line(122.5,200,122.5,225);
  line(117.5,200,117.5,225);
  noStroke();
  ellipse(124,230,20);  	
  stroke(225,137,132);
  
  //closedAperture
  beginShape();
  noFill();
  strokeWeight(2);
  stroke(121,167,168);
  curveVertex(165,200);
  curveVertex(165,200);
	curveVertex(185,190);
  curveVertex(200,200);
  curveVertex(215,210);
  curveVertex(235,200);
  curveVertex(235,200);
  endShape();
  
  //bodyDetail
  rectMode(CORNERS);
	strokeWeight(.5);
  rect(280,140.5,300,143.5);
  rect(280,146.5,300,149.5);
  rect(280,152.5,300,155.5);
  
  
  
  
}