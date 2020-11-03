const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground = new Ground(400,500,800,20)
  paper = new PaperClass(200,200,20)
  dustbin1 = new Dustbin(490,450,20,100)
  dustbin2 = new Dustbin(600,490,200,20)
  dustbin3 = new Dustbin(700,450,20,100)

}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 ground.display();
 paper.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
}


function keyPressed() {
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paperObject.body,paperObject.postion,{x:85,y:-85})
  }
}
