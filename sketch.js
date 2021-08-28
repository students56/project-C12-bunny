var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");

  //Leaf need to be added just to show more creative                         //added
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200,100,100);
garden.addImage(gardenImg);
//garden.scale = 0;

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples()
{
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg);
apple.scale = 0.1;
apple.velocityY= 3;     // it was 0
//life time apple                                                                     // added 
apple.lifetime = 150;
}


function draw() {
  background(0);
  //background("green");

  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //var apple = Math.round(random(1,2));

  drawSprites();                                                                  /// shifted here
  var select_sprites = Math.round(random(1,3));
if(frameCount % 80 ==0)
{
if(select_sprites == 1) {
  createApples();
}
else if(select_sprites == 2){
  createOrange();
} else {
  createRed();
}
}
}
 
//spawnApples();
  //drawSprites();


  // these two functions added 
  function createOrange() {
    orangeL = createSprite(random(50, 350),40, 10, 10);
    orangeL.addImage(orangeImg);
    orangeL.scale=0.08;
    orangeL.velocityY = 3;
    orangeL.lifetime = 150;
    }
    
    function createRed() {
    redL = createSprite(random(50, 350),40, 10, 10);
    redL.addImage(redImg);
    redL.scale=0.06;
      redL.velocityY = 3;
      redL.lifetime = 150;
    }
    

