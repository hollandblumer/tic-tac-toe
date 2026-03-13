let board = Array(9).fill("");
const player1 = "O";
// Replacing player2 in v2 with computer
const computer = "X";
// Deciding that player 1 goes first
let currentPlayer = player1;

const squares = document.querySelectorAll(".square");
const status = document.getElementById("status");
const winningCombinations = [
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
];
let finished = false;
startGame();

function startGame() {
  board = Array(9).fill("");
  // console.log(board);
  finished = false;
  // The person still goes first
  currentPlayer = player1;
  status.textContent = "Your turn! You are O";
  // Looping through each square, clearing the board, and attaching the click event so the player can make a move
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
    // Removing any exisiting click event listeners in case the game resets to avoid duplicates
    squares[i].removeEventListener("click", handleSquareClick);
    // Now I'm re-adding it
    squares[i].addEventListener("click", handleSquareClick);
  }
}

function handleSquareClick(event) {
  // Unlike v2, we do not want the computer to click
  if (currentPlayer !== player1) {
    return;
  }
  const square = event.currentTarget;
  const squareId = square.id;
  // Preventing someone from clicking a square that has already been clicked or clicking after the game is finished
  if (board[squareId] !== "" || finished) {
    return;
  }

  board[squareId] = currentPlayer;
  square.innerHTML = `<span class="text">${currentPlayer}</span>`;
  // console.log(board);
  const winner = checkWin(currentPlayer);
  if (winner) {
    // need new status now that there are 2 players
    if (currentPlayer === player1) {
      status.textContent = "You win!";
    } else {
      status.textContent = "Computer wins!";
    }
    finished = true;
    return;
  }
  // It is now possible for there to be a tie, so we need to check tie. Basically if the board is filled and no winning combo is found there is a tie.
  if (checkTie()) {
    status.textContent = "It's a tie!";
    finished = true;
    return;
  }
  // Now after all these checks, it's the next player's turn so I'm adding a function that switches to the next player
  switchPlayer();
  // now it's the computer's turn to move
  computerMove();
}

function checkWin(player) {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] === player && board[b] === player && board[c] === player) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  return board.every((square) => square !== "");
}

function switchPlayer() {
  if (currentPlayer === player1) {
    currentPlayer = computer;
    status.textContent = "Computer's turn! They are X";
  } else {
    currentPlayer = player1;
    status.textContent = "Your turn! You are O";
  }
}

function computerMove() {
  // need to check what squares are available to select
  let availableSquares = [];

  // loop through all the squares and see which ones are empty, if empty add to available squares array
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      availableSquares.push(i);
    }
  }

  const randomIndex = Math.floor(Math.random() * availableSquares.length);
  const squareId = availableSquares[randomIndex];
  board[squareId] = computer;
  document.getElementById(squareId).innerHTML =
    `<span class="text">${computer}</span>`;
  const winner = checkWin(currentPlayer);
  if (winner) {
    // need new status now that there are 2 players
    if (currentPlayer === player1) {
      status.textContent = "You win!";
    } else {
      status.textContent = "Computer wins!";
    }
    finished = true;
    return;
  }

  if (checkTie()) {
    status.textContent = "It's a tie!";
    finished = true;
    return;
  }

  switchPlayer();
}
