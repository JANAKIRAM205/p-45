var snake1,snake2;
var spider1,spider2,spider3;
var sword,key1,key2,key3;
var box1,box2;
var wall1;









function preload(){
  snake1Image = loadImage("images/snake.png");
  spider1Image = loadImage("images/spider.gif");
  
  
  
  
}






function setup() {
  createCanvas(1200,600);
  var wall1  = createSprite(400,367,600,5);
  var wall2  = createSprite(363,355,5,25);
  var wall3  = createSprite(210,340,300,5);
  var wall4  = createSprite(70,293,5,100);
  var wall5  = createSprite(5,246,60,5);
  var wall6  = createSprite(6,145,5,200);
  var wall7  = createSprite(500,47,1000,5);
  var wall8  = createSprite(200,90,300,5);
  var wall9  = createSprite(57,128,5,80);
  var wall10  = createSprite(77,165,60,5);
  var wall11  = createSprite(104,140,5,50);
  var wall12  = createSprite(150,117,100,5);
  var wall13  = createSprite(205,162,5,100);
  var wall14  = createSprite(146,207,100,5);
  var wall15  = createSprite(148,165,5,30);
  var wall16  = createSprite(204,252,5,100);
  var wall17  = createSprite(149,296,100,5);
  var wall18  = createSprite(110,273,5,45);
  var wall19  = createSprite(129,249,50,5);
  var wall20  = createSprite(249,119,100,5);
  var wall21  = createSprite(304,162,5,100);
  var wall22  = createSprite(270,210,50,5);
  var wall23  = createSprite(252,188,5,40);
  var wall24  = createSprite(350,304,200,5);
  var wall25  = createSprite(305,278,5,50);
  var wall26  = createSprite(316,249,40,5);
  var wall27  = createSprite(387,249,30,5);
  var wall28  = createSprite(355,150,5,100);
  var wall29  = createSprite(400,279,5,54);
  var wall30  = createSprite(400,155,5,200);
  
  var snake1 = createSprite(25,150,10,10);
  snake1.scale=0.2;
  snake1.addImage("snake1",snake1Image);
  var snake2= createSprite(369,156,10,10);
  
  var spider1=createSprite(80,233,10,10);
  spider1.scale=0.2;
  spider1.addImage("spider1",spider1Image);
  var spider2=createSprite(228,240,10,10);
  var spider3=createSprite(190,313,10,10);
  
  var sword= createSprite(342,277,10,10);
  
  var key1 =createSprite(266,168,10,10);
  var key2 =createSprite(164,164,10,10);
  var key3 =createSprite(144,274,10,10);
  
  var box=createSprite(362,79,10,10);
}

function draw() {
  background(0);  
  drawSprites();
}