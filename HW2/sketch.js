//Chad Cooper
//IGME 609
//HW Two
//Mars Rover
//2_14_19

//Global variables for canvasSize and 'r'. 'R' is used for controlling the rover and spaceship

var canvasSize = 400;
var r


function setup() 
{
  createCanvas(canvasSize, canvasSize);
}

function draw() 
{
  background(255,205,125);
  
  //Foreground of Mars
    fill(255,175,105);
    quad(0,320,width,320,width,height,0,height);
  
 	//Earth animates left to right
	earth();
  
  
  //If Else statement. If 'r' button is pressed the rover will become parked 
  //and a spaceship will become active. 
  //If 'r' is not pressed, the rover will be moveable and the spaceship will go away
  
  if(keyIsPressed && key == 'r')
  {
  //rover is parked r
 		rover(0);
  //-200 was used to make sure the mouse synced with spaceship position
    spaceShip(mouseX-200,mouseY-200);
  }
  
  else
  {
    //Rover can be moved along x-axis
    rover(mouseX);
  }
  
 



}

	//Shape of the spaceship

  function spaceShip(xPos,yPos)
  {
      fill(220);
      ellipse(xPos+200,yPos+230,100,40)
      fill(90,90,255);
      ellipse(xPos+200,yPos+220,60,30)
      fill(255);
      ellipse(xPos+160,yPos+230,10)
      ellipse(xPos+200,yPos+242,10)
      ellipse(xPos+240,yPos+230,10)
  }

	//Shape of the rover
  function rover(x)
  {
      fill(220);
      ellipse(x+20,310,20)
      ellipse(x+80,310,20)
      ellipse(x+50,310,20)
      quad(x,290,x+100,290,x+100,300,x,300);
      quad(x+80,240,x+90,240,x+90,290,x+80,290);
      quad(x+70,230,x+100,230,x+100,240,x+70,240);
      quad(x+25,260,x+30,260,x+30,290,x+25,290);
      ellipse(x+80,235,6)
      ellipse(x+90,235,6)

  }


  //Shape of the Earth with frameCount added to xPosition
  function earth()
  {
      fill(0,100,250);
      ellipse(frameCount,100,75);
      fill(0,250,100);
      beginShape();
      curveVertex(frameCount-10 ,100);
      curveVertex(frameCount-10 ,100);
      curveVertex(frameCount+10 ,80);
      curveVertex(frameCount-10 ,65);
      curveVertex(frameCount-20 ,75);
      curveVertex(frameCount-10 ,95);
      curveVertex(frameCount-15 ,105);
      curveVertex(frameCount-25 ,110);
      curveVertex(frameCount-15 ,115);
      curveVertex(frameCount-10 ,125);
      curveVertex(frameCount-10	,100);
      curveVertex(frameCount-10	,100);
      endShape();

      beginShape();
      curveVertex(frameCount+20 ,100);
      curveVertex(frameCount+20 ,100);
      curveVertex(frameCount+20 ,80);
      curveVertex(frameCount+15 ,75);
      curveVertex(frameCount+10 ,75);
      curveVertex(frameCount+10 ,95);
      curveVertex(frameCount ,105);
      curveVertex(frameCount+10 ,110);
      curveVertex(frameCount+15 ,115);
      curveVertex(frameCount+25 ,125);
      curveVertex(frameCount+20	,100);
      curveVertex(frameCount+20	,100);
      endShape();
	}