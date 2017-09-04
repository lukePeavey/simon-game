import React from 'react'
import tinycolor from 'tinycolor2'
import Buttons from '../buttons/Buttons'
import CenterPanel from '../center-panel/CenterPanel'
import styled from 'glamorous'
import * as globals from '../../styles/global'

const Game = ({
  startGame,
  handleMouseDown,
  handleMouseUp,
  currentLevel,
  ...rest
}) =>
  <Container>
    <GameInterface id="game">
      <Buttons
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        {...rest}
      />
      <CenterPanel
        id="centerPanel"
        startGame={startGame}
        message={rest.message}
      />
    </GameInterface>
  </Container>

/**
|--------------------------------------------------
| Style Components
|--------------------------------------------------
*/
const Container = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh'
})

const GameInterface = styled.div({
  position: 'relative',
  width: '90vmin',
  height: '90vmin',
  maxWidth: '900px',

  borderRadius: '50%',
  backgroundColor: globals.bgColor,
  boxShadow: `inset -4px -5px 1px 0px rgba(255, 255, 255, 0.1)`
})

export default Game
