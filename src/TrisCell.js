import * as React from 'react'

export class TrisCell extends React.Component {
  render () {
    const { value, onClick } = this.props

    const possibleValues = {
      'EMPTY': '',
      'CROSS': '❌',
      'CIRCLE': '🔵',
    }

    return (
      <div className="tris-cell" onClick={onClick}>{possibleValues[value]}</div>
    )
  }
}

export default TrisCell
