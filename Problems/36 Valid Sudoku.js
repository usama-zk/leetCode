var isValidSudoku = function (board) {
  const N = 9;
  let rows = Array.from({ length: N }, () => new Set());
  let cols = Array.from({ length: N }, () => new Set());
  let box = Array.from({ length: N }, () => new Set());
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (rows[r].has(board[r][c])) {
        return false;
      } else if (board[r][c] != ".") {
        rows[r].add(board[r][c]);
      } else {
        continue;
      }

      if (cols[c].has(board[r][c])) {
        return false;
      } else if (board[r][c] != ".") {
        cols[c].add(board[r][c]);
      } else {
        continue;
      }

      boardId = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (box[boardId].has(board[r][c])) {
        return false;
      } else if (box[r][c] != ".") {
        box[boardId].add(board[r][c]);
      } else {
        continue;
      }
    }
  }
  return true;
};
