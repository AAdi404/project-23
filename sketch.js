var playground;
var helicopter;
var package;
var ground;
var box1;
var box2;
var box3;
var playgroundImage;
var helicopterImage;
var packageImage;
var packageBody;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
function preload(){
helicopterImage=loadImage("helicopter.png");
packageImage=loadImage("package.png");
playgroundImage=loadImage("zombie city.png");
}
function setup(){
createCanvas(800,500);
rectMode(CENTER);
playground1=createSprite(400,250,20,20);
playground1.addImage(playgroundImage);
playground1.depth=1.5;
playground2=createSprite(1200,250,20,20);
playground2.addImage(playgroundImage);
playground3=createSprite(2000,250,20,20);
playground3.addImage(playgroundImage);
package=createSprite(400,100,10,10);
package.addImage(packageImage);
package.scale=0.2;
helicopter=createSprite(400,100,10,10);
helicopter.addImage(helicopterImage);
helicopter.scale=0.6;
box1=createSprite(400,485,100,10);
box1.shapeColor=("red");
box2=createSprite(345,465,10,50);
box2.shapeColor=("red");
box3=createSprite(445,465,10,50);
box3.shapeColor=("red");
ground=createSprite(400,485,800,30);
ground.visible=false;
engine=Engine.create();
world=engine.world;
packageBody=Bodies.circle(400,100,5,{restitution:0.4,isStatic:true});
World.add(world,packageBody);
ground=Bodies.rectangle(400,485,800,30,{isStatic:true});
World.add(world,ground);
Engine.run(engine);
}
function draw(){
rectMode(CENTER);
background("lightblue");
package.x=packageBody.position.x;
package.y=packageBody.position.y;
playground1.velocityX=-5;
playground2.velocityX=-5;
playground3.velocityX=-5;
if(playground2.x<-395){
playground2.x=1200;
}
if(playground3.x<-395){
playground3.x=1200;
}
drop();
drawSprites();
}
function drop(){
if(keyCode===DOWN_ARROW){
Matter.Body.setStatic(packageBody,false);
}
}
