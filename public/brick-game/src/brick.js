import detectedCollision from './collisionDetection.js';

export default class Brick {
  constructor(game, brickPosition) {
    this.width = 80;
    this.height = 20;
    this.pixelsOffsetFromTop = game.gameHeight * 0.1;
    this.position = {
      x: brickPosition.x * this.width,
      y: this.pixelsOffsetFromTop + brickPosition.y * this.height,
    };
    this.game = game;
    this.displayOnScreen = true;
    this.color = this.getRandomColor();
  }

  static size() {
    return { width: this.width, height: this.height };
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    context.strokeStyle = '#696969';
    context.strokeRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    let collisionResult = detectedCollision(this.game.ball, this);
    if (collisionResult) {
      this.displayOnScreen = false;
      this.game.score += 50;
      if (collisionResult === 'top' || collisionResult === 'bottom')
        this.game.ball.speed.y = -this.game.ball.speed.y;
      else if (collisionResult === 'left' || collisionResult === 'right')
        this.game.ball.speed.x = -this.game.ball.speed.x;
      else {
        console.log('Should not be here');
      }
    }
  }

  getRandomColor() {
    let returnString = '#';
    let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    for (let i = 0; i < 6; i++) {
      returnString += hexArray[Math.floor(Math.random() * 16)];
    }
    return returnString;
  }
}
