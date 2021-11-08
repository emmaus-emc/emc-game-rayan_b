/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 600
var vijandY = 0
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
  // vijand
  vijandY = vijandY + 10
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
  if (vijandY >= 720) {
    vijandY = 0
    let numbers = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100'];
    vijandX = random(numbers);
  }

  // botsing speler tegen vijand

  if ((spelerX - vijandX) < 52 &&
    (spelerX - vijandX) > -52 &&
    (spelerY - vijandY) < 52 &&
    (spelerY - vijandY) > -52) {
    console.log("botsing")
    hp = hp - 1
  }
  // botsing kogel tegen vijand
  

  // punten erbij
  punten=punten+0.02;
};

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
  if (vijandY) {
    createCanvas(1280, 720);
    background(0, 55, 133);
  }

  // vijand
  fill("white");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("red");
  rect(vijandX - 25, vijandY - 25, 12.5, 25);
  fill("red");
  rect(vijandX + 12.5, vijandY - 25, 12.5, 25);
  fill("red");
  rect(vijandX - 25, vijandY + 40 - 25, 50, 10);
  fill("black");
  rect(vijandX + 12.5, vijandY + 12.50 - 25, 10, 10);
  fill("black");
  rect(vijandX - 25, vijandY + 12.5 - 25, 10, 10);
  fill("purple");
  ellipse(vijandX, vijandY, 5, 5);

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
    if (hp <= 0){
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
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsingEnPunten();

    tekenAlles();

    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }


  if (spelStatus === GAMEOVER) {
    textSize(100)
    text("game over", 425, 350)

    // teken game-over scherm

  }
}
