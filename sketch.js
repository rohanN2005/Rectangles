var movingRect, stillRect

function setup() {
  createCanvas(800,400);
  stillRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,60,50);

}

function draw() {
  background(0);  
  
  movingRect.y = mouseY
  movingRect.x = mouseX

  if(movingRect.x-stillRect.x <= movingRect.width/2+stillRect.width/2&&
    stillRect.x-movingRect.x <= movingRect.width/2+stillRect.width/2&&
    movingRect.y-stillRect.y <= movingRect.height/2+stillRect.height/2&&
    stillRect.y-movingRect.y <= movingRect.height/2+stillRect.height/2){
      movingRect.shapeColor = 'green'
      stillRect.shapeColor = 'blue'
    }
  else{
    movingRect.shapeColor = "red"
    stillRect.shapeColor = "red"
 }
  drawSprites();
}