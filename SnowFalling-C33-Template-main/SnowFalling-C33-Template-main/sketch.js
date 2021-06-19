var snowfall
var bg
 var bgImg
 var snowfallImg

 function preload() {
snowfallImg = loadImage("sprite/snow4.webp");
bgImg = loadImage("sprite/snow1.jpg");
 }
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snowfall = createSprite()
}

function draw() {
  background(255,255,255);  
  drawSprites();
    Engine.update(engine);
    for (var i = 0; i < snowfall.length; i++) {
     
      snowfall[i].display();
      
    }
    if(frameCount%60===0){
      snowfall.push(new snowfall(random(width/2-30, width/2+30), 10,10));
      
    }
  
}