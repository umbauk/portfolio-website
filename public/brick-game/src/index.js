// http-server -a localhost -p 8000 -c-1

import Game from './game.js';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let canvas = document.getElementById('gameScreen');
let context = canvas.getContext('2d');

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(context);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
