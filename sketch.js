var fR,mR

function setup() {
  createCanvas(400,400);
// createSprite(x,y,w,h)
// isTouhing()
// bounce(),collide()
  fR = createSprite(200,200,20,20);
  fr2 = createSprite(100,200,20,20);
  fr3 = createSprite(300,200,20,20);
  mR = createSprite(300,300,20,20);
  
}

function draw() {
  background("black");  

  mR.x = mouseX;
  mR.y = mouseY;

  console.log(mR.x-fR.x);

  Touching(mR,fR);
  Touching(mR,fr2);
  Touching(mR,fr3);
  


  drawSprites();
}

function Touching(mR,fR){
  if(mR.x - fR.x <= (mR.width/2 + fR.width/2) &&
    fR.x - mR.x <= (mR.width/2 + fR.width/2) &&

    mR.y - fR.y <= (mR.height/2 + fR.height/2) &&
    fR.y - mR.y <= (mR.height/2 + fR.height/2)

    ){
    fR.shapeColor = "blue";
    mR.shapeColor = "yellow"
  }
  else{
    fR.shapeColor = "pink";
    mR.shapeColor = "lightgreen"
  }
}