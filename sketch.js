var fixedRect,movingRect;
var fixedRect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect1= createSprite(300, 200, 20, 40);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if (isTouching(movingRect , fixedRect)){   
movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";
 
}
else if(isTouching(movingRect,fixedRect1)) {
movingRect.shapeColor= "red";
fixedRect1.shapeColor="red";

}

else{
movingRect.shapeColor= "green";
fixedRect.shapeColor = "green";
fixedRect1.shapeColor= "green";
}

 drawSprites();

}
 
 function isTouching(movingRect , fixedRect) {
 if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 )
 { return true;

}
else{
return false;

}
}