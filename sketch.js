var issImg,bg,space_craft,space_craft1,space_craft2,space_craft3;
var iss;
var spaceCraft;
var hasDocked=false;

function preload(){
  issImg=loadImage("./Docking-undocking/iss.png");
  bg=loadImage("./Docking-undocking/spacebg.jpg");
  space_craft=loadAnimation("./Docking-undocking/spacecraft1.png","./Docking-undocking/spacecraft2.png","./Docking-undocking/spacecraft3.png","./Docking-undocking/spacecraft4.png");
  space_craft1=loadImage("./Docking-undocking/spacecraft4.png");
  space_craft2=loadImage("./Docking-undocking/spacecraft3.png");
  space_craft3=loadImage("./Docking-undocking/spacecraft2.png");
}

function setup() {
  createCanvas(800,400);
  
  iss=createSprite(400,200,100,100);
  iss.addImage("iss",issImg);
  iss.scale=0.5;

  spaceCraft=createSprite(380,350,50,50);
  spaceCraft.addAnimation("spaceCraft",space_craft);
  spaceCraft.scale=0.2;

  
}

function draw() {
  background(bg);
  
  if(!hasDocked){
    spaceCraft.x=random(300,500);

    if(keyDown("left_arrow")){
      spaceCraft.x-=5;
      spaceCraft.changeAnimation("space_craft1",space_craft1);
    }

    if(keyDown("right_arrow")){
      spaceCraft.x+=5;
      spaceCraft.changeAnimation("space_craft2",space_craft2);
    }

    if(keyDown("down_arrow")){
      spaceCraft.changeAnimation("space_craft3",space_craft3);
    }

    if(keyDown("up_arrow")){
      spaceCraft.y-=5;
      spaceCraft.changeAnimation("space_craft3",space_craft3);
    }
  }

  if(spaceCraft.isTouching(iss)){
    hasDocked=true;
    textSize(20);
    text("Docking Succesful!",200,300);
  }

  drawSprites();
}