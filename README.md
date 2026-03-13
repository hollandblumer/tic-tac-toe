# Tic Tac Toe

This repository is organized by progression, starting with just a human clicking around the board, then moving to two human players, then human vs computer, and finally human vs AI.

I structured the project this way because I really had to build my understanding step by step. I went back to basics and even started by playing Tic Tac Toe on paper again.

Each folder represents a stage of the project as I added more logic and functionality.

---

## Version 1 – One person clicks on the board

The first version focuses purely on interaction with the board. At this stage the goal was simply to allow a human to click squares and have the board respond.

Thought through the following:
- Rendering the board with CSS Grid
- Attaching click event listeners to each square
- Tracking board state using an array
- Preventing invalid clicks
- Detecting wins
- Detecting ties
- Resetting the board

The main focus here is understanding event-driven programming and how browser interactions connect to game logic.

## Testing

This version was mainly tested manually by interacting with the board in the browser to verify that clicks, win detection, and resets worked as expected.

---

## Version 2 – Two person game

In this version I introduce another person to the game.

Thought through the following:
- Tracking the current player
- Switching turns
- Detecting ties


## Testing

I also included a small test file that checks a tie scenario to confirm the board correctly detects when all squares are filled without a winner.

---

## Version 3 – Person vs Computer

In this version I'm replacing Player 2 with a computer opponent but the computer selects randomly.

Thought through the following:
- Tracking the current player
- Assuming person goes first and is player 1
- Switching turns
- Detecting ties


## Testing

I also included a small test file that checks a tie scenario to confirm the board correctly detects when all squares are filled without a winner.

---

## Version 4 – Person vs Minimax algorithm

This version builds off of Version 3 by replacing the random computer move selection with the minimax algorithm. I studied more about this algorithm here https://www.geeksforgeeks.org/artificial-intelligence/mini-max-algorithm-in-artificial-intelligence/ and watched The algorithm has a base of case of https://www.youtube.com/watch?v=5y2a0Zhgq0U&t=24s.

Instead of choosing any open square, the computer now evaluates every possible move and scores the outcome of the game tree.
The base cases I used were:
- 1 if the computer wins
- -1 if the person wins
- 0 if the game ends in a tie

The main things I had to think through here were:
- Writing recursive game logic
- Defining base cases for win, loss, and tie
- Pulling functionality like available squares out of computerMove()
- Remembering to reset the board after simulating potential moves
- Making sure the computer always chooses the best possible move

I included an image of a scenario where it's the computer's move next, and I worked through the recursion logic (v4-notes.png).

## Testing

For testing here, I tried to win multiple times but couldn't which is a good sign.
---

## Future improvements

I could add a delay when the computer goes to make it look like it's thinking.