let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  
  ground=createSprite(700,700,700,10);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);

  if(lander.collide(ground))
  {
    text("Moon Lnder has been landed",200,200);
    vy=vy+50;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    lander.position.y+=2;
  }

  if(keyDown(UP_ARROW))
  {
    lander.position.y-=2;
  }

  if(keyDown(RIGHT_ARROW))
  {
    lander.position.x+=2;
  }

  if(keyDown(LEFT_ARROW))
  {
    lander.position.x-=2;
  }



  drawSprites();
}





