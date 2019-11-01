// http-server -a localhost -p 8000 -c-1

import Game from './game.js';

let canvas = document.getElementById('gameScreen');
let context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let game = new Game(canvas.width, canvas.height);
let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  context.clearRect(0, 0, canvas.width, canvas.height);
  game.update(deltaTime);
  game.draw(context);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
