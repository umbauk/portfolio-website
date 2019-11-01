import Brick from './brick.js';

export function buildLevel(game, level) {
  let bricks = [];
  let levelDesign = level ? level : levelBuilder(game, new Brick(game, 1));

  levelDesign.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick) bricks.push(new Brick(game, { x: brickIndex, y: rowIndex }));
    });
  });

  return bricks;
}

export const level1 = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  //[0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function levelBuilder(game, brick) {
  let returnArray = [];
  for (let row = 0; row < 5; row++) {
    returnArray[row] = [];
    for (let i = 0; i < game.gameWidth / brick.width; i++) {
      returnArray[row].push(Math.round(Math.random()));
    }
  }
  return returnArray;
}
