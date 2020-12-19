
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
var wall1,wall2,wall3;
var rightSide,leftSide,bottomide;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground = new Ground(600,height,1200,70);

   wall1=Bodies.rectangle(728,382,20,175, {isStatic:true});
   World.add(world,wall1);

   wall2=Bodies.rectangle(675,460,90,20 , {isStatic:true});
   World.add(world,wall2);

   wall3=Bodies.rectangle(640,375,20,150,{isStatic:true});
   World.add(world,wall3);

   paperObject=new Paper(100,445,40);
   paperObject.collide="ground";

   Engine.run(engine);
   
   keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);
  
  leftSide=createSprite(wall1.position.x,wall1.position.y,20,175);
  leftSide.shapeColor="red";

  bottomSide=createSprite(wall2.position.x,wall2.position.y,90,20);
  bottomSide.shapeColor="red";

  rightSide=createSprite(wall3.position.x,wall3.position.y,20,150);
  rightSide.shapeColor="red";

  paperObject.display();
  ground.display();

  
  
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode===UP_ARROW)
  {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:65,y:-70});
  }
}



