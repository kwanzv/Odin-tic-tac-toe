# Odin Tic Tac Toe
## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

This is a project within The Odin Project (Javascript route), the purpose of the project is to utilize classes , factory functions and IIFE to make sure there are relevant closures. 
In this project, the game begins when the user inputs his name, and he is immediately assigned to be player X.

I used a snackbar library using the CDN because I had some issues with compatibility when importing and exporting the code, I know this was due to ES6 modules.

A snackbar will appear when beginning the game and when the game has ended due to an end state.


### Links

- Live Site URL: (https://kwanzv.github.io/RPS-Battle/](https://kwanzv.github.io/Odin-tic-tac-toe/)

## My process



### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Javascript

### What I learned

In this project, I learned the important of splitting up your code into classes or factory functions, and better yet IIFE to utilize closures and enscapsulate game logic not in the DOM but in JS.

You can see in the below code, I have enclosed the initial gameboard code in 1 immediately invoked function.

```js

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


```

### Continued development

I have seen some great ideas from other similar projects, specifically, I would like to implement different AI levels.

### Useful resources

- [Example resource 1]([https://www.example.com](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH/hub)) - I originally made a very basic RPS game but after seeing the design on frontendmentor, I wanted to test my CSS skills and I also  refactor my code to use classes and objects, 
