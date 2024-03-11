import Gameboard from '../Gameboard/Gameboard';

export default class Player {
  constructor(name = 'Player', isComputer = false) {
    this.gameboard = new Gameboard();
    this.isComputer = isComputer;
    this.name = name;
  }
  takeTurn(enemyGameboard, x, y) {
    if (this.isComputer) {
      this.randomAttack(enemyGameboard);
    } else {
      enemyGameboard.receiveAttack(x, y);
    }
  }

  randomAttack(enemyGameboard) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    while (enemyGameboard.grid[y][x].hit) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
    enemyGameboard.receiveAttack(x, y);
  }
}
