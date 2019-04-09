//Chad Cooper
//IGME 609
//HW Three
//3_25_19


//Global variable for canvasSize 
var canvasSize = 400;


function setup() 
{
  createCanvas(canvasSize,canvasSize);

}

function draw() {
  
  strokeWeight(2);
  
  background(220);
  
  
  //When 'C' key is pressed draw clouds
  
  if(keyIsPressed && key=='c')  
    {
    cloud()
    }
  
  
  //When 'M' key is pressed draw mountains
  
  if(keyIsPressed && key=='m')  
    {
    mountains()
    }
  
    
  
  //When 'S' key is pressed draw the sun
  
  if(keyIsPressed && key=='s')  
    {
    ellipse(0,0,150);
    }

  
  //Variables used in the while loop to draw a series of trees
  
  var treeStart = 20;
  var treeEnd = 300;
  var treeDifference = 40;
  
  while (treeStart <= treeEnd)
  {
      tree(treeStart)
    	treeStart = treeStart + treeDifference
  }
  

  strokeWeight(1);
  stroke(0);
  fill(20,100,255);
  rect(0,290,width,110);
  

  //If the mouse is pressed in water area, user controls a fish
  //Otherwise the user moves around a canoe
  
	if(mouseIsPressed&& mouseY>=300)
 	 	{
    //When pressed within water area
    //canoe is still and a fish swims
  	fish(mouseX,350);
  	canoe(20,300);
  	}
  
    else
  	{
    //Canoe moves in water along x
		canoe(mouseX,300);
  	}
  

//The following code is for the functions used to create the scene
  
  
 	//Draw Canoe
  
  function canoe(x,y)
  	{
    strokeWeight(2);
    fill(75,50,23);
    rect(x,300,100,30);
    fill(10,10	,23);
    rect(x+10,300,80,10);
    fill(255,255,0);
    strokeWeight(2);
    line(x+20,270,	x+20, 300);
    line(x+30,280,	x+20, 290);
    line(x+10,280,	x+20, 290);
    ellipse(x+20,270,20);
  	}
  
  
  //Draw Mountains  
  
  function mountains()
   	{
    strokeWeight(0);

    fill(205);
    beginShape()
		vertex(0,290);
    vertex(0,290);
    vertex(150,100);
    vertex(300,290);
    vertex(300,290);
    endShape()
      
    fill(150);
    beginShape()
		vertex(200,290);
    vertex(200,290);
    vertex(350,140);
    vertex(500,290);
    vertex(500,290);
    endShape()
		}
  
  
  //Draw Clouds
  
	function cloud()
 		{
   	fill(255);
   	strokeWeight(0);
   	ellipse(20,40,20);
   	ellipse(50,35,30);
    ellipse(30,35,30);
		ellipse(60,40,20);
		rect(20,30,40,20);
		rect(26,20,20,10);
   
   	ellipse(200,40,20);
   	ellipse(300,40,20);
		rect(200,30,100,20);
		rect(220,20,78,20);
   	ellipse(295,30,20);
    ellipse(220,30,20);
  	}

  
  //Draw a Fish
  
  function fish(xPos,y)
  	{
    strokeWeight(0);
    fill(0,255,0);
    ellipse(xPos+30,350,30,10);
    beginShape()
		vertex(xPos+10,360);
    vertex(xPos+10,360);
    vertex(xPos+15,350);
    vertex(xPos+10,340);
    vertex(xPos+10,340);
    endShape()
  	}
 	stroke(0);
  
	function tree(xTree)
  	{
    strokeWeight(4);
    stroke(69,37,23);
 		line(xTree+60,250,xTree+60, 300);
    stroke(0,255,0);
 		line(xTree+60,250,xTree+50, 260);
 		line(xTree+60,250,xTree+70, 260);
    line(xTree+60,260,xTree+50, 270);
 		line(xTree+60,260,xTree+70, 270);
    line(xTree+60,270,xTree+50, 280);
 		line(xTree+60,270,xTree+70, 280); 
 		}
}
  
