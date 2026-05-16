document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружен, запускаем createGameBoard');

    let currentGnomeCell = null; // Хранит ID ячейки с гномом
    let score = 0; // Счётчик пойманных гномов

    function createGameBoard() {
        console.log('Функция createGameBoard вызвана');
        const board = document.getElementById('game-board');

        if (!board) {
            console.error('Элемент #game-board не найден в DOM!');
            return;
        }

        console.log('Найдена доска, очищаем и создаём ячейки...');
        board.innerHTML = '';

        for (let i = 0; i < 16; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `cell-${i}`;
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
            console.log(`Создана ячейка ${i}`);
        }

        console.log('Все ячейки созданы, всего:', board.children.length);
    }

    // Функция обработки клика по ячейке
    function handleCellClick(event) {
        const cell = event.target;

        // Проверяем, попал ли клик на гнома
        if (cell === currentGnomeCell) {
            // Успех! Гном пойман
            cell.classList.add('caught');
            score++;
            updateScore();
            console.log(`Гном пойман! Счёт: ${score}`);
            hideGnome();
            showGnome(); // Показываем гнома в новой ячейке
        } else {
            // Промах
            console.log('Промах! Попробуйте ещё раз.');
        }
    }

    // Показывает гнома в случайной ячейке
    function showGnome() {
        const cells = document.querySelectorAll('.cell');
        const randomIndex = Math.floor(Math.random() * cells.length);
        currentGnomeCell = cells[randomIndex];
        currentGnomeCell.classList.add('gnome');
    }

    // Скрывает гнома (убирает класс)
    function hideGnome() {
        if (currentGnomeCell) {
            currentGnomeCell.classList.remove('gnome');
            currentGnomeCell = null;
        }
    }

    // Обновляет отображение счёта
    function updateScore() {
        const scoreElement = document.getElementById('score');
        if (scoreElement) {
            scoreElement.textContent = `Поймано гномов: ${score}`;
        }
    }

    // Запускаем игру
    createGameBoard();
    updateScore(); // Инициализируем счёт
    showGnome(); // Показываем первого гнома

    // Каждые 2 секунды перемещаем гнома в другую ячейку
    setInterval(() => {
        hideGnome();
        showGnome();
    }, 2000);
});
