let helicopterIMG, helicopterSprite, packageSprite,packageIMG;
let packageBody,ground;
let l1,l2,l3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() 
{
	// creating canvas 
	createCanvas(800, 700);
	rectMode(CENTER);
	
	// creation of engines 
	engine = Engine.create();
	world = engine.world;
	
	//l1
	l1 = createSprite(360,670,200,20);
	l1.shapeColor = "red";

	//l2
	l2 = createSprite(450,600,20,120);
	l2.shapeColor = "red";

	//l3
	l3 = createSprite(270,600,20,120);
	l3.shapeColor = "red";

	// options
	var options = {isStatic : true};

	// packageoptions
	var packageoptions = {restitution : 0.5};

	// packageSprite
	packageSprite=createSprite(width/2, 80, 10,packageoptions);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	World.add(world,packageSprite);

	// helicopterSprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;
	World.add(world,helicopterSprite);

	// packageBody
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic : false});
	World.add(world, packageBody);

	// groundSprite
	groundSprite = createSprite(5,690,10000,20,options);//width/2, height-35, width,{isStatic:false});
	groundSprite.shapeColor="black";
	
	World.add(world,groundSprite);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() 
{
  rectMode(CENTER);
  background("blue");

  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;

  Engine.update(engine);

    //drawing sprites  
  drawSprites();
 
}

// global variables
function keyPressed() 
{
	if (keyCode === DOWN_ARROW) 
	{
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.setStatic(packageSprite,false);
	}
}