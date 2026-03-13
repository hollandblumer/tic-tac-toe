let board = Array(9).fill("");
const player1 = "O";
// Adding player 2
const player2 = "X";
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
  // need to decide who goes first, in this case it's player 1
  currentPlayer = player1;
  status.textContent = "Player 1's turn! They are O";
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
  const square = event.currentTarget;
  const squareId = square.id;
  // Preventing someone from clicking a square that has already been clicked or clicking after the game is finished
  if (board[squareId] !== "" || finished) {
    return;
  }
  // switching from player1 to currentPlayer now that there are 2 people
  board[squareId] = currentPlayer;
  square.innerHTML = `<span class="text">${currentPlayer}</span>`;
  // console.log(board);
  const winner = checkWin(currentPlayer);
  if (winner) {
    // need new status now that there are 2 players
    if (currentPlayer === player1) {
      status.textContent = "Player 1 wins!";
    } else {
      status.textContent = "Player 2 wins!";
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
    currentPlayer = player2;
    status.textContent = "Player 2's turn! They are X";
  } else {
    currentPlayer = player1;
    status.textContent = "Player 1's turn! They are O";
  }
}
