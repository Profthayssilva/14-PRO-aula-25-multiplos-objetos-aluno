
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;

// Declare as variáveis para todos os fans (ventiladores).

var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  var ground_options ={
    isStatic: true
  };
  ground = Bodies.rectangle(0,400,400,20,ground_options);
 World.add(world,ground); 
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);  

  // : Crie os objetos da classe Ground usando a palavra-chave new
 fan = new Ground(50,370,50,30);
 fan1 = new Ground(150,370,50,30);
  


  // : Relembre como a bola e o corpo são criados para o mundo
  
  

    rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,750,20);


// : Chame a função show() dentro da função draw() para cada um dos ventiladores    fan.show();
fan1.show();


  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  


