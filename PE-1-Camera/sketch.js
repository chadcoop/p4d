//Chad Cooper - Drawing

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  
  //drawBody
  fill(255,255,255);
  rect(90,120,220,160);
    
  //bodyDetail
  fill(225,225,225);
  rect(90,120,220,10);
  rect(90,270,220,10);
  
  //lens
  fill(50,50,50);
  ellipse(200,200, 120);
  fill(125,125,125);
  ellipse(200,200, 100);
 
  	//apertureOctagon
  	line(185,170,215,170);
  	line(185,230,215,230);
  	line(170,215,170,185);
  	line(230,215,230,185);
		line(170,185,185,170);
  	line(230,185,215,170);
  	line(170,215,185,230);
  
		//apertureBlades
  	line(230,215,215,230);
		line(185,170,170,159);
		line(170,185,152,185);
  	line(215,152,215,170);
  	line(185,247,185,230);
		line(230,215,247,215);
		line(228,240,215,230);
  	line(170,215,156,225);
  	line(230,185,243,175);
    fill(50,50,50);
		ellipse(200,200,68);

  //flash
  fill(150,150,150);
  quad(160,120,175,75,225,75,240,120);
  
  	//detail
    fill(175,175,175);
  	quad(172.5,98.5,225,98.56,225,112.5,172.5,112.5);	
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
  
  //shutterButton
  fill(150,150,150);
  rect(95,120,30,-10);
 	fill(205,205,205);
  rect(100,110,20,-5);

  //shutterSpeedDialFilmRewind
  fill(150,150,150);
  rect(260,120,20,-5);
  rect(135,120,20,-5);
  
  //triangleDetail
  fill(50,50,50);
  triangle(100,140,150,140,100,190);
  triangle(300,260,250,260,300,210);
  
  //selfTimer
  fill(120,120,120);
  rect(114,230,12,-30);
  line(120,200,120,220);
  line(122.5,200,122.5,225);
  line(117.5,200,117.5,225);
  ellipse(125,230,20);  	

  
}