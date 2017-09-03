import React, { Component } from 'react';
import { random, isEqual, sample, range } from 'lodash';
import { delay } from '../utils';
import Game from '../components/game/Game';

const buttons = [
  { id: 'green', color: '#0c9e1c', position: { y: 'top', x: 'left' } },
  { id: 'red', color: '#a91509', position: { y: 'top', x: 'right' } },
  { id: 'blue', color: '#0a5c96', position: { y: 'bottom', x: 'left' } },
  { id: 'yellow', color: '#bfa90c', position: { y: 'bottom', x: 'right' } }
];

class GameContainer extends Component {
  state = {
    currentLevel: 0,
    fullSequence: null,
    currentSequence: null,
    userSequence: null,
    sequenceIsPlaying: false,
    buttons: buttons,
    activeButtonId: null,
    message: 'welcome'
  };

  /**
   * Generate a new random sequence of 21 steps.
   */
  generateNewSequence(length = 21) {
    return range(0, length).map(() => sample(buttons).id);
  }

  /**
   * Plays the current sequence of steps that the user will need to repeat
   * @todo fix timing
   */
  playSequence = () => {
    const { currentSequence, currentLevel } = this.state;
    currentSequence.map((id, index) => {
      delay(index * 1000).then(() => {
        this.setState({ activeButtonId: id, sequenceIsPlaying: true });
        delay(500).then(() => {
          this.setState({
            sequenceIsPlaying: index < currentLevel - 1,
            activeButtonId: null
          });
        });
      });
    });
  };

  /**
   * Starts the next level after the user successfully enters a sequence of
   * steps. Each level level adds one more step to the sequence.
   */
  startNextLevel = (prevLevel = this.state.currentLevel) => {
    const currentLevel = prevLevel + 1;
    const fullSequence =
      prevLevel > 0 ? this.state.fullSequence : this.generateNewSequence();
    const delayTime = currentLevel === 1 ? 300 : 2000;
    const currentSequence = fullSequence.slice(0, currentLevel);
    const userSequence = [];
    const message = `Level ${currentLevel}`;

    this.setState({
      message,
      currentLevel,
      fullSequence,
      currentSequence,
      userSequence
    });
    delay(delayTime).then(() => this.playSequence());
  };

  startGame = () => {
    this.startNextLevel(0);
  };

  /**
  |--------------------------------------------------
  | Event Handlers
  |--------------------------------------------------
  */

  /**
   * The click handler is triggered manually using mousedown and mouseup.
   * Mousedown/up are used to manage the active state of the buttons.
   */
  handleButtonClick = event => {
    const { currentTarget: button } = event;
    let { currentSequence, userSequence, currentLevel } = this.state;
    console.info('BUTTON CLICK', button);
    const id = button.id;

    if (currentSequence) {
      userSequence = [...userSequence, id];
      if (
        !isEqual(currentSequence.slice(0, userSequence.length), userSequence)
      ) {
        console.info('GAME OVER. TRY AGAIN');
        this.startGame();
      } else if (userSequence.length === currentSequence.length) {
        console.info(`GOOD JOB. YOU MADE IT TO LEVEL ${currentLevel + 1}`);
        this.startNextLevel();
      } else {
        console.info(`CORRECT BUTTON`);
        this.setState({ userSequence, activeButtonId: id });
      }
    }
  };

  /**
   * Sets the active state of the clicked button, this will cause the button
   * to light up and the associated audio tone to play while the button is
   * being pressed.
   */
  handleMouseDown = event => {
    const { button: mouseButton, currentTarget: button } = event;
    const isPrimaryClick = mouseButton === 0;
    // Only proceed if this is a primary click/tap event (incomplete solution)
    if (isPrimaryClick) {
      console.info('BUTTON CLICK START', button);
      this.setState({ activeButtonId: button.id });
    }
  };

  /**
   * Removes active state, triggers the "click" handler if mousedown/up
   * fire on the same button.
   */
  handleMouseUp = event => {
    const { type, currentTarget } = event;
    const { activeButtonId } = this.state;
    console.info('BUTTON CLICK END', currentTarget);
    if (currentTarget.id && currentTarget.id === activeButtonId) {
      this.handleButtonClick(event);
    }
    // Removes active state
    delay(10).then(() => this.setState({ activeButtonId: null }));
  };

  /**
   * Renders the Game component, passing along state and event handlers.
   */
  render() {
    return (
      <Game
        handleMouseUp={this.handleMouseUp}
        handleMouseDown={this.handleMouseDown}
        startGame={this.startGame}
        {...this.state}
      />
    );
  }
}

export default GameContainer;
