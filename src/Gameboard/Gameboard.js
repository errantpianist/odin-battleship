import Ship from '../Ship/Ship';

export default class Gameboard {
  constructor() {
    this.grid = Array.from({ length: 10 }, () =>
      Array(10)
        .fill()
        .map(() => ({ ship: null, hit: null }))
    );
    this.ships = [];
    this.hits = 0;
  }
  placeShip(x, y, length, direction) {
    const ship = new Ship(length);
    this.ships.push(ship);
    if (direction === 'horizontal') {
      for (let i = 0; i < length; i++) {
        this.grid[y][x + i].ship = ship;
      }
    } else {
      for (let i = 0; i < length; i++) {
        this.grid[y + i][x].ship = ship;
      }
    }
  }
  receiveAttack(x, y) {
    this.hits += 1;
    if (this.grid[y][x].ship) {
      this.grid[y][x].ship.hit();
      this.grid[y][x].hit = 'hit';
    } else {
      this.grid[y][x].hit = 'miss';
    }
  }
  allSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}
