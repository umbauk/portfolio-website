import Brick from './brick.js';

export function buildLevel(game, level) {
  let bricks = [];
  let levelDesign = level ? level : levelBuilder();

  levelDesign.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick)
        bricks.push(
          new Brick(game, { x: 80 * brickIndex, y: 50 + 20 * rowIndex }),
        );
    });
  });

  return bricks;
}

export const level1 = [
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  //[0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function levelBuilder() {
  let returnArray = [];
  for (let j = 0; j < 5; j++) {
    returnArray[j] = [];
    for (let i = 0; i < 10; i++) {
      returnArray[j].push(Math.round(Math.random()));
    }
  }
  return returnArray;
}
