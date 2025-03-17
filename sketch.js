let pos1, vel1, acc1; // (WASD)
let pos2, vel2, acc2; // (Arrow)

let maxS = 2.6; // maxSpeed
let fri = 0.87; // friction

let blobdata = []; // Opbevarer blob data

let i;
let u;


let r = 15; //radius af blob
redPlayerPoint = 0;
bluePlayerPoint = 0;



function setup() {
  createCanvas(600, 600);

  pos1 = createVector(random(width - 570, width - 450), random(height - 570, height - 450)); // Vektor der bestemmer startposition for spiller 1
  vel1 = createVector(0, 0);
  acc1 = createVector(0, 0);

  pos2 = createVector(random(width - 30, width - 150), random(height - 150, width - 30)); // Vektor der bestemmer startposition for spiller 1
  vel2 = createVector(0, 0);
  acc2 = createVector(0, 0);

  for (let i = 0; i < 60; i++) {
    let newblob = {
      x: random(0+12,600-12),
      y: random(0+12,600-12),
      r: random(9, 12),
      
      color: {
        r: random(0, 255), 
        g: random(0, 255), 
        b: random(0, 255),
      }
    };
    blobdata.push(newblob);
  }
}

function BlobG() {
  noStroke();
  for (let i = 0; i < blobdata.length; i++) {
    fill(blobdata[i].color.r, blobdata[i].color.b, blobdata[i].color.g);
    ellipse(blobdata[i].x, blobdata[i].y, blobdata[i].r);
  }
}

function draw() {
  background(220);
  WASD();
  PIL();
  BlobG();
}

function WASD() {
  acc1.set(0, 0);

  if (keyIsDown(87)) acc1.y = -0.7;
  if (keyIsDown(83)) acc1.y = 0.7;
  if (keyIsDown(65)) acc1.x = -0.7;
  if (keyIsDown(68)) acc1.x = 0.7;

  vel1.add(acc1);
  vel1.mult(fri);
  vel1.limit((maxS));
  pos1.add(vel1);

  pos1.x = constrain(pos1.x, 10, width - 10);
  pos1.y = constrain(pos1.y, 10, height - 10);

  fill(255, 0, 0);
 let redsize = ellipse(pos1.x, pos1.y, r*2, r*2);
}

function PIL() {
  acc2.set(0, 0);

  if (keyIsDown(38)) acc2.y = -0.7;
  if (keyIsDown(40)) acc2.y = 0.7;
  if (keyIsDown(37)) acc2.x = -0.7;
  if (keyIsDown(39)) acc2.x = 0.7;

  vel2.add(acc2);
  vel2.mult(fri);
  vel2.limit((maxS));
  pos2.add(vel2);

  pos2.x = constrain(pos2.x, 10, width - 10);
  pos2.y = constrain(pos2.y, 10, height - 10);

  fill(0, 0, 255);
  let bluesize = ellipse(pos2.x, pos2.y, r*2, r*2);
}

function BlobG(bluesize,redsize) {
  fill(0, 255, 0);
  for (let i = blobdata.length - 1; i >= 0; i--) {
    let blob = blobdata[i];

    ellipse(blob.x, blob.y, blob.r * 2);
    if (dist(pos1.x, pos1.y, blob.x, blob.y) < r) {
      blobdata.splice(i, 1);
      redPlayerPoint ++
      console.log(redPlayerPoint);
    
    }
    if (dist(pos2.x, pos2.y, blob.x, blob.y) < r) {
      blobdata.splice(i, 1);
      bluePlayerPoint ++
      console.log(bluePlayerPoint);
    }
  }
      textSize(32);
      fill(255,255,255);
      text(redPlayerPoint,100,100); 
      text(bluePlayerPoint,400,100); 
}

  fill(0, 0, 255);
  let bluesize = ellipse(pos2.x, pos2.y, r*2, r*2);
}

function BlobG(bluesize,redsize) {
  fill(0, 255, 0);
  for (let i = blobdata.length - 1; i >= 0; i--) {
    let blob = blobdata[i];

    ellipse(blob.x, blob.y, blob.r * 2);
    if (dist(pos1.x, pos1.y, blob.x, blob.y) < r) {
      blobdata.splice(i, 1);
      redPlayerPoint ++
      console.log(redPlayerPoint);
    
    }
    if (dist(pos2.x, pos2.y, blob.x, blob.y) < r) {
      blobdata.splice(i, 1);
      bluePlayerPoint ++
      console.log(bluePlayerPoint);
    }
  }
      textSize(32);
      fill(255,255,255);
      text(redPlayerPoint,100,100); 
      text(bluePlayerPoint,400,100); 
}

  fill(0, 0, 255); // Blå farve til spiller 2
  ellipse(pos2.x, pos2.y, 30, 30); // Position og størrelse af spiller 2
}


function SpisB() {
  for (let i = blobdata.length - 1; i >= 0; i--) {
    let d1 = dist(pos1.x, pos1.y, blobdata[i].x, blobdata[i].y);
    let d2 = dist(pos2.x, pos2.y, blobdata[i].x, blobdata[i].y);
    if (d1 < 15 || d2 < 15) {
      blobdata.splice(i, 1); // Remove the blob if a player eats it
      console.log("GOTCHA");
    }
  }


// Lav z-værdi proportionel til størrelse. Hvis z er større, så udfør spis funktion.

}