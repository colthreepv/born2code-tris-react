function TrisCell (props) {
  const { value, onClick } = props

  const possibleValues = {
    'EMPTY': '',
    'CROSS': '❌',
    'CIRCLE': '🔵',
  }

  return (
    <div className="tris-cell" onClick={onClick}>{possibleValues[value]}</div>
  )
}

// quando l'utente clicca una cella del tris
// viene modificato lo stato, e viene ritornato il nuovo turno
function clickCell (which, status, turn) {
  if (status[which] !== 'EMPTY') return turn
  status[which] = turn

  // se era il turno di cerchio, ora lo sarà di croce
  return turn === 'CIRCLE' ? 'CROSS' : 'CIRCLE'
}

function compara3 (status, i1, i2, i3) {
  if (status[i1] === 'EMPTY') return undefined
  if (
    status[i1] === status[i2]
    && status[i2] === status[i3]
  ) return status[i1]
}

/**
 * Torna un valore 'CIRCLE' o 'CROSS' o undefined
 * @param {string[]} status
 */
function isGameOver (status) {
  const vincitore = [
    // controllo se la vittoria è sulle righe
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // controllo se la vittoria è sulle colonne
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // controllo se la vittoria è sulle diagonali
    [0, 5, 8],
    [2, 5, 6],
  ].reduce((vincitore, val) => {
    if (vincitore != null) return vincitore
    return compara3(status, val[0], val[1], val[2])
  }, undefined)

  return vincitore
}

/**
 * POSSIBLE STATUS VALUES:
 * 'EMPTY' | 'CROSS' | 'CIRCLE'
 */
function App (props) {
  const { status, turn, winner } = props

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

init()
