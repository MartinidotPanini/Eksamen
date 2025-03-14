let maxS = 4; // Maksimal hastighed
let fri = 0.9; // Friktionsfaktor
let pos1, vel1, acc1; // Spiller 1 - WASD-taster
let pos2, vel2, acc2; // Spiller 2 - Arrow-taster

let blobdata = []; // Opbevarer blob data

let i;
let u;

function setup() {
  createCanvas(600, 600); // Canvas størrelse
  background(240); // Baggrundsfarve

 
  pos1 = createVector(width / 20, height / 20); // Vektor der bestemmer position for spiller 1
  vel1 = createVector(0, 0); // Vektor der bestemmer hastighed for spiller 1
  acc1 = createVector(0, 0); // Vektor der bestemmer acceleration for spiller 1


  pos2 = createVector(width - 30 , height - 30); // Vektor der bestemmer position for spiller 1
  vel2 = createVector(0, 0); // Vektor der bestemmer hastighed for spiller 1
  acc2 = createVector(0, 0); // Vektor der bestemmer acceleration for spiller 1


  for (let i = 0; i < 60; i++) {
    let newblob = {
      x: random(0,600),
      y: random(0,600),
      r: 15,
    };
    blobdata.push(newblob);
  }
}


function draw() {
  background(240); // Baggrundsfarve

  WASD();
  PIL();
  BlobG();
  SpisB();
}

function WASD() { // Kontrol af spiller 1
  acc1.set(0, 0);

  if (keyIsDown(87)) acc1.y = -0.3;
  if (keyIsDown(83)) acc1.y = 0.3;
  if (keyIsDown(65)) acc1.x = -0.3;
  if (keyIsDown(68)) acc1.x = 0.3;

  vel1.add(acc1); // Tilføjer acceleration til hastighed
  vel1.mult(fri); // Ganger hastigheden med en friktionsfaktor (fri)
  vel1.limit(maxS); // Hastighed overstiger ikke maksimal hastighed (maxS)
  pos1.add(vel1); // Opdaterer spiller posistion

  pos1.x = constrain(pos1.x, 10, width - 10);
  pos1.y = constrain(pos1.y, 10, height - 10);

  fill(255, 0, 0); // Rød farve til spiller 1
  ellipse(pos1.x, pos1.y, 30, 30); // Position og størrelse af spiller 1
}


function PIL() { // Kontrol af spiller 2
  acc2.set(0, 0);

  if (keyIsDown(38)) acc2.y = -0.3;
  if (keyIsDown(40)) acc2.y = 0.3;
  if (keyIsDown(37)) acc2.x = -0.3;
  if (keyIsDown(39)) acc2.x = 0.3;

  vel2.add(acc2); // Tilføjer acceleration til hastighed
  vel2.mult(fri); // Ganger hastigheden med en friktionsfaktor (fri)
  vel2.limit(maxS); // Hastighed overstiger ikke maksimal hastighed (maxS)
  pos2.add(vel2); // Opdaterer spiller posistion

  pos2.x = constrain(pos2.x, 10, width - 10);
  pos2.y = constrain(pos2.y, 10, height - 10);

  fill(0, 0, 255); // Blå farve til spiller 2
  ellipse(pos2.x, pos2.y, 30, 30); // Position og størrelse af spiller 2
}

function BlobG() {
  fill(0, 255,0);
  for (let i = 0; i < blobdata.length; i++) {
    ellipse(blobdata[i].x, blobdata[i].y, blobdata[i].r *2); 
  }
}

function SpisB(){
  if (dist(pos1.x, pos1.y,i,u) < 15)  {
      textSize(30);
      text("Collision", x - 50, y - 50, u, i);
      i = 0;
      u = random(0, 600);
      console.log("YAYdsas GOTCHA");
}
}



