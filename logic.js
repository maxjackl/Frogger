let player = {
  icon : '*',
  position : [3, 0]
};

var Monster = function(speed, icon, position) {
  this.speed = speed;
  this.icon = icon;
  this.position = position;
}

let monstersArray = [];
monstersArray.push(new Monster(0.12, "&", [0, 0]));
monstersArray.push(new Monster(0.3, "^", [1, 0]));
monstersArray.push(new Monster(0.22, "$", [2, 0]));
monstersArray.push(new Monster(0.45, "#", [0, 0]));

function moveMonsters(){
  for (let i=0; i < monstersArray.length; i++) {
    if (monstersArray[i].position[1] >= 14) {
      monstersArray[i].position[1] = 0;
    } else {
      monstersArray[i].position[1] += monstersArray[i].speed;
    }
  }

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
    console.log("You Won");
    player.position = [3, 0];
    document.getElementById("success").innerHTML = "<p>You won!</p>";
  }
  console.log(player.position);
};

function checkLoosing() {
  for (let i = 0; i < monstersArray.length; i++) {
    let monsterPosTemp = JSON.parse(JSON.stringify(monstersArray[i].position));
    monsterPosTemp[1] = parseInt(monsterPosTemp[1].toFixed(0));
    console.log("Temp" + i + " monster position: " + monsterPosTemp);


    if (JSON.stringify(player.position) === JSON.stringify(monsterPosTemp)) {
        console.log("you lost");
        document.getElementById("success").innerHTML = "<p>You were eaten!</p>";
        player.position = [3, 0];
      }

  }

};
