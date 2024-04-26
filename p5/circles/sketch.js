function setup() {
  createCanvas(600, 600);
  background(37, 37, 45);
  
}

function draw() {
  noStroke();
  
  // top left yellow
  fill(color(244, 219, 75));
  circle(50, 50, 20);
  
  // top left pink
  fill(color(244, 142, 207));
  circle(70, 110, 40);
  
  //top right red
  fill(color(235, 63, 87));
  circle(525, 80, 20);
  
  //top right orange
  stroke(255, 242, 161);
  fill(color(252, 168, 34));
  circle(485, 130, 25);
  
  noStroke();
  
  // top right yellow
  fill(color(254, 230, 134));
  circle(420, 95, 50);

  // light colors background
  fill(color(190, 244, 228));
  circle(260, 230, 300);  
  fill(color(190, 244, 228));
  circle(200, 325, 120);  
  fill(color(190, 244, 228));
  circle(235, 370, 75);  
  fill(color(247, 246, 226));
  circle(255, 227, 284);
  
  drawMiddle();
  drawBottomRight();
  
}

function drawMiddle() {
  fill(169, 178, 217);
  circle(252, 362, 62);  
  
  fill(color(41, 100, 98));
  circle(420, 188, 94);
  // big blue
  fill(color(18, 60, 180));
  circle(254, 226, 260);
  
  //thing
  let c = color(157, 221, 233);
  c.setAlpha(128);
  
  // transparent light blue
  fill(c);
  circle(420, 188, 94);
  
  //subspace in lightblue
  fill(color(141, 221, 241));
  circle(420, 187, 30);  
  fill(color(37, 31, 41));
  circle(420, 187, 26);  
  
  // black
  fill(color(20, 20, 20));
  circle(222, 199, 178);
  
  //pink transparent
  c = color(244, 142, 207);
  c.setAlpha(128);
  fill(c);
  circle(313, 134, 68);
  
  // little yellow outline
  fill(color(233, 241, 104));
  circle(137, 285, 10);
  fill(color(2, 3, 5));
  circle(137, 285, 8);  
  
  // blue bottom right
  fill(color(82, 186, 223));
  circle(337, 375, 68);
  
  // black bottom right
  fill(color(249, 114, 183));
  circle(366, 327, 32);  
  
  // pink bottom right
  fill(color(22, 20, 24));
  circle(351, 334, 9);
  
  //small bottom lavender
  fill(color(227, 174, 226));
  circle(202, 341, 7);
  
  //bottom left redblack
  fill(color(21, 0, 6));
  circle(180, 343, 11);  
  fill(color(208, 86, 123));
  circle(180, 343, 7);
  
  //bottom left gobstopper
  fill(color(98, 164, 176));
  circle(82, 339, 69);    
  fill(color(7, 1, 1));
  circle(82, 339, 64);   
  fill(color(227, 174, 226));
  circle(82, 339, 60); 
  fill(color(7, 1, 1));
  circle(89, 326, 22);
  
  // transparent stuff
  
  // green
  c = color(166, 229, 172);
  c.setAlpha(185);
  fill(c);
  circle(310, 250, 52);
  
  //blue mid
  c = color(129, 214, 235);
  c.setAlpha(130);
  fill(c);
  circle(270, 268, 24);
  
  // yellow left
  c = color(234, 209, 96);
  c.setAlpha(230);
  fill(c);
  circle(297, 307, 54);  
  
  // yellow darker
  c = color(162, 108, 0);
  c.setAlpha(150);
  fill(c);
  circle(338, 308, 82);  
  
  // lavender bottom
  c = color(169, 178, 217);
  c.setAlpha(150);
  fill(c);
  circle(252, 362, 62);  
  
  // black dot south
  fill(color(21, 0, 6));
  circle(236, 400, 6);
  
  // cluster bottom left
  // yellow
  fill(color(214, 168, 46));
  circle(149, 340, 48);
  // red
  fill(color(218, 38, 67));
  circle(142, 402, 42);
  
  // yellow thiccums
  c = color(247, 232, 79);
  c.setAlpha(220);
  fill(c);
  circle(116, 396, 43);  
  
  // tomato
  c = color(196, 91, 61);
  c.setAlpha(200);
  fill(c);
  circle(175, 370, 46);  
  
  // tomato thin
  c = color(138, 93, 61);
  c.setAlpha(130);
  fill(c);
  circle(165, 405, 46);  
}

function drawBottomRight() {
  // relative top
  fill(color(199, 246, 255));
  circle(528, 307, 19);
  fill(color(15, 71, 226));
  circle(528, 307, 15);
  
  // big middle
  fill(color(199, 201, 226));
  circle(494, 422, 105);
  
  // red
  fill(color(209, 25, 37));
  circle(492, 382, 12);  
  
  // little black
  fill(color(18, 33, 28));
  circle(506, 382, 7);
  
  // teal midsized
  fill(color(242, 232, 197));
  circle(461, 412, 32); 
  fill(color(136, 211, 216));
  circle(460, 412, 27);
  
  //yellow bottom right
  fill(color(244, 222, 14));
  circle(469, 493, 14);
  
  //red
  fill(color(211, 50, 83));
  circle(455, 527, 20);
  
  //blue
  fill(color(54, 145, 192));
  circle(518, 547, 17);
  
  //yellow left
  fill(color(244, 222, 14));
  circle(296, 457, 23);  
  
  // black yellow left
  fill(color(244, 222, 14));
  circle(75, 510, 15);
  fill(color(17, 21, 20));
  circle(75, 510, 13);
  
  //blue left
  fill(color(38, 151, 211));
  circle(114, 491, 30);  
  
  //pink left
  fill(color(255, 149, 230));
  circle(83, 465, 15);  
  
  //transparent
  let c = color(210, 171, 78);
  c.setAlpha(150);
  fill(c);
  circle(547, 425, 15);     
  
  c = color(195, 167, 127);
  c.setAlpha(150);
  fill(c);
  circle(430, 403, 34);     
}