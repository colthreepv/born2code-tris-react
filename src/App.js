import { isGameOver } from './tris'
import TrisCell from './TrisCell'
import * as ReactDOM from 'react-dom'
import * as React from 'react'

// quando l'utente clicca una cella del tris
// viene modificato lo stato, e viene ritornato il nuovo turno
function clickCell (which, status, turn) {
  if (status[which] !== 'EMPTY') return turn
  status[which] = turn

  // se era il turno di cerchio, ora lo sarà di croce
  return turn === 'CIRCLE' ? 'CROSS' : 'CIRCLE'
}

/**
 * POSSIBLE STATUS VALUES:
 * 'EMPTY' | 'CROSS' | 'CIRCLE'
 */
export class App extends React.Component {
  render () {
    const { status, turn, winner } = this.props

    const cellOnClick = (which) => {
      if (winner) return () => {}
      // ritorna una funzione dedicata all'i-esimo cella
      return () => {
        const nextTurn = clickCell(which, status, turn)
        redraw(status, nextTurn)
      }
    }

    const cells = status.map((val, idx) => {
      return <TrisCell key={idx} value={val} onClick={cellOnClick(idx)}/>
    })

    const userMessage = winner != null ?
      (<div className="user-message">
        <h1>Ha vinto il giocatore: {winner}</h1>
        <h2 onClick={init}>Ricomincia 💸</h2>
      </div>) : null

    return (
      <div>
        {/* tris starts here */}
        <div className="center-container">
          <div className="tris-container">
            {cells}
          </div>
        </div>
        {userMessage}
      </div>
    )

  }
}

function redraw (status, turn) {
  const winner = isGameOver(status)
  ReactDOM.render(<App status={status} turn={turn} winner={winner}/>, document.getElementById('react-root'))
}

function init () {
  const status = []
  for (let index = 0; index < 9; index++) status.push('EMPTY')
  const turn = 'CIRCLE'
  redraw(status, turn)
}

export default App
export { redraw, init }
