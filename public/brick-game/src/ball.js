import detectedCollision from './collisionDetection.js';

export default class ball {
  constructor(game) {
    this.radius = 7;
    this.startPositionX = 50 + this.radius;
    this.startPositionY = 180 + this.radius;
    this.startSpeedX = 2;
    this.startSpeedY = 2;
    this.position = {
      x: this.startPositionX,
      y: this.startPositionY,
    };
    this.speed = {
      x: this.startSpeedX,
      y: this.startSpeedY,
    };
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.displayOnScreen = true;
  }

  draw(context) {
    context.fillStyle = '#f057e3';
    context.beginPath();
    context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2,
      true,
    );
    context.fill();
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // Check if hitting side of canvas
    if (
      this.position.x - this.radius <= 0 ||
      this.position.x > this.gameWidth - this.radius
    ) {
      this.speed.x = -this.speed.x;
    }

    // Check if hitting top of canvas
    if (this.position.y - this.radius <= 0) this.speed.y = -this.speed.y;

    // Check if hitting bottom of canvas
    if (this.position.y > this.gameHeight - this.radius) {
      this.game.lives--;
      this.resetPositionAndSpeed();
    }

    // Check if hitting paddle
    if (detectedCollision(this, this.game.paddle)) this.speed.y = -this.speed.y;
  }

  resetPositionAndSpeed() {
    this.position = {
      x: this.startPositionX,
      y: this.startPositionY,
    };
    this.speed = {
      x: this.startSpeedX,
      y: this.startSpeedY,
    };
  }
}
