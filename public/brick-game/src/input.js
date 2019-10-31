export default class InputHandler {
  constructor(paddle, game) {
    addEventListener('keydown', event => {
      // left: 37, right: 39
      switch (event.keyCode) {
        // left cursor key
        case 37:
          paddle.moveLeft();
          break;

        // right cursor key
        case 39:
          paddle.moveRight();
          break;

        // spacebar to start game
        case 32:
          game.start();
          break;

        // escape to pause
        case 27:
          game.togglePause();
          break;
      }
    });

    addEventListener('keyup', event => {
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;

        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });
  }
}
