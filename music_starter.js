
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(RGB,255);
  background(255);
  strokeWeight(5);
  stroke(drum,80,80);

  var drumMap =parseInt(map(drum,0,100,30,90));
  var lengthOfLine =300;
  var lineStart = 200;
  var lineEnd = lineStart + lengthOfLine;

  fill (102,102,102)
  line(150,300,lineStart,400);
  line(550,300,lineEnd,400);
  beginShape();
  vertex(150,200)
  vertex(150,150)
  quadraticVertex(350, 50, 550, 150);
  vertex(550,200);
  endShape();

  beginShape();
  vertex(200,500);
  vertex(200,550);
  quadraticVertex(350, 650, 500, 550);
  vertex(500,500);
  endShape();

  
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
    line(200+(i*60),410,200+(i*60),500);
  }
  line(lineStart,500,lineEnd,500);
  line(lineStart,400,lineEnd,400);
  line(lineStart,410,lineEnd,410);
  line(lineStart,390,lineEnd,390);
  ellipse(lineStart,400,30,30);
  ellipse(lineEnd,400,30,30);


let eyesize = map(bass,0,100,40,80);
  stroke(bass,80,80);
  strokeWeight(3);
  fill(5,217,232)
  for (let i = 0; i < 2; i++) {
      ellipse(170+(i*88),255+(i*15),eyesize,eyesize);
   }
  ellipse(350,275,eyesize,eyesize);
  ellipse(442,270,eyesize,eyesize);
  ellipse(530,255,eyesize,eyesize);
  

  
}