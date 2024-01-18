const createGameBoard = (() => {
  const gameBoard = document.querySelector(".game-board");
  //Storing the gameboard as an array inside a gameBoard object.

  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  // Creating the gameboard with a for Each loop using board.
  let tileId = 0;

  board.forEach((row) => {
    row.forEach(() => {
      //Creating the tiles
      const tileElement = document.createElement("div");
      tileElement.classList.add("tile");
      gameBoard.appendChild(tileElement);
    });
  });

  return { board, gameBoard };
})();

function Game() {
  const tiles = document.querySelectorAll(".tile");
  let activeIndex = 0;
  const player1 = new Player("Player", "X");
  const player2 = new Player("Computer", "O");

  function Player(name, marker) {
    this.name = name;
    this.marker;
    return { name, marker };
  }

  function handleTileClick(event) {
    if (activeIndex === 0 && !event.currentTarget.innerHTML) {
      event.currentTarget.innerHTML = player1.marker;
      activeIndex = 1;
    } else if (activeIndex === 1 && !event.currentTarget.innerHTML) {
      event.currentTarget.innerHTML = player2.marker;
      activeIndex = 0;
    }
    checkWin({ ...tiles });
  }

  function stopGame() {
    tiles.forEach((tile) => {
      tile.removeEventListener("click", handleTileClick);
    });
  }

  function checkWin(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a].innerHTML &&
        squares[a].innerHTML === squares[b].innerHTML &&
        squares[a].innerHTML === squares[c].innerHTML
      ) {
        Snackbar.show({
          backgroundColor: 323232,
          text: `Winner is: ${squares[a].innerHTML} `,
          actionText: "OK",
          pos: "bottom-left",
          timeout: 5000,
        });
        return stopGame();
      }
    }
    return null;
  }
  tiles.forEach((tile) => {
    tile.addEventListener("click", handleTileClick);
  });
}

// const playerName = document.querySelector(".player-name");
// const name = document.querySelector("#name");

const beginGame = document
  .querySelector("#start-game")
  .addEventListener("click", () => {
    Snackbar.show({
      backgroundColor: 323232,
      text: "Game Started",
      actionText: "OK",
      pos: "bottom-left",
      timeout: 5000,
    });
    createGameBoard.gameBoard.style.background = "#f0f0f0";
    console.log("I'm trying");
    Game();
  });
