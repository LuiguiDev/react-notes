import { Square } from "./Square"

export function WinnerModal({ winner, startAgain }) {
  const winnerTitle = winner === false ? 'Draw' : 'Won:';
  if (winner === null) return null;

  return(
  <section>
  {
    <section className="winner"> 
      <div className="text">
        <h2>{winnerTitle}</h2>
        {winner && <header className="win">
          <Square>{winner}</Square>
          </header>
        }
        <footer>
          <button onClick={startAgain}>Start again</button>
        </footer>
      </div>
    </section>
  }
  </section>
)
}