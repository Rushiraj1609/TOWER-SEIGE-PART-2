const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1300,650);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(690,300,250,10);
  stand2 = new Stand(1000,460,200,10);
 
  //level one
  block1 = new Block(600,275,30,40);
  block2 = new Block(630,275,30,40);
  block3 = new Block(660,275,30,40);
  block4 = new Block(690,275,30,40);
  block5 = new Block(720,275,30,40);
  block6 = new Block(750,275,30,40);
  block7 = new Block(780,275,30,40);
  //level two
  block8 = new Block(630,235,30,40);
  block9 = new Block(660,235,30,40);
  block10 = new Block(690,235,30,40);
  block11 = new Block(720,235,30,40);
  block12 = new Block(750,235,30,40);
  //level three
  block13 = new Block(660,195,30,40);
  block14 = new Block(690,195,30,40);
  block15 = new Block(720,195,30,40);
  //top
  block16 = new Block(690,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(940,375,30,40);
  blocks2 = new Block(970,375,30,40);
  blocks3 = new Block(1000,375,30,40);
  blocks4 = new Block(1030,375,30,40);
  blocks5 = new Block(1060,375,30,40);
  //level two
  blocks6 = new Block(970,335,30,40);
  blocks7 = new Block(1000,335,30,40);
  blocks8 = new Block(1030,335,30,40);
  //top
  blocks9 = new Block(1000,395,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background("aqua"); 
 
  //Engine.update(engine);
  
  textSize(20);
  fill("black");
  text("**Drag the polygon to destroy the blocks",300,30);
  textSize(20);
  text("**Press Space to get a second Chance to Play!!",300 ,60);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("purple");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("orange");
  block13.display();
  block14.display();
  block15.display();
  fill("pista");
  block16.display();
  fill("blue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("black");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("yellow")
  blocks9.display();
  fill("white");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
if(keyCode === 32){
  slingShot.attach(this.polygon);
}
}
