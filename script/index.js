const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const solution = [];

function find(x, y) {
  if (maze[x][y] === 1 || solution.includes(`${x}:${y}`)) return false;

  solution.push(`${x}:${y}`);

  const pos = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];

  if (maze[x][y] === 2 || pos.some(([x, y]) => find(x, y))) {
    return true;
  }

  solution.splice(solution.indexOf(`${x}:${y}`), 1);

  return false;
}

find(1, 1);

function temp() {
  let letters = "";
  for (const row of maze) {
    for (const item of row) {
      if (item === 0) {
        letters += ".";
      }
      if (item === 1) {
        letters += "x";
      }
      if (item === 2) {
        letters += "g";
      }
    }
    letters += "\n";
  }
  return letters;
}
