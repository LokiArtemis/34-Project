//Create variables here
var dog, dogImage, dogImage, database, foodStock,foodS;
foodS=0;
function preload()
{
  dogImage=loadImage("images/dogImg.png");
  dogImage1=loadImage("images/dogImg1.png");

	//load images here
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImage);
  dog.scale=0.15;
foodStock=database.ref('Food');
foodStock.on('value', readStock);

 
}


function draw() {  
  background('lightBlue');
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogImage1)
  }
  drawSprites();
  //add styles here
fill('black');
text("food remaining for dog: "+foodS, 170,200);
textSize('13');
text("Press UP ARROW", 130,10,300,20);
}

function readStock(data){
foodS=data.val();
}
function writeStock(x){
if(x<=0){
x=0
}
else{
  x=x-1;
}
database.ref('/').update({
  Food:x
})
}