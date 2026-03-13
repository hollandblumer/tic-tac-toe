function testCheckTie(){
    const board = ["X","O","X","X","O","O","O","X","X"];
    return board.every(square => square !== "");
}

console.assert(testCheckTie() === true, "Tie detection failed");