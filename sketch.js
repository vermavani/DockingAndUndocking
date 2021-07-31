var iss, spaceCraft;
var hasDocked = false;


function preload(){
issImg = loadImage("iss.png")
spacebgImg = loadImage("spacebg.jpg")
spacecraft1Img = loadImage("spacecraft1.png")
spacecraft2Img = loadImage("spacecraft2.png")
spacecraft3Img = loadImage("spacecraft3.png")
spacecraft4Img = loadImage("spacecraft4.png")

}

function setup() {
  createCanvas(800,400);
  
  iss = createSprite(330,150)
  iss.addImage(issImg)
  iss.scale = 0.8;

  spaceCraft= createSprite(330,260)
  spaceCraft.addImage(spacecraft1Img)
  spaceCraft.scale = 0.2 ;

  box=createSprite(280,160)
  box.scale= 0.3;
  box.visible = false;
  

}

function draw() {
  background(spacebgImg);
  
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1)

    if(keyDown("UP_ARROW")){
      spaceCraft.y = spaceCraft.y -2;
    }
    if(keyDown("LEFT_ARROW")){
      spaceCraft.x = spaceCraft.x -2;
      spaceCraft.addImage(spacecraft3Img)
    }
    if(keyDown("RIGHT_ARROW")){
      spaceCraft.x = spaceCraft.x +2;
      spaceCraft.addImage(spacecraft4Img)
    }
    if(keyDown("DOWN_ARROW")){
      spaceCraft.y = spaceCraft.y +2;
      spaceCraft.addImage(spacecraft2Img)
    }
  }

 if(spaceCraft.isTouching(box)){
   hasDocked = true;
   fill("white")
   textSize(30)
  text("*Docking Successful*",350,300)
 }
  
  drawSprites();
}