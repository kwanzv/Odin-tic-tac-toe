const gameBoard = () => {
  const gameBoard = document.querySelector(".game-board");

  for (let i = 0; i < 9; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    gameBoard.appendChild(tile);
  }

  return { gameBoard };
};

gameBoard();
