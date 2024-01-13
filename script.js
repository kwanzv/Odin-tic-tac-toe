const createGameBoard = (() => {
  const gameBoard = document.querySelector(".game-board");
  //Storing the gameboard as an array inside a gameBoard object.

  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  // Creating the gameboard with a for Each loop using board.
  let tileId = 1;

  board.forEach((row) => {
    row.forEach(() => {
      //Creating the tiles
      const tileElement = document.createElement("div");
      tileElement.classList.add("tile");
      tileElement.dataset.id = tileId;
      gameBoard.appendChild(tileElement);
      tileId++;
    });
  });

  return { board, gameBoard };
})();

function Game() {
  function Player(name, marker) {
    this.name = name;
    this.marker;
    console.log({ name, marker });
    return { name, marker };
  }

  function handleTileClick(event) {
    if (activeIndex === 0) {
      event.currentTarget.innerHTML = player1.marker;
      activeIndex = 1;
    } else if (activeIndex === 1) {
      event.currentTarget.innerHTML = player2.marker;
      activeIndex = 0;
    }
  }

  document.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("click", handleTileClick);
  });

  let activeIndex = 0;
  const player1 = Player("John", "X");
  const player2 = Player("Jane", "O");

  return { player1, player2 };
}

const game = Game();
