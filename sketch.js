//Create variables here
var dog,dogImg
var happyDog
var database
var foods
var foodStock
 var button
 var button1
 var foodCount
var lastfed

function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png")
  happyDog = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(400,250)
  dog.scale = 0.3
  dog.addImage("dog1", dogImg);
  dog.addImage("dog2", happyDog);
  
  this.button=createButton("Feed The Dog")
  this.button1=createButton("Add Stock")
  this.button.position(550,85)
  this.button1.position(680,85);

  food = new Food()
  }


function draw() {  
background(46,139,87)
food.FoodStock()
food.display()
food.lastFedTime()

button.mousePressed(()=>
{
  food1 = foodCount-1
  food.addFoodStock(food1)
  lastfed1=hour()
  food.addFedTime(lastfed1)
  dog.addImage(happyDog);
})

button1.mousePressed(()=>
{
  food2 = foodCount+1
  food.addFoodStock(food2)
  })

  fill(255,255,254)
textSize(15)
if(lastfed>=12){
text("Last Feed : "+lastfed%12+"PM",350,30)
}
else if(lastfed==0){
text("Last Feed :  12 AM ",350,30)
}
else{
text("Last Feed : "+lastfed+"AM",350,30)
}
  drawSprites();
  //add styles here

fill(245, 245, 220);
  textSize(20);
  text("Food Stock : " + foodCount, 30, 40);
}

