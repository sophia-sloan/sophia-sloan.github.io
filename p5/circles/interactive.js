function setup() {
  createCanvas(600, 600);
  background(37, 37, 45);
  fill(color(18,60,180));
  circle(252,226,260);
}

function draw() {
  drawMiddle();
  drawStuff();
  drawBottomRight();
  
  isMousedOver = false;
}

function drawStuff() {
  noStroke();
  
  // top left yellow

  drawCircle(50, 50, 10, color(244, 219, 75), false);
  // top left pink
  drawCircle(70,110, 20, color(244, 142, 207), false);
  
  //top right red
  drawCircle(525, 80, 10, color(235, 63, 87), false);
  
  //top right orange
  stroke(255, 242, 161);
  drawCircle(485, 130, 12.5, color(252, 168, 34), false);
  noStroke();
  
  // top right yellow

  drawCircle(420, 95, 25, color(254, 230, 134), false);

  // light colors background

  drawCircle(260, 230, 150, color(190, 244, 228), true);

  drawCircle(200,325,60,color(190, 244, 228), true);

  drawCircle(235,370,37.5,color(190, 244, 228), true);

  drawCircle(255,227,142,color(247, 246, 226), true);
}

function drawMiddle() {
  //black

  // yellow left
  let c = color(234, 209, 96);
  c.setAlpha(230);
  drawCircle(297,307,27,c, true);  
  //pink transparent
  c = color(244, 142, 207);
  c.setAlpha(128);
  
  // transparent stuff
  
  // green
  c = color(166, 229, 172);
  c.setAlpha(185);
  drawCircle(310,250,26,c,true);
  
  //blue mid
  c = color(129, 214, 235);
  c.setAlpha(130);
  drawCircle(270,268,12,c,true);  
  
  drawCircle(313,134,34,c,true);
  
  drawCircle(222,199,89,color(20,20,20), true);
  
  drawCircle(252,362,31,color(169, 178, 217), true);

  drawCircle(252,226,130,color(18, 60, 180), true);
  
  //thing
  c = color(157, 221, 233);
  c.setAlpha(128);
  drawCircle(420,188,47,c, true);
  
  //subspace in lightblue

  drawCircle(420,187,15,color(141, 221, 241), false);

  drawCircle(420,187,13,color(37, 31, 41), false);
  
  // little yellow outline
 
  drawCircle(137,285,4,color(2,3,5),true);
  drawCircle(137,285,5,color(233,241,104), true);
  
  // blue bottom right

  drawCircle(337,375,34,color(82,186,223), true);
  
  // black bottom right

  drawCircle(366,327,16,color(249,114,183), true);
  
  // pink bottom right

  drawCircle(351,334,4.5,color(22,20,24), true);
  //small bottom lavender
  drawCircle(202,341,3.5,color(227,174,226), true);
  
  
  //bottom left redblack
  drawCircle(180,343,3.5,color(208,86,123),true);
  drawCircle(180,343,6.5,color(21,0,6), true);
  
  //bottom left gobstopper

  
  drawCircle(89,326,11,color(7,1,1), true);
  drawCircle(82,339,30,color(227,174,226), true);
  drawCircle(82,339,32,color(7,1,1), true);
  drawCircle(82,339,34.5,color(98,164,176), true);

  
  // yellow darker
  c = color(162, 108, 0);
  c.setAlpha(150);

  drawCircle(338,308,41,c,true);
  
  // lavender bottom
  c = color(169, 178, 217);
  c.setAlpha(150);

  drawCircle(252,362,31,c,true);
  
  // black dot south
  drawCircle(236,400,3,color(21,0,6), true);
  
  // cluster bottom left
  // yellow
  drawCircle(149,340,24,color(214,168,46), true);
  // red
  drawCircle(142,402,21,color(218,38,67),true);
  // yellow thiccums
  c = color(247, 232, 79);
  c.setAlpha(220);
  drawCircle(116,396,21.5,c,true);
  // tomato
  c = color(196, 91, 61);
  c.setAlpha(200);
  drawCircle(175,370,23,c,true);
  // tomato thin
  c = color(138, 93, 61);
  c.setAlpha(130);

  drawCircle(165,405,23,c,true);
}

function drawBottomRight() {
  // relative top
  drawCircle(538,307,7.5,color(15,71,226),true);
  drawCircle(538,307,9.5,color(199,246,255), true);
  
  // red

  drawCircle(492,382,6,color(209,25,37), true);
  
  // little black
  drawCircle(506,382,3.5,color(18,33,28), true);
  
  // teal midsized
  drawCircle(460,412,13.5,color(136,211,216), true);
  drawCircle(461,412,16,color(242,232,197), true);

  // big middle
  drawCircle(494,422,52.5,color(199,201,226), true); 
  
  //yellow bottom right
  drawCircle(469,493,7,color(244,222,14), false);
  
  //red
  drawCircle(455,527,10,color(211,50,83), false);
  
  //blue
  drawCircle(518,547,8.5,color(54,145,192), false);
  
  drawCircle(296,457,11.5,color(244,222,14), false);
  
  // black yellow left
  drawCircle(75,510,7.5,color(244,222,14), false);
  
  drawCircle(75,510,6.5,color(17,21,20), false);
  
  //blue left
  drawCircle(114,491,15,color(38,151,211), false);
  //pink left
  drawCircle(83,465,7.5,color(255,149,230), false);
  
  //transparent
  let c = color(210, 171, 78);
  c.setAlpha(150);
 
  drawCircle(547,425,7.5,c,true);
  
  drawCircle(430,403,17,c,true);
}
let isMousedOver = false;

function drawCircle(x, y, radius, c, is_single) {
  fill(c);
  if ((is_single == true && isMousedOver == false) || is_single == false) {
    if (dist(x, y, mouseX, mouseY) < radius) {
      circle(x, y, radius*2);
      isMousedOver = true;
    }
  }
}