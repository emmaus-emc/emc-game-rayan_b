/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const STARTSCHERM = 1;
const SPELEN = 2;
const GAMEOVER = 3;
var spelStatus = STARTSCHERM;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX1 = 100
var vijandY1 = 0
/*
var vijandX2 = 300
var vijandY2 = 0
var vijandX3 = 600
var vijandY3 = 0
*/
var KEY_LEFT = 37
var KEY_RIGHT = 39
var KEY_UP = 38
var KEy_DOWN = 40
var hp = 100
var punten = 0

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijanden
  vijandY1 = vijandY1 + 10
  /*
  vijandY2 = vijandY2 + 10
  vijandY3 = vijandY3 + 10
  */
  // kogel

  // speler
  if (keyIsDown(KEY_LEFT)) {
    spelerX = spelerX - 12;
  }

  if (keyIsDown(KEY_RIGHT)) {
    spelerX = spelerX + 12;
  }

  if (keyIsDown(KEY_UP)) {
    spelerY = spelerY - 12;
  }

  if (keyIsDown(KEy_DOWN)) {
    spelerY = spelerY + 12;
  }

};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsingEnPunten = function () {
  // botsing speler tegen barrier
  if (spelerX >= 1260) {
    spelerX = spelerX - 12
  }
  if (spelerX <= 20) {
    spelerX = spelerX + 12
  }
  if (spelerY >= 500) {
    spelerY = spelerY - 12
  }
  if (spelerY <= 695) {
    spelerY = spelerY + 12
  }

  // botsing vijand tegen barrier
  if (vijandY1 >= 720) {
    vijandY1 = 0
    /*let numbers = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100'];
    vijandX1 = random(numbers);*/
  }
  /*
  if (vijandY2 >= 720) {
    vijandY2 = 0
    let numbers = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100'];
    vijandX2 = random(numbers);
  }
  if (vijandY3 >= 720) {
    vijandY3 = 0
    let numbers = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100'];
    vijandX3 = random(numbers);
  }
  */

  // botsing speler tegen vijand

  for (let i = 0; i < 11; i = i + 1.5) {
  if ((spelerX - vijandX1) < 52 &&
    (spelerX - vijandX1) > -52 &&
    (spelerY - vijandY1) < 52 &&
    (spelerY - vijandY1) > -52) {
    console.log("botsing")
    hp = hp - 1
  }
  }

  if ((spelerX - vijandX1) < 52 &&
    (spelerX - vijandX1) > -52 &&
    (spelerY - vijandY1) < 52 &&
    (spelerY - vijandY1) > -52) {
    console.log("botsing")
    hp = hp - 1
  }

  /*
  if ((spelerX - vijandX2) < 52 &&
    (spelerX - vijandX2) > -52 &&
    (spelerY - vijandY2) < 52 &&
    (spelerY - vijandY2) > -52) {
    console.log("botsing")
    hp = hp - 1
  }

  if ((spelerX - vijandX3) < 52 &&
    (spelerX - vijandX3) > -52 &&
    (spelerY - vijandY3) < 52 &&
    (spelerY - vijandY3) > -52) {
    console.log("botsing")
    hp = hp - 1
  }
  */
  // botsing kogel tegen vijand


  // punten erbij
  punten = punten + 0.02;
};


/**
 * Tekent spelscherm
 */
var tekenStart = function () {
  fill("black");
  rect(0, 0, 1280, 720);
  textSize(100);
  fill("red");
  text("CLICK TO START", 250, 400);
}




/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  if (keyIsDown(KEY_LEFT)) {
    createCanvas(1280, 720);
    background(0, 55, 133);
  }

  if (keyIsDown(KEY_RIGHT)) {
    createCanvas(1280, 720);
    background(0, 55, 133);
  }

  if (keyIsDown(KEy_DOWN)) {
    createCanvas(1280, 720);
    background(0, 55, 133);
  }

  if (keyIsDown(KEY_UP)) {
    createCanvas(1280, 720);
    background(0, 55, 133);
  }

  if (vijandY1) {
    createCanvas(1280, 720);
    background(0, 55, 133);
  }
/*
  if (vijandY2) {
    createCanvas(1280, 720);
    background(0, 55, 133);
  }

  if (vijandY3) {
    createCanvas(1280, 720);
    background(0, 55, 133);
  }
*/
  // vijanden
  for (let i = 0; i < 11; i = i + 1.5) {
  fill("white");
  rect(vijandX1 + i * 100 - 25, vijandY1 - 25, 50, 50);
  fill("red");
  rect(vijandX1 + i * 100 - 25, vijandY1 - 25, 12.5, 25);
  fill("red");
  rect(vijandX1 + i * 100 + 12.5, vijandY1 - 25, 12.5, 25);
  fill("red");
  rect(vijandX1 + i * 100 - 25, vijandY1 + 40 - 25, 50, 10);
  fill("black");
  rect(vijandX1 + i * 100 + 12.5, vijandY1 + 12.50 - 25, 10, 10);
  fill("black");
  rect(vijandX1 + i * 100 - 25, vijandY1 + 12.5 - 25, 10, 10);
  fill("purple");
  ellipse(vijandX1 + i * 100, vijandY1, 5, 5);
  }

  fill("white");
  rect(vijandX1 - 25, vijandY1 - 25, 50, 50);
  fill("red");
  rect(vijandX1 - 25, vijandY1 - 25, 12.5, 25);
  fill("red");
  rect(vijandX1 + 12.5, vijandY1 - 25, 12.5, 25);
  fill("red");
  rect(vijandX1 - 25, vijandY1 + 40 - 25, 50, 10);
  fill("black");
  rect(vijandX1 + 12.5, vijandY1 + 12.50 - 25, 10, 10);
  fill("black");
  rect(vijandX1 - 25, vijandY1 + 12.5 - 25, 10, 10);
  fill("purple");
  ellipse(vijandX1, vijandY1, 5, 5);
/*
  fill("white");
  rect(vijandX2 - 25, vijandY2 - 25, 50, 50);
  fill("red");
  rect(vijandX2 - 25, vijandY2 - 25, 12.5, 25);
  fill("red");
  rect(vijandX2 + 12.5, vijandY2 - 25, 12.5, 25);
  fill("red");
  rect(vijandX2 - 25, vijandY2 + 40 - 25, 50, 10);
  fill("black");
  rect(vijandX2 + 12.5, vijandY2 + 12.50 - 25, 10, 10);
  fill("black");
  rect(vijandX2 - 25, vijandY2 + 12.5 - 25, 10, 10);
  fill("purple");
  ellipse(vijandX2, vijandY2, 5, 5);

  fill("white");
  rect(vijandX3 - 25, vijandY3 - 25, 50, 50);
  fill("red");
  rect(vijandX3 - 25, vijandY3 - 25, 12.5, 25);
  fill("red");
  rect(vijandX3 + 12.5, vijandY3 - 25, 12.5, 25);
  fill("red");
  rect(vijandX3 - 25, vijandY3 + 40 - 25, 50, 10);
  fill("black");
  rect(vijandX3 + 12.5, vijandY3 + 12.50 - 25, 10, 10);
  fill("black");
  rect(vijandX3 - 25, vijandY3 + 12.5 - 25, 10, 10);
  fill("purple");
  ellipse(vijandX3, vijandY3, 5, 5);
*/
  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);
  fill("black");
  rect(spelerX - 7.5, spelerY - 25, 15, 20);
  fill("gray");
  rect(spelerX - 25, spelerY, 12.5, 25);
  fill("gray");
  rect(spelerX + 12.5, spelerY, 12.5, 25);
  fill("red");
  rect(spelerX - 15, spelerY - 5, 12.5, 5);
  fill("red");
  rect(spelerX + 2.5, spelerY - 5, 12.5, 5);


  // punten en health
  textSize(100)
  text("hp:", 25, 100)
  textSize(100)
  text(hp, 170, 100)

  console.log(hp);
  if (hp <= 0) {
    spelStatus = GAMEOVER;
  }
  textSize(100);
  text(floor(punten), 1100, 100);

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(0, 55, 133);
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === STARTSCHERM) {
    tekenStart();
    if (mouseIsPressed) {
      spelStatus = SPELEN;
    }
  }
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsingEnPunten();

    tekenAlles();

    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }


  if (spelStatus === GAMEOVER) {
    createCanvas(1280, 720);
    background("black");

    textSize(100)
    text("hp:", 25, 100)

    textSize(100)
    text(hp, 170, 100)

    textSize(100)
    text("game over", 425, 350)

    textSize(100)
    text("points:", 800, 100)

    textSize(100);
    text(floor(punten), 1100, 100);
  
    fill("white");
    rect(spelerX - 25, spelerY - 25, 50, 50);
    fill("black");
    ellipse(spelerX, spelerY, 10, 10);
    fill("black");
    rect(spelerX - 7.5, spelerY - 25, 15, 20);
    fill("gray");
    rect(spelerX - 25, spelerY, 12.5, 25);
    fill("gray");
    rect(spelerX + 12.5, spelerY, 12.5, 25);
    fill("red");
    rect(spelerX - 15, spelerY - 5, 12.5, 5);
    fill("red");
    rect(spelerX + 2.5, spelerY - 5, 12.5, 5);

    // teken game-over scherm

  }
}
