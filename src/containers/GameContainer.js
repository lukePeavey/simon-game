import React, { Component } from 'react'
import { random, isEqual, sample, range } from 'lodash'
import delay from '../utils/delay'
import Game from '../components/game/Game'

const buttons = [
  { id: 'green', color: '#37cf48' },
  { id: 'red', color: '#fa2513' },
  { id: 'blue', color: '#0187e6' },
  { id: 'yellow', color: '#fef224' }
]

class GameContainer extends Component {
  
  state = {
    currentLevel: 0,
    currentStep: 0,
    sequence: null,
    sequenceIsPlaying: false,
    buttons: buttons,
    activeButtonId: 'red',
    gameStarted: false
  }

  getRandomSequence(length) {
    return range(0, length).map(() => sample(buttons))
  }

  startSequence(steps = this.state.current) {
    const sequence = this.getRandomSequence(steps)
    
    this.setState({ sequenceIsPlaying: true, sequence })
    
    sequence.map((button, index) => {
      delay(index * 1500).then(() => {
        this.setState({activeButtonId: button.id})
        delay(500).then(() => {
          this.setState({
            sequenceIsPlaying: index !== (steps - 1),
            activeButtonId: null
          })
        })
      })
    })
  }
  /**
  |--------------------------------------------------
  | Event Handlers
  |--------------------------------------------------
  */
  handleClick = event => {
    console.log(event.target)
    const { type, currentTarget } = event
    const id = currentTarget.id
    if (type === 'mousedown') {
      this.setState({activeButtonId: id})
    } else {
      delay(25).then(() => this.setState({activeButtonId: null}))
    }
  }

  startGame = () => {
    this.startSequence(10)
  }

  render() {
    return (
      <Game
        activeButtonId={this.state.activeButtonId}
        buttons={this.state.buttons}
        handleClick={this.handleClick}
        startGame={this.startGame}
      />
    )
  }
}

export default GameContainer
