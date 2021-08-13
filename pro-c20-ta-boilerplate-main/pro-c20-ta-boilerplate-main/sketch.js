
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ground;
let ball;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic:true
  }

  var ballOptions = {
    restitution:0.8
    //frictionAir:0.05
  }


  ground = Bodies.rectangle(0, 389, 400, 20, options);
  ball = Bodies.circle(100, 10, 20, ballOptions);
  console.log(ball);
  World.add(world, ground);
  World.add(world, ball);
  console.log(ground);
}

function draw() 
{
  background("black");
  Engine.update(engine);
  ///ground.isStatic = true;
  rect(ground.position.x, ground.position.y, 400, 10);
  ellipse(ball.position.x, ball.position.y, 20);
}

