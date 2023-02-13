import { useState } from "react";

const TURNS = {
  X : 'x',
  O : 'o'
}
const Square = ({children, updateBoard, index, isSelected}) => { 
  function manageClick() {
    updateBoard(index)
  }
  const className = `square ${isSelected? 'is-selected' : ''}`

  return (
    <div className={className} onClick={manageClick}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X)

  function checkWinner(board) {
    for (let i = 0; i < board.length; i++) {
      let line = Array(3).fill(null)
      const current = board[i];
      

    }
  }

  const updateBoard = (index) => {
    const newBoard = [...board]; // Props & state must never be changed, so we make a copy.
    // the state should only be changed by setState.

    if(!newBoard[index]){
      newBoard[index] = turn;
      setBoard(newBoard);

      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn)

      console.log(newBoard)
    }else{
      alert('That square is fill')
    }

  }

  return (
    <main className="board">
      <h1>tic tac toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return(
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App