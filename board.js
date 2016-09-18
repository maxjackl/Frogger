// Draw a basic board
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
};

let boardAr = ['_______________', '_______________', '_______________',
            '_______________'];

let gameOn = true;

function gameEngine() {
  while (gameOn) {
    setInterval(drawScreen, 1000);
  }
}


var player = {
  icon : '*',
  position : [3, 0]
};

function drawBoard() {
  document.getElementById("1").innerHTML = boardAr[0];
  document.getElementById("2").innerHTML = boardAr[1];
  document.getElementById("3").innerHTML = boardAr[2];
  document.getElementById("4").innerHTML = boardAr[3];
};

function moveLeft() {
  if (player.position[1] > 0) {
    player.position[1] --;
    console.log("moved left");
  } else {
    console.log("too far left");
  }
  console.log(player.position);
};

function moveDown() {
  if (player.position[0] < 3) {
    player.position[0] ++;
    console.log("moved down");
  } else {
    console.log("too far down");
  }
  console.log(player.position);
};

function moveRight() {
  if (player.position[1] < 14) {
    player.position[1] ++;
    console.log("moved right");
  } else {
    console.log("too far right");
  }
  console.log(player.position);
};

function moveUp() {
  if (player.position[0] > 0) {
    player.position[0] --;
    console.log("moved up");
  } else {
    console.log("too far up");
  }
  console.log(player.position);
};

function drawPlayer() {
  resetBoard()
  boardAr[player.position[0]] = boardAr[player.position[0]].replaceAt(player.position[1], player.icon);
}

function printBoard() {
  console.log(boardAr);
}

function resetBoard() {
  boardAr = ['_______________', '_______________', '_______________',
              '_______________'];
}

function drawScreen() {
  drawBoard();
}

function gameEnd() {
  gameOn = false;
}

//drawPlayer();
console.log(boardAr[3]);
gameEngine();
console.log(boardAr[3]);
