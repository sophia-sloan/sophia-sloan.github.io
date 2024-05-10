let amogus = []; //array of amogi

let type = []; // array for index of amogi for each person in space
let x = []; //array of x values for each person in space
let y = []; // array of y values for each person in space
let rotuntion = [];

let image_size = 80;

function preload() {
    stars = loadImage('https://t4.ftcdn.net/jpg/02/43/75/73/360_F_243757367_gBpS6R5c8DB7pL5gw9gi9KXlzFfbdZOA.jpg');
    earth = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png');
    moon = loadImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/31955c23-347f-4a63-a346-730268693c3b/dc6vkzm-46373709-9365-48f5-a6e1-24044d6ae193.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMxOTU1YzIzLTM0N2YtNGE2My1hMzQ2LTczMDI2ODY5M2MzYlwvZGM2dmt6bS00NjM3MzcwOS05MzY1LTQ4ZjUtYTZlMS0yNDA0NGQ2YWUxOTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zodSbYNS-ydwLVbf-43CRNspP5UlAumeV47DpWhEqPs');

    amogus.push(loadImage('https://i.imgur.com/virlHXy.png'));
    amogus.push(loadImage('https://i.imgur.com/AzpjZUZ.png'));
    amogus.push(loadImage('https://i.imgur.com/JnvF8bC.png'));
    amogus.push(loadImage('https://i.imgur.com/csI2Jfv.png'));
    amogus.push(loadImage('https://i.imgur.com/ULdWCmJ.png'));
    amogus.push(loadImage('https://i.imgur.com/RaL70hU.png'));
    amogus.push(loadImage('https://i.imgur.com/gq3ghVR.png'));
    amogus.push(loadImage('https://i.imgur.com/gwLvgIo.png'));
    amogus.push(loadImage('https://i.imgur.com/A1aQxCA.png'));
    amogus.push(loadImage('https://i.imgur.com/tmtHS9S.png'));
    amogus.push(loadImage('https://i.imgur.com/QaHQ5qa.png'));
    amogus.push(loadImage('https://i.imgur.com/03fpTo1.png'));

}

function setup() {
    var myCanvas = createCanvas(700, 500);
    myCanvas.parent("main");
    background(255, 255, 255);

    stars.resize(700, 500);
    earth.resize(400, 400);
    moon.resize(100, 100);

    angleMode(DEGREES);

    // resize amogi and set coordinate
    for (let i = 0; i < amogus.length; i++) {
        amogus[i].resize(image_size, image_size);
    }
    
    loadJSONFile();
  }

let loadedJSON = null; 

function loadJSONFile() { 
    loadedJSON = loadJSON('https://raw.githubusercontent.com/unnamedActant/Example_JSON/main/astros.json', parseJSON); 
}

function parseJSON() {
    for (let i = 0; i < loadedJSON.number; i++) {
        console.log(loadedJSON.people[i].name);
        x.push(Math.floor(Math.random() * 500) + 50);
        y.push(Math.floor(Math.random() * 300) + 50);
        type.push(Math.floor(Math.random() * amogus.length));
        console.log(x[i]);
        console.log(y[i]);
        rotuntion.push(0);
    }
    
}

let speed = 1;
let angle = 0;

function draw() {
    image(stars, 0, 0);    
    image(earth, -150, 250);
    push();
    translate (-150 + 200, 250 + 200);
    angle -= 0.05;
    rotate(angle);
    image(moon, 500, 0);
    pop();

    for (let i = 0; i < loadedJSON.number; i++) {
        x[i] += random(-speed, speed);
        y[i] += random(-speed, speed);
        if (i % 2 == 0) {
            rotuntion[i] += random(0, speed);
        } else {
            rotuntion[i] -= random(0, speed);
        }
        
        push();
        translate(x[i], y[i]);
        rotate(rotuntion[i]);
        image(amogus[type[i]], 0 - image_size/2, 0 - image_size/2);
          
        pop();

        // Display a message based on whether the mouse is over the image or not
        if (mouseX > x[i] - image_size/2 && mouseX < x[i] + image_size/2 && mouseY > y[i] - image_size/2 && mouseY < y[i] + image_size/2) {
            displayInfo(i);
        }
    }
  }

function displayInfo(i) {
    textSize(22);
    textFont('Monospace');
    fill(163, 163, 163);

    console.log("kys");

    let box_size = 300;
    let box_x = mouseX;
    let box_y = mouseY;
    // check if box will go out of bounds
    if (mouseX > (700/2)) {
        box_x = mouseX - box_size;
    }
    if (mouseY > (500/2)) {
        box_y = mouseY - box_size/4;
    }

    rect(box_x, box_y, box_size, box_size/4, 20);
    fill(0);
    text(loadedJSON.people[i].name, box_x + 22 / 2, box_y + 22 * 1.5);
    text(loadedJSON.people[i].craft, box_x + 22 / 2, box_y + 22 * 2.5);
}