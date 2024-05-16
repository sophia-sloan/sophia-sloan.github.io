var startx = 254;
var starty = 226;
var scalar = 300;  // set the radius of circle
var angle = 0;

function setup() {
  createCanvas(600, 600);
  
  
  angleMode(DEGREES);
  
}

function draw() {
  background(37, 37, 45);
  noStroke();
  
  translate(254,266);
  rotate(angle);
  
  drawStuff();
  drawMiddle();
  drawBottomRight();
  angle = angle + 0.5;
}

function drawStuff() {
  rotate(angle*2);
  fill(color(244, 219, 75));
  circle(50 - startx, 50 - starty, 20);

  
  // top left pink
  fill(color(244, 142, 207));
  circle(70 - startx, 110 - starty, 40);
  
  //top right red
  fill(color(235, 63, 87));
  circle(525 - startx, 80 - starty, 20);
  rotate(angle);
  stroke(255, 242, 161);
  fill(color(252, 168, 34));
  circle(485 - startx, 130 - starty, 25);
  rotate(-angle*2);
  noStroke();
  fill(color(254, 230, 134));
  circle(420 - startx, 95 - starty, 50);
  
  fill(color(254, 230, 134));
  circle(420 - startx, 95 - starty, 50);  
  rotate(-angle);
  fill(color(190, 244, 228));
  circle(260 - startx, 230 - starty, 300);  
  fill(color(190, 244, 228));
  circle(200 - startx, 325 - starty, 120);  
  fill(color(190, 244, 228));
  circle(235 - startx, 370 - starty, 75);  
  fill(color(247, 246, 226));
  circle(255 - startx, 227 - starty, 284);
}

function drawMiddle() {
  rotate(angle*0.5);
  fill(169, 178, 217);
  circle(252 - startx, 362 - starty, 62);    

  
  fill(color(41, 100, 98));
  circle(420 - startx, 188 - starty, 94);
  rotate(-angle*0.5);
  rotate(angle*2);

  // big blue
  fill(color(18, 60, 180));
  circle(254 - startx, 226 - starty, 260);
  
  //thing
  
  
  let c = color(157, 221, 233);
  c.setAlpha(128);
  
  // transparent light blue
  fill(c);
  circle(420 - startx, 188 - starty, 94);
  rotate(-angle*2);
  
  //subspace in lightblue
  fill(color(141, 221, 241));
  circle(420 - startx, 187 - starty, 30);  
  fill(color(37, 31, 41));
  circle(420 - startx, 187 - starty, 26);  
  
  // black
  rotate(angle*2);
  fill(color(20, 20, 20));
  circle(222 - startx, 199 - starty, 178);
  rotate(-angle*4);
  //pink transparent
  c = color(244, 142, 207);
  c.setAlpha(128);
  fill(c);
  circle(313 - startx, 134 - starty, 68);
  
  // little yellow outline
  fill(color(233, 241, 104));
  circle(137 - startx, 285 - starty, 10);
  fill(color(2, 3, 5));
  circle(137 - startx, 285 - starty, 8);  
  
  // blue bottom right
  fill(color(82, 186, 223));
  circle(337 - startx, 375 - starty, 68);
  
  // black bottom right
  fill(color(249, 114, 183));
  circle(366 - startx, 327 - starty, 32);  
  
  // pink bottom right
  fill(color(22, 20, 24));
  circle(351 - startx, 334 - starty, 9);
  
  //small bottom lavender
  fill(color(227, 174, 226));
  circle(202 - startx, 341 - starty, 7);
  
  //bottom left redblack
  fill(color(21, 0, 6));
  circle(180 - startx, 343 - starty, 11);  
  fill(color(208, 86, 123));
  circle(180 - startx, 343 - starty, 7);
  rotate(angle*2);
  //bottom left gobstopper
  rotate(angle*1.5)
  fill(color(98, 164, 176));
  circle(82 - startx, 339 - starty, 69);    
  fill(color(7, 1, 1));
  circle(82, 339, 64);   
  fill(color(227 - startx, 174 - starty, 226));
  circle(82, 339, 60); 
  fill(color(7, 1, 1));
  circle(89 - startx, 326 - starty, 22);
  rotate(-angle*1.5)
  // transparent stuff
  
  rotate(angle*3);
  // green
  c = color(166, 229, 172);
  c.setAlpha(185);
  fill(c);
  circle(310 - startx, 250 - starty, 52);
  rotate(-angle*2);
  //blue mid
  c = color(129, 214, 235);
  c.setAlpha(130);
  fill(c);
  circle(270 - startx, 268 - starty, 24);
  rotate(-angle);
  // yellow left
  c = color(234, 209, 96);
  c.setAlpha(230);
  fill(c);
  circle(297 - startx, 307 - starty, 54);  
  
  // yellow darker
  c = color(162, 108, 0);
  c.setAlpha(150);
  fill(c);
  circle(338 - startx, 308 - starty, 82);  
  rotate(-angle);
  rotate(angle*0.5)
  // lavender bottom
  c = color(169, 178, 217);
  c.setAlpha(150);
  fill(c);
  circle(252 - startx, 362 - starty, 62);  
  
  // black dot south
  fill(color(21, 0, 6));
  circle(236 - startx, 400 - starty, 6);
  rotate(-angle*0.5)
  // cluster bottom left
  
  // yellow
  rotate(angle);
  fill(color(214, 168, 46));
  circle(149 - startx, 340 - starty, 48);
  // red
  rotate(angle*0.25);
  fill(color(218, 38, 67));
  circle(142 - startx, 402 - starty, 42);
  
  // yellow thiccums
  rotate(angle*0.35);
  c = color(247, 232, 79);
  c.setAlpha(220);
  fill(c);
  circle(116 - startx, 396 - starty, 43);  
  
  // tomato
  rotate(-angle*0.25);
  c = color(196, 91, 61);
  c.setAlpha(200);
  fill(c);
  circle(175 - startx, 370 - starty, 46);  
  
  // tomato thin
  rotate(-angle*0.25);
  c = color(138, 93, 61);
  c.setAlpha(130);
  fill(c);
  circle(165 - startx, 405 - starty, 46);
  rotate(-angle);
}

function drawBottomRight() {
  // relative top
  rotate(angle*2);
  fill(color(199, 246, 255));
  circle(528 - startx, 307 - starty, 19);
  fill(color(15, 71, 226));
  circle(528 - startx, 307 - starty, 15);
  rotate(-angle*2);
  // big middle
  fill(color(199, 201, 226));
  circle(494 - startx, 422 - starty, 105);
  
  // red
  rotate(angle*1.5);
  fill(color(209, 25, 37));
  circle(492 - startx, 382 - starty, 12);  
  
  // little black
  fill(color(18, 33, 28));
  circle(506 - startx, 382 - starty, 7);
  
  // teal midsized
  fill(color(242, 232, 197));
  circle(461 - startx, 412 - starty, 32); 
  fill(color(136, 211, 216));
  circle(460 - startx, 412 - starty, 27);
  
  //yellow bottom right
  fill(color(244, 222, 14));
  circle(469 - startx, 493 - starty, 14);
  
  //red
  fill(color(211, 50, 83));
  circle(455 - startx, 527 - starty, 20);
  
  //blue
  fill(color(54, 145, 192));
  circle(518 - startx, 547 - starty, 17);
  
  //yellow left
  fill(color(244, 222, 14));
  circle(296 - startx, 457 - starty, 23);  
  rotate(angle)
  // black yellow left
  fill(color(244, 222, 14));
  circle(75 - startx, 510 - starty, 15);
  fill(color(17, 21, 20));
  circle(75 - startx, 510 - starty, 13);
  
  //blue left
  fill(color(38, 151, 211));
  circle(114 - startx, 491 - starty, 30);  
  
  //pink left
  fill(color(255, 149, 230));
  circle(83 - startx, 465 - starty, 15);  
  
  //transparent
  let c = color(210, 171, 78);
  c.setAlpha(150);
  fill(c);
  circle(547 - startx, 425 - starty, 15);     
  
  c = color(195, 167, 127);
  c.setAlpha(150);
  fill(c);
  circle(430 - startx, 403 - starty, 34);   
  rotate(-angle*2.5);
}