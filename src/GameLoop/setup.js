import renderGameboard from '../DOM/renderGameboard';
import Player from '../Player/Player';

export default function setup() {
  const player1 = new Player('Player 1');
  const player2 = new Player('Computer', true);
  player1.gameboard.placeShip(0, 0, 5, 'horizontal');
  player1.gameboard.placeShip(0, 1, 4, 'horizontal');
  player1.gameboard.placeShip(0, 2, 3, 'horizontal');
  player1.gameboard.placeShip(0, 3, 3, 'horizontal');
  player1.gameboard.placeShip(0, 4, 2, 'horizontal');
  player2.gameboard.placeShip(1, 0, 5, 'horizontal');
  player2.gameboard.placeShip(1, 1, 4, 'horizontal');
  player2.gameboard.placeShip(1, 2, 3, 'horizontal');
  player2.gameboard.placeShip(1, 3, 3, 'horizontal');
  player2.gameboard.placeShip(1, 4, 2, 'horizontal');
  renderGameboard(player1, player2);

  return { player1, player2 };
}
