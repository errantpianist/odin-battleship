import setup from './Setup';

export default function GameLoop() {
  const { player1, player2 } = setup();
  if (player1.gameboard.allSunk()) {
    console.log('Player 2 wins!');
  } else {
    console.log('Player 1 wins!');
  }
}
