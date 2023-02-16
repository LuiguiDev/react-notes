// Everithing in vanilla JS goes here
import { WINNER_COMBOS } from './const'

export function checkWinner(board) {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;

    if(board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
      }
  }
}