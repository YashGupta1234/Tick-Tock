var hr, mn, sc;
var scAngle;
var mnAngle;
var scAngle;
var clock


function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
}

function draw() {
  background("black");  
  translate(width/2, height/2);
  rotate (-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  push ();
  rotate(scAngle);
  strokeWeight(7)
  line(0,0,100,0);
  pop();

  mnAngle = map(mn, 0, 60, 0, 360); //convert 0-60 (mins) to 0-360 (degrees) 
  //draw the minutes hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,80,0);
  pop();


  hrAngle = map(hr %12, 0, 12, 0, 360); 
  //draw the hour hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  //draw the outermost arc
  stroke(255,0,0);
  strokeWeight(7);
  noFill();
  arc(0,0,280,280,0,scAngle);

  //draw the 2nd arc
  stroke(0,255,0);
  strokeWeight(7);
  noFill();
  arc(0,0,260,265,0,mnAngle);

  //draw the innermost arc
  stroke(0,0,255);
  strokeWeight(7);
  noFill();
  arc(0,0,250,250,0,hrAngle);

  //draw a pin at the center for hands
  noStroke();
  fill("white");
  ellipse(0,0,8,8);

  if(hour() === 12){
    alert("its 12:00:00");
  }
  drawSprites();
} 
