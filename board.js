// Draw a basic board
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
};

let boardAr = ['_______________', '_______________', '_______________',
            '_______________'];




function drawBoard() {
  document.getElementById("1").innerHTML = boardAr[0];
  document.getElementById("2").innerHTML = boardAr[1];
  document.getElementById("3").innerHTML = boardAr[2];
  document.getElementById("4").innerHTML = boardAr[3];
};


function drawPlayer() {
  resetBoard()
  boardAr[player.position[0]] = boardAr[player.position[0]].replaceAt(player.position[1], player.icon);
}

function drawMonsters() {
  for (let i = 0; i < monstersArray.length; i++) {
    boardAr[monstersArray[i].position[0]] =
      boardAr[monstersArray[i].position[0]].replaceAt(monstersArray[i].position[1], monstersArray[i].icon);

  }
}



function printBoard() {
  console.log(boardAr);
};

function printPlayerLocation() {
  console.log(player.position);
};

function printMonsterLocation() {
  console.log(monster1.position);
  console.log(monster2.position);
};



function resetBoard() {
  boardAr = ['_______________', '_______________', '_______________',
              '_______________'];
}

function drawScreen() {
  drawPlayer();
  moveMonsters();
  drawMonsters();
  checkLoosing();
  drawBoard();
}
