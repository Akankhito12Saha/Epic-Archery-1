const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase, player

function setup() {
  canvas = createCanvas(1250, 400);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
playerBase = new PlayerBase(290,window.height-200,1,1);
computerBase = new ComputerBase(1000,window.height-200,1,1);
player = new Player(285,playerBase.body.position.y -90, 1, 1)
player2 = new Player(990,computerBase.body.position.y -90, 1, 1); 

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerBase.display();
   playerBase.display();
   player.display();
   player2.display();
   //display Player and computerplayer


}
