
var dog,happyDog,database,foodS,foodStock

function preload()
{
  loadImage = addImage("dogImg.png");
  loadImage = addImage("dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background();
 backgroundColor(46,139,87);

 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dogHappy);
 }

  drawSprites();
  
  textSize(20)
  fill()
  stroke()
  text("Note: Press UP_ARROW Key To Feed Drago Milk",120,100);

}

function readStock(data){
  foodS = data.val();
}


function writeStock(x){

if(x<=0){
   x=0
}else{
  x=x-1;
}

  database.ref('/').update({
    Food:x
  })
}
