export default function win(player) {
  const titleElement = document.getElementById('title');
  const playerElement = document.createElement('h2');
  playerElement.textContent = `${player.name} wins!`;
  titleElement.appendChild(playerElement);

  const gameBoardElement = document.getElementById('game-board');
  const overlayElement = document.createElement('div');
  overlayElement.classList.add('overlay');
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Play Again?';
  resetButton.addEventListener('click', () => {
    location.reload();
  });
  overlayElement.appendChild(resetButton);
  gameBoardElement.appendChild(overlayElement);
}
