export default function detectedCollision(ball, gameObject) {
  // Check if hitting Object
  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftEdgeOfObject = gameObject.position.x;
  let rightEdgeOfObject = gameObject.position.x + gameObject.width;

  let topOfBall = ball.position.y - ball.radius;
  let bottomOfBall = ball.position.y + ball.radius;
  let leftEdgeOfBall = ball.position.x - ball.radius;
  let rightEdgeOfBall = ball.position.x + ball.radius;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= topOfObject &&
    ball.position.x >= leftEdgeOfObject &&
    ball.position.x <= rightEdgeOfObject
  ) {
    return 'top';
  } else if (
    bottomOfBall >= bottomOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftEdgeOfObject &&
    ball.position.x <= rightEdgeOfObject
  ) {
    return 'bottom';
  } else if (
    // left side collision
    ball.position.y <= bottomOfObject &&
    ball.position.y >= topOfObject &&
    leftEdgeOfBall <= leftEdgeOfObject &&
    rightEdgeOfBall >= leftEdgeOfObject
  ) {
    return 'left';
  } else if (
    // right side collision
    ball.position.y <= bottomOfObject &&
    ball.position.y >= topOfObject &&
    leftEdgeOfBall <= rightEdgeOfObject &&
    rightEdgeOfBall >= rightEdgeOfObject
  ) {
    return 'right';
  } else {
    return false;
  }
}
