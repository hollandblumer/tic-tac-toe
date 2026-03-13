let board = Array(9).fill("");
const player1 = "O";
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
  status.textContent = "Your turn! You are O";
  // Looping through each square, clearing the board, and attaching the click event so the player can make a move
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
    // Removing any existing click event listeners in case the game resets to avoid duplicates
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
  board[squareId] = player1;
  //event.target.innerText = player1;

  //changed above line to accommodate the svg filter
  square.innerHTML = `<span class="text">${player1}</span>`;
  // console.log(board);
  const winner = checkWin(player1);
  if (winner) {
    status.textContent = "You win";
    finished = true;
    return;
  }
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
