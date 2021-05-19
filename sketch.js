const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var ground,base;
var ball1;
var slingshot;
var ballImg;
var bg,bgImg;



function preload(){
  ballImg=loadImage("hexagon.png");
  getTime();
  
}

function setup() {
  createCanvas(800,500);
   
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);

  ground=new Ground(400,480,800,20);

  base=new Ground(550,400,250,10);

  box1=new Box(470,375,40,40);
  box2=new Box(510,375,40,40);
  box3=new Box(550,375,40,40);
  box4=new Box(590,375,40,40);
  box5=new Box(630,375,40,40);
  box6=new Box(490,335,40,40);
  box7=new Box(530,335,40,40);
  box8=new Box(570,335,40,40);
  box9=new Box(610,335,40,40);
  box10=new Box(510,295,40,40);
  box11=new Box(550,295,40,40);
  box12=new Box(590,295,40,40);
  box13=new Box(530,255,40,40);
  box14=new Box(570,255,40,40);
  box15=new Box(550,215,40,40);
  
  ball1= Bodies.circle(50,200,15);
  World.add(world,ball1);

  slingshot=new SlingShot(this.ball1,{x:100,y:200});

}

function draw() {

  if(bgImg)
  background(bgImg);
  ground.display();
  base.display();  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  
  imageMode(CENTER);
  image(ballImg,ball1.position.x,ball1.position.y,50,50);
  slingshot.display();
  drawSprites();
  text(mouseX+","+mouseY,20,30);
  Engine.update(engine);
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball1, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
      slingshot.attach(this.ball1);  
    }
}


async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  
  var dateTime=responseJSON.datetime;
  var hour=dateTime.slice(10,13);

  if(hour>=06 && hour<=18){
      bg="day.png";
  }else{
      bg="night.jpg";
  }
  bgImg=loadImage(bg);

}
