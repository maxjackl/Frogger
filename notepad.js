

let gameOn = true;

function gameEngine() {
  while (gameOn) {
    setInterval(drawScreen, 1000);
  }
}

function gameEnd() {
  gameOn = false;
}
