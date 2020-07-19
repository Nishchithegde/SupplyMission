var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  helicopterIMG=loadImage("helicopter.png")
  packageIMG = loadImage("package.png")
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);
	

  packageSprite=createSprite(width/2, 80, 50, 50);
  packageSprite.addImage(packageIMG)
  packageSprite.scale=0.2

  helicopterSprite=createSprite(width/2, 200, 150,100);
  helicopterSprite.addImage(helicopterIMG)
  helicopterSprite.scale=0.6

  groundSprite=createSprite(width/2, height-35, width,10);
  groundSprite.shapeColor=color(255)

  boxsprite1 = createSprite(width/2, height-45, width/4, 10);
  boxsprite1.shapeColor="red";

  boxsprite2 = createSprite(305, height-95,10,100);
  boxsprite2.shapeColor="red";
  boxsprite2 = createSprite(495, height-95,10,100);
  boxsprite2.shapeColor="red";

  engine = Engine.create();
  world = engine.world;

  packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
  World.add(world, packageBody);

  box1 = Bodies.rectangle(width/2, 640, width/4, 10 , {isStatic:true} );
  World.add(world, box1);

  //Create a Ground
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //boxsprite1.x = box1.position.x
  //boxsprite1.y = box1.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



