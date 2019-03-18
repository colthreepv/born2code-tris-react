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

export default TrisCell
