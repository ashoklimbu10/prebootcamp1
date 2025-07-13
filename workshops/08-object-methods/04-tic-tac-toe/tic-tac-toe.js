// YOUR CODE BELOW
let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],

  move(player, row, column) {
    
    if (this.board[row][column] === null) {
      this.board[row][column] = player;
    }
   
    return this.board;
  },

  clear() {
    for (let i = 0; i< this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        this.board[i][j] = null;
      }
    }
    return this.board;
  },
};