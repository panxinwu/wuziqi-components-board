import React from 'react'
import Step from 'wuziqi-components-step'
import PropTypes from 'prop-types'
import './styles.css'

const DIM = 10

class Board extends React.Component {
  static propTypes = {
    squares: PropTypes.func,
    onClick: PropTypes.func
  }
  renderSquare(i, j) {
    return (
      <Step
        value={this.props.squares[i][j]}
        onClick={() => this.props.onClick(i, j)}
      />
    )
  }

  renderSquareRow(i) {
    let returnValue = []
    for (let j = 0; j < DIM; j++) {
      returnValue.push(<Step
        value={this.props.squares[i][j]}
        onClick={() => this.props.onClick(i, j)}
        key={j}
      />)
    }
    return returnValue
  }

  renderSquares() {
    let returnValue = []
    for (let i = 0; i < DIM; i++) {
      returnValue.push(<div
        className='board-row' key={i}>
        {this.renderSquareRow(i)}
      </div>)
    }
    return returnValue
  }

  render() {
    return (
      <div>
        {this.renderSquares()}
      </div>
    )
  }
}

export default Board
