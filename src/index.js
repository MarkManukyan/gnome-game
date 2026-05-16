import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const BOARD_SIZE = 4;
  const MOVE_INTERVAL = 2000;

  let gnomeImg;
  let currentCell;

  function initGame() {
    createGameBoard();
    setupCellClickHandlers();
    createGnomeCharacter();
    placeGnomeRandomly();
    startGnomeMovement();
  }

  function createGameBoard() {
    const board = document.getElementById('game-board');

    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${row}-${col}`;
        board.appendChild(cell);
      }
    }
  }

  function setupCellClickHandlers() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        cell.style.backgroundColor = 'red';
      });
    });
  }

  function createGnomeCharacter() {
    gnomeImg = document.createElement('img');
    gnomeImg.src = '/assets/images/gnome.png';
    gnomeImg.alt = 'Гном';
    gnomeImg.className = 'gnome-character';
  }

  function placeGnomeRandomly() {
    const cells = document.querySelectorAll('.cell');
    const randomIndex = Math.floor(Math.random() * cells.length);
    currentCell = cells[randomIndex];
    currentCell.appendChild(gnomeImg);
  }

  function startGnomeMovement() {
    setInterval(() => {
      moveGnomeToRandomCell();
    }, MOVE_INTERVAL);
  }

  function moveGnomeToRandomCell() {
    const cells = document.querySelectorAll('.cell');
    let newCell;

    do {
      const randomIndex = Math.floor(Math.random() * cells.length);
      newCell = cells[randomIndex];
    } while (newCell === currentCell);

    newCell.appendChild(gnomeImg);
    currentCell = newCell;
  }

  initGame();
});
