var hero = {
  X: 200,
  Y: 200,
  dirX: 0,
  dirY: 0,
  speed: 2
};
var monsterMove = {
  X: 250,
  Y: 250,
  dirX: 0,
  dirY: 0,
  speed:2
}
var goblin1Move = {
  X: 300,
  Y: 300,
  dirX: 0,
  dirY: 0,
  speed: 2
}
var goblin2Move = {
  X: 350,
  Y: 350,
  dirX: 0,
  dirY: 0,
  speed: 2
}
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var heroimage = new Image();
heroimage.src = './images/hero.png';

var herobackground = new Image();
herobackground.src = './images/background.png';

var monster = new Image();
monster.src = './images/monster.png';

var goblin = new Image();
goblin.src = './images/goblin.png';

function main() {
  ctx.beginPath();
  ctx.drawImage(herobackground, 0, 0, 512, 480);
  ctx.font = "25px serif";
  ctx.fillText('Score: ' + score, 40, 50);
  ctx.fillText('High score: ' + highScore, 40, 75);
  ctx.fillText(shout, 220, 240);
  ctx.drawImage(monster, monsterMove.dirX, monsterMove.dirY, 25, 25);
  ctx.drawImage(heroimage, hero.X, hero.Y, 25, 25);
  ctx.drawImage(goblin, goblin1Move.dirX, goblin1Move.dirY, 25, 25);
  ctx.drawImage(goblin, goblin2Move.dirX, goblin2Move.dirY, 25, 25);
  ctx.fill();

  requestAnimationFrame(main);
  checkWinner();
  checkLoser(goblin1Move);
  checkLoser(goblin2Move);
  heroMovement();
  moveEnemy(monsterMove);
  moveEnemy(goblin1Move);
  moveEnemy(goblin2Move);
}
main();

var mainCounter = 0;
var goblinCounter = 0;
var idx1 = 0;
var idx2 = 0;
// var idx3 = 0;
// var idx4 = 0;
// var idx5 = 0;
// var idx6 = 0;
var score = 0;
var highScore = 0;
var shout = "";
window.addEventListener('keydown', function(e) {
  var key = e.keyCode;
  if (key === 37) { // left
    hero.dirX = 1;
  }
  if (key === 39) { // right
    hero.dirX = -1;
  }
  if (key === 38) { // up
    hero.dirY = 1;
  }
  if (key === 40) { // down
    hero.dirY = -1;
  }
  if (hero.X > 512) {
    hero.X = 0;
  }
  if (hero.Y > 480) {
    hero.Y = 0;
  }
  if (hero.X < 0) {
    hero.X = 512;
  }
  if (hero.Y < 0) {
    hero.Y = 480;
  }
});

window.addEventListener('keyup', function(event) {
  var key = event.keyCode;
  if (key === 37) { // left
    hero.dirX = 0;
  }
  if (key === 39) { // right
    hero.dirX = 0;
  }
  if (key === 38) { // up
    hero.dirY = 0;
  }
  if (key === 40) { // down
    hero.dirY = 0;
  }
});

function moveEnemy(enemy) {
  if (mainCounter === 75) {
    idx1 = Math.floor(Math.random() * 3 - 1);
    idx2 = Math.floor(Math.random() * 3 - 1);
    mainCounter = 0;
    shout = "";
  }
  enemy.dirX += (enemy.speed * idx1);
  enemy.dirY += (enemy.speed * idx2);
  if (enemy.dirX > 512) {
    enemy.dirX = 0;
  }
  if (enemy.dirY > 480) {
    enemy.dirY = 0;
  }
  if (enemy.dirX < 0) {
    enemy.dirX = 512;
  }
  if (enemy.dirY < 0) {
    enemy.dirY = 480;
  }
  mainCounter += 1;
}
function checkWinner () {
  if (monsterMove.dirX + 32 < hero.X) {
  } else if (hero.X + 32 < monsterMove.dirX) {
  } else if (monsterMove.dirY + 32 < hero.Y) {
  } else if (hero.Y + 32 < monsterMove.dirY) {
  } else {
    score += 1;
    monsterMove.dirX = Math.floor(Math.random() * 400);
    monsterMove.dirY = Math.floor(Math.random() * 400);
    shout = "Hooray";
  }
  if (score > highScore) {
    highScore = score;
  }
}

// var goblin1X = 100;
// var goblin1Y = 100;
// var goblin2X = 300;
// var goblin2Y = 300;

function checkLoser (goblin) {
  if (goblin.dirX + 32 < hero.X) {
  } else if (hero.X + 32 < goblin.dirX) {
  } else if (goblin.dirY + 32 < hero.Y) {
  } else if (hero.Y + 32 < goblin.dirY) {
  } else {
    score = 0;
    goblin.dirX = Math.floor(Math.random() * 400);
    goblin.dirY = Math.floor(Math.random() * 400);
    shout = "Sorry";
  }
  // if (goblin2X + 32 < hero.X) {
  // } else if (hero.X + 32 < goblin2X) {
  // } else if (goblin2Y + 32 < hero.Y) {
  // } else if (hero.Y + 32 < goblin2Y) {
  // } else {
  //   score = 0;
  //   goblin2X = Math.floor(Math.random() * 400);
  //   goblin2Y = Math.floor(Math.random() * 400);
  //   shout = "Sorry";
  // }
}

// function goblin1Movement() {
//   if (goblinCounter === 75) {
//     idx3 = Math.floor(Math.random() * 3 - 1);
//     idx4 = Math.floor(Math.random() * 3 - 1);
//     goblinCounter = 0;
//   }
//   goblin1X += (goblinMove.speed * idx3);
//   goblin1Y += (goblinMove.speed * idx4);
//   if (goblin1X > 512) {
//     goblin1X = 0;
//   }
//   if (goblin1Y > 480) {
//     goblin1Y = 0;
//   }
//   if (goblin1X < 0) {
//     goblin1X = 512;
//   }
//   if (goblin1Y < 0) {
//     goblin1Y = 480;
//   }
//   goblinCounter += 1;
// }
//
// function goblin2Movement() {
//   if (goblinCounter === 75) {
//     idx5 = Math.floor(Math.random() * 3 - 1);
//     idx6 = Math.floor(Math.random() * 3 - 1);
//     goblinCounter = 0;
//   }
//   goblin2X += (goblinMove.speed * idx5);
//   goblin2Y += (goblinMove.speed * idx6);
//   if (goblin2X > 512) {
//     goblin2X = 0;
//   }
//   if (goblin2Y > 480) {
//     goblin2Y = 0;
//   }
//   if (goblin2X < 0) {
//     goblin2X = 512;
//   }
//   if (goblin2Y < 0) {
//     goblin2Y = 480;
//   }
//   goblinCounter += 1;
// }


function heroMovement() {
  if (hero.dirX === 1) {
    hero.X -= hero.speed;
  } else if (hero.dirX === -1) {
    hero.X += hero.speed;
  } else if (hero.dirY === 1) {
    hero.Y -= hero.speed;
  } else if (hero.dirY === -1) {
    hero.Y += hero.speed;
  }
}
