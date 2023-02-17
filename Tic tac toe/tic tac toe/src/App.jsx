import { useState } from "react";
import { checkWinner } from "./logic";
import { Square } from './Components/Square'
import { WinnerModal } from "./Components/WinnerModal";
import { TURNS } from "./const";
import confetti from "canvas-confetti";

function App() {
  const [board, setBoard] = useState(() => {
    const matchSaved = window.localStorage.getItem('board');
    return matchSaved ? JSON.parse(matchSaved) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnSaved = window.localStorage.getItem('turn');
    return JSON.parse(turnSaved) ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    const newBoard = [...board]; // Props & state must never be changed, so we make a copy.
    // the state should only be changed by setState.

    if(!newBoard[index] && !winner){
      newBoard[index] = turn;
      setBoard(newBoard)

      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn);

      const newWinner = checkWinner(newBoard);

      // stringify keeps array notation, therefore we can rcover the array with JSON.parse()
      window.localStorage.setItem('board', JSON.stringify(newBoard));
      window.localStorage.setItem('turn', JSON.stringify(newTurn));

      if(newWinner){
        confetti();
        setWinner(newWinner);
      }else if(newBoard.every(e => e !== null && !winner)){
        setWinner(false) // Draw
      }
    }else{
      alert('That square is fill')
    }

  };

  function startAgain() {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn(TURNS.X);
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
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
      <WinnerModal winner={winner} startAgain={startAgain} />
    </main>
  )
}

export default App