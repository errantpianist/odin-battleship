export default function renderGameboard(player1, player2) {
  console.log('Hi from renderGameboard');
  for (let i = 0; i < arguments.length; i++) {
    let player = arguments[i];
    console.log('player', player);
    let container;
    if (!player.isComputer) container = document.getElementById('player-grid');
    else container = document.getElementById('computer-grid');

    container.innerHTML = '';
    for (let row = 0; row < player.gameboard.grid.length; row++) {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
      for (let col = 0; col < player.gameboard.grid[0].length; col++) {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square');
        squareElement.dataset.coordinate = `${
          player.isComputer ? 'computer' : 'player'
        },${row},${col}`;
        squareElement.addEventListener('click', (e) => {
          const [playerName, row, col] = e.target.dataset.coordinate.split(',');
          if (playerName === 'computer') {
            player1.takeTurn(player2.gameboard, col, row);
            renderGameboard(player1, player2);
            setTimeout(() => {
              player2.takeTurn(player1.gameboard);
              renderGameboard(player1, player2);
            }, 1000);
          }
        });

        if (player.gameboard.grid[row][col].hit === 'miss') {
          squareElement.classList.add('miss');
        } else if (player.gameboard.grid[row][col].hit === 'hit') {
          squareElement.classList.add('hit');
        } else {
          squareElement.classList.add('not-attacked');
        }
        if (player.gameboard.grid[row][col].ship) {
          console.log(row, col, player.gameboard.grid[row][col].ship);
          squareElement.classList.add('ship');
        }
        rowElement.appendChild(squareElement);
      }
      container.appendChild(rowElement);
    }
  }
}
