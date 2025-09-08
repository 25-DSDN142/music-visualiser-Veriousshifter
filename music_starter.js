  let last_words = "";
let last_words_opacity = 0;

// --- Add these globals ---
let stars = [];
const numStars = 300;
let firstRun = true;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // --- Initialize stars on first run ---
if (firstRun) {
for (let i = 0; i < numStars; i++) {
stars.push({
x: random(-width/2, width/2),
y: random(-height/2, height/2),
z: random(width)
});
}
firstRun = false;
}
  
  colorMode(RGB,255);
  background(0);
  strokeWeight(5);
  stroke(drum,80,80);

  let myPink = color(255,111,105);
  let myYellow = color(255,204,92);
  let myGreen = color(206,208,125);
  let myLightblue = color(150,206,180);
  let myDarkblue = color(14,154,167);

  var drumMap =parseInt(map(drum,0,100,30,90));
  var lengthOfLine =300;
  var lineStart = 200;
  var lineEnd = lineStart + lengthOfLine;


background(0);

push();
translate(width/2, height/2); // Center origin
// Map bass (0-100) to lerp amount (0-1)
let lerpAmt = map(bass, 0, 100, 0, 1);
for (let star of stars) {
// Move star forward
star.z -= 10;
if (star.z < 1) {
// Reset star to far away
star.x = random(-width/2, width/2);
star.y = random(-height/2, height/2);
star.z = width;
}
// Project 3D to 2D
let sx = star.x * (width / star.z);
let sy = star.y * (width / star.z);
let r = map(star.z, 0, width, 8, 0.5); // Size based on depth
noStroke();
fill(255);
ellipse(sx, sy, r, r);
}
pop();
// --- End starfield code ---
let seconds = counter / 60; 
console.log(seconds);
   


noStroke();
fill(255)
ellipse(660,80,45,45)
ellipse(150,630,35,45)
ellipse(80,580,25,25)
ellipse(300,20,25,25)
ellipse(90,110,30,30)
ellipse(620,600,40,40)

let starsize = map(bass,0,60,60,50);
let smallstarSize = map(bass,0,80,30,25);
fill(0)
ellipse(635,55,starsize,starsize)
ellipse(685,55,starsize,starsize)
ellipse(635,105,starsize,starsize)
ellipse(685,105,starsize,starsize)

ellipse(125,605,starsize,starsize)
ellipse(175,605,starsize,starsize)
ellipse(125,655,starsize,starsize)
ellipse(175,655,starsize,starsize)

ellipse(70,570,smallstarSize,smallstarSize)
ellipse(90,570,smallstarSize,smallstarSize)
ellipse(70,590,smallstarSize,smallstarSize)
ellipse(90,590,smallstarSize,smallstarSize)

ellipse(288,8,smallstarSize,smallstarSize)
ellipse(312,8,smallstarSize,smallstarSize)
ellipse(288,32,smallstarSize,smallstarSize)
ellipse(312,32,smallstarSize,smallstarSize)

ellipse(78,98,smallstarSize,smallstarSize)
ellipse(102,98,smallstarSize,smallstarSize)
ellipse(78,122,smallstarSize,smallstarSize)
ellipse(102,122,smallstarSize,smallstarSize)

ellipse(598,578,starsize,starsize)
ellipse(642,578,starsize,starsize)
ellipse(598,622,starsize,starsize)
ellipse(642,620,starsize,starsize)


let backSphereSize = map(other,0,100,400,700);
  fill(45,226,230,200);
  noStroke();
  ellipse(350,350,backSphereSize,backSphereSize);

  let midSphereSize = map(vocal,0,100,300,650);
  fill(5,217,232,200);
  noStroke();
  ellipse(350,350,midSphereSize,midSphereSize);

  
strokeWeight(5);
stroke(drum,80,80);

  fill (102,102,102)
  beginShape();
  vertex(lineStart,400)
  vertex(150,300)
  vertex(150,200)
  vertex(150,150)
  quadraticVertex(350, 50, 550, 150);
  vertex(550,300);
  vertex(lineEnd,400)
  endShape();

  beginShape();
  vertex(200,500);
  vertex(200,550);
  quadraticVertex(350, 650, 500, 550);
  vertex(500,500);
  vertex(200,500);
  endShape();

  strokeWeight(2);
  fill(101,90,90)
  beginShape();
  vertex(527,350);
  quadraticVertex(500,350,475,360)
  vertex(524,355)
  endShape();

  strokeWeight(5);
  fill(5,217,232)
  beginShape();
  vertex(150,300);
  quadraticVertex(350, 350, 550, 300);
  vertex(570,250);
  vertex(550,200);
  quadraticVertex(350, 250, 150, 200);
  vertex(130,250);
  vertex(150,300);
  endShape();

  
  fill(drum,80,80);
  for (let i = 0; i < 6; i++) {
    //if statement that picks the colour based on i.
    line(200+(i*60),400,200+(i*60),500);
  }

  line(lineStart,400,lineEnd,400);
  ellipse(lineStart,400,30,30);
  ellipse(lineEnd,400,30,30);

  fill(drum,80,80);
for (let i = 0; i < 5; i++) {
    //if statement that picks the colour based on i.
    rect (215+(i*60),500-drumMap,30,drumMap);
  }


fill(myYellow)
noStroke();
beginShape();
vertex(225,130)
vertex(260,210)
vertex(295,130)
vertex(280,130)
vertex(260,180)
vertex(240,130)
endShape();

ellipse(328,186,50,50)

fill(102,102,102)
noStroke();
beginShape();
vertex(314,182)
quadraticVertex(316,170,328,170);
quadraticVertex(340,170,342,182);
endShape();
beginShape();
vertex(314,190)
quadraticVertex(316,202,328,202);
quadraticVertex(340,202,342,190);
endShape();
beginShape();
vertex(342,190)
vertex(340,196)
vertex(356,204)
vertex(358,190)
endShape();

fill(myYellow)
beginShape();
vertex(374,160)
vertex(374,210)
vertex(384,210)
vertex(384,180)
quadraticVertex(394,165,414,175);
vertex(418,165)
quadraticVertex(394,155,384,165);
vertex(384,160)
endShape();

beginShape();
vertex(444,130)
vertex(430,140)
vertex(434,150)
vertex(444,144)
vertex(444,200)
vertex(434,200)
vertex(434,210)
vertex(464,210)
vertex(464,200)
vertex(454,200)
vertex(454,130)
endShape();


let eyesize = map(bass,0,100,50,75);
let eyeColour;
let eyeFill;
if(bass<=15){
  eyeColour = map(bass, 0, 15, 0, 1);
  eyeFill = lerpColor(myLightblue,myDarkblue,eyeColour);
  
}
else if(bass <=30){
  eyeColour = map(bass, 15, 30, 0, 1);
  eyeFill = lerpColor(myDarkblue,myGreen,eyeColour);
}
else if(bass <=45){
  eyeColour = map(bass, 30, 45, 0, 1);
  eyeFill = lerpColor(myGreen,myYellow,eyeColour);
  
}
else if(bass <=60){
  eyeColour = map(bass, 45, 60, 0, 1);
  eyeFill = lerpColor(myYellow,myPink,eyeColour);
  
}
else{
  eyeColour = map(bass, 60, 75, 0, 1);
  eyeFill = lerpColor(myPink,myLightblue,eyeColour);
  
}
stroke(eyeFill);
  strokeWeight(1);
  fill(eyeFill)
  ellipse(170,255,eyesize,eyesize);
  ellipse(258,270,eyesize,eyesize);
  ellipse(350,275,eyesize,eyesize);
  ellipse(442,270,eyesize,eyesize);
  ellipse(530,255,eyesize,eyesize);
  
stroke(255,255,255,160);
fill(24,229,214,180)
beginShape();
vertex(300,240)
vertex(330,260)
vertex(390,280)
vertex(345,310)
vertex(340,320.5)
vertex(342,318)
vertex(346,321)
vertex(343,317)
vertex(346,311)
vertex(380,289)
vertex(375,305)
vertex(369,304)
vertex(367,300)
vertex(368,303)
vertex(365,301)
vertex(368,305)
vertex(376,306)
vertex(374,321)
vertex(377,305)
vertex(382,288)
vertex(390,282)
vertex(394,290)
vertex(395,320)
vertex(395,290)
vertex(393,284)
vertex(396,286)
vertex(400,280)
vertex(405,285)
vertex(412,290)
vertex(402,280)
vertex(420,270)
vertex(428,269)
vertex(420,269)
vertex(426,240)
vertex(419,270)
vertex(402,278)
vertex(396,272)
vertex(400,230)
vertex(405,226)
vertex(400,229)
vertex(395,274)
vertex(392,275)
vertex(390,250)
vertex(391,275)
vertex(390,278)
vertex(328,258)
vertex(300,240)
endShape();



}