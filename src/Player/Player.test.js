import Player from './Player';
import Gameboard from '../Gameboard/Gameboard';

describe('Player initialization', () => {
  it('can be instantiated', () => {
    expect(new Player()).toBeInstanceOf(Object);
  });
  it('has a Gameboard', () => {
    const player = new Player();
    expect(player.gameboard).toBeInstanceOf(Gameboard);
  });
  it('has a name', () => {
    const player = new Player('Player 1');
    expect(player.name).toBe('Player 1');
  });
  it('is not a computer', () => {
    const player = new Player();
    expect(player.isComputer).toBe(false);
  });
});

describe('Player can take a turn', () => {
  it('can take a turn', () => {
    const player1 = new Player();
    const player2 = new Player();
    player1.takeTurn(player2.gameboard, 0, 0);
    expect(player2.gameboard.grid[0][0].hit).toBe('miss');
  });
  it('can take a turn and hit', () => {
    const player1 = new Player();
    const player2 = new Player();
    player2.gameboard.placeShip(0, 0, 4, 'horizontal');
    player1.takeTurn(player2.gameboard, 0, 0);
    expect(player2.gameboard.grid[0][0].hit).toBe('hit');
  });
});

describe('Computer can take a turn', () => {
  it('can take a turn', () => {
    const player1 = new Player();
    const player2 = new Player('computer', true);
    player2.takeTurn(player1.gameboard);
    expect(
      player1.gameboard.grid.some((row) =>
        row.some((cell) => cell.hit === 'miss')
      )
    ).toBe(true);
  });
  it('can take a turn and hit', () => {
    const player1 = new Player();
    const player2 = new Player('computer', true);
    player1.gameboard.placeShip(0, 0, 10, 'horizontal');
    player1.gameboard.placeShip(0, 1, 10, 'horizontal');
    player1.gameboard.placeShip(0, 2, 10, 'horizontal');
    player1.gameboard.placeShip(0, 3, 10, 'horizontal');
    player1.gameboard.placeShip(0, 4, 10, 'horizontal');
    player1.gameboard.placeShip(0, 5, 10, 'horizontal');
    player1.gameboard.placeShip(0, 6, 10, 'horizontal');
    player1.gameboard.placeShip(0, 7, 10, 'horizontal');
    player1.gameboard.placeShip(0, 8, 10, 'horizontal');
    player1.gameboard.placeShip(0, 9, 10, 'horizontal');
    player2.takeTurn(player1.gameboard);
    expect(
      player1.gameboard.grid.some((row) =>
        row.some((cell) => cell.hit === 'hit')
      )
    ).toBe(true);
  });
});
