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
  // if (status)
  status[which] = turn
  (<div data-x={0}></div>)

  // se era il turno di cerchio, ora lo sarà di croce
  return turn === 'CIRCLE' ? 'CROSS' : 'CIRCLE'
}

/**
 * POSSIBLE STATUS VALUES:
 * 'EMPTY' | 'CROSS' | 'CIRCLE'
 */

function App (props) {
  const { status, turn } = props

  const cellOnClick = (which) => {
    // ritorna una funzione dedicata all'i-esimo cella
    return () => {
      const nextTurn = clickCell(which, status, turn)
      redraw(status, nextTurn)
    }
  }

  const cells = status.map((val, idx) => {
    return <TrisCell key={idx} value={val} onClick={cellOnClick(idx)}/>
  })

  return (
    <div>
      <div className="center-container">
        <h1>Hello World</h1>
      </div>
      {/* tris starts here */}
      <div className="center-container">
        <div className="tris-container">
          {cells}
        </div>
      </div>
    </div>
  )
}

function redraw (status, turn) {
  ReactDOM.render(<App status={status} turn={turn}/>, document.getElementById('react-root'))
}

function init () {
  const status = []
  for (let index = 0; index < 9; index++) status.push('EMPTY')
  const turn = 'CIRCLE'
  redraw(status, turn)
}

init()
