import { useState } from "react";
import confetti from "canvas-confetti";

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
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const WINNER_COMBOS = [
    // Filas
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columnas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonales
    [0, 4, 8],
    [2, 4, 6]
  ]

  function checkWinner(board) {
    if(board.length >= 5){
      for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;

        if(
          board[a] &&
          board[a] === board[b] &&
          board[a] === board[c]
          ) {
            setWinner(board[a])
            confetti()
           }else if(board.every(e => e != null) && !winner) {
            setWinner(false)
           }
      }
    }else{
      console.log('not enoguh steps')
    }
  }

  const updateBoard = (index) => {
    const newBoard = [...board]; // Props & state must never be changed, so we make a copy.
    // the state should only be changed by setState.

    if(!newBoard[index] && !winner){
      newBoard[index] = turn;
      setBoard(newBoard);

      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn)

      checkWinner(newBoard)
    }else{
      alert('That square is fill')
    }

  };

  function startAgain() {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn(TURNS.X);
  };

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
                checkWinner={checkWinner}
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
      <section>
        {
          // Conditional rendering
          winner !== null && (
            // modal
            <section className="winner"> 
              <div className="text">
                <h2>
                  {
                    winner === false ? 'Draw' : 'Won:'
                  }
                </h2>
                {winner && <header className="win">
                  <Square>{winner}</Square>
                </header>}
                <footer>
                  <button onClick={startAgain}>Start again</button>
                </footer>
              </div>
            </section>
          )
        }
      </section>
    </main>
  )
}

export default App