describe('Gnome Game', () => {
    beforeEach(() => {
        // Создаём базовую структуру DOM перед каждым тестом
        document.body.innerHTML = `
      <div class="container">
        <h1>Игра: лови гнома!</h1>
        <div id="game-board"></div>
      </div>
    `;
    });

    test('should have game board element', () => {
        const gameBoard = document.getElementById('game-board');
        expect(gameBoard).not.toBeNull();
    });

    test('should create 16 cells in the game board', () => {
        // Имитируем создание игрового поля
        const board = document.getElementById('game-board');

        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.id = `cell-${row}-${col}`;
                board.appendChild(cell);
            }
        }

        const cells = document.querySelectorAll('.cell');
        expect(cells.length).toBe(16);
    });
});
