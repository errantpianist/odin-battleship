import Gameboard from './Gameboard';
import Ship from '../Ship/Ship';

describe('Gameboard initialization', () => {
  it('can be instantiated', () => {
    expect(new Gameboard()).toBeInstanceOf(Object);
  });
  it('has a 10x10 grid', () => {
    const gameboard = new Gameboard();
    expect(gameboard.grid.length).toBe(10);
    expect(gameboard.grid[0].length).toBe(10);
  });
});

describe('Gameboard placeShip', () => {
  it('can place a ship', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(0, 0, 4, 'horizontal');
    expect(gameboard.grid[0][0].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[0][1].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[0][2].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[0][3].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[0][4].ship).toBe(null);
  });
  it('can place a ship vertically', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(0, 0, 4, 'vertical');
    expect(gameboard.grid[0][0].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[1][0].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[2][0].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[3][0].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[4][0].ship).toBe(null);
  });
  it('can place a ship at different coordinates', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(5, 5, 4, 'horizontal');
    expect(gameboard.grid[5][5].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[5][6].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[5][7].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[5][8].ship).toBeInstanceOf(Ship);
  });
  it('can place a ship at different coordinates vertically', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(5, 5, 4, 'vertical');
    expect(gameboard.grid[5][5].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[6][5].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[7][5].ship).toBeInstanceOf(Ship);
    expect(gameboard.grid[8][5].ship).toBeInstanceOf(Ship);
  });
});

describe('Gameboard receiveAttack', () => {
  it('can receive an attack that misses', () => {
    const gameboard = new Gameboard();
    gameboard.receiveAttack(0, 0);
    expect(gameboard.grid[0][0].hit).toBe('miss');
  });
  it('can receive an attack that hits', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(0, 0, 4, 'horizontal');
    gameboard.receiveAttack(0, 0);
    expect(gameboard.grid[0][0].hit).toBe('hit');
  });
  it('calls ship.hit() when receiving an attack', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(0, 0, 4, 'horizontal');
    gameboard.receiveAttack(0, 0);
    expect(gameboard.ships[0].hits).toBe(1);
  });
  it('can receive multiple attacks', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(0, 0, 4, 'vertical');
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    expect(gameboard.ships[0].hits).toBe(2);
  });
  it('can receive multiple attacks that miss', () => {
    const gameboard = new Gameboard();
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    expect(gameboard.grid[0][0].hit).toBe('miss');
    expect(gameboard.grid[1][0].hit).toBe('miss');
  });
});

describe('Gameboard allSunk', () => {
  it('returns false when no ships are sunk', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(0, 0, 4, 'horizontal');
    expect(gameboard.allSunk()).toBe(false);
  });
  it('returns true when all ships are sunk', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(0, 0, 4, 'vertical');
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(0, 2);
    gameboard.receiveAttack(0, 3);
    expect(gameboard.allSunk()).toBe(true);
  });
  it('returns false when not all ships are sunk', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(0, 0, 4, 'vertical');
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(0, 2);
    expect(gameboard.allSunk()).toBe(false);
  });
});
