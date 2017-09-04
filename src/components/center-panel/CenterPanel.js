import React from 'react'
import styled from 'glamorous'
import Title from '../title/Title'
import * as globals from '../../styles/global'
import PowerButton from '../power-button/PowerButton'
import LevelDisplay from './LevelDisplay'

/**
 * The circular area in the center of the game interface.
 * In the original design, this area contains logo, on/off switch, and a
 * digital display that indicates the current level.
 */
const CenterPanel = ({ startGame, message, level }) =>
  <PanelWrapper id="centerPanel">
    <PanelContent>
      <PowerButton onClick={startGame} />
      <Title>Simon</Title>
      <LevelDisplay>
        {message}
      </LevelDisplay>
    </PanelContent>
  </PanelWrapper>

const PanelWrapper = styled.div({
  position: 'absolute',
  zIndex: 1,
  left: '50%',
  top: '50%',
  transform: ' translate(-50%, -50%)',
  borderRadius: '50%',
  // The box shadow on the center panel is used to simulate the inset
  // shadow on the inner edge of the buttons, giving them a bit of depth.
  // (This is kind of hacky, svg shapes for the buttons would prob be better
  boxShadow: `0 0 1px 2px rgba(0,0,0,0.33),
  0 0 1px 4px rgba(0,0,0,0.13)`,

  // The pseudo elements hide the shadow in between the buttons.
  // @todo - avoid repeating shared pseudo element styles. Placing shared
  // styles in a "&::before, &::after" block doesn't work for some reason.
  ['::before']: {
    content: "''",
    display: 'block',
    position: 'absolute',
    top: -5,
    left: `calc(50% - ${globals.buttonSpacing / 2}px)`,
    height: 'calc(100% + 10px)',
    width: globals.buttonSpacing,
    backgroundColor: globals.bgColor
  },
  ['::after']: {
    content: "''",
    display: 'block',
    position: 'absolute',
    top: -5,
    left: `calc(50% - ${globals.buttonSpacing / 2}px)`,
    height: 'calc(100% + 10px)',
    width: globals.buttonSpacing,
    backgroundColor: globals.bgColor,
    transform: ' rotate(90deg)'
  }
})

const PanelContent = styled.div({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30vmin',
  height: '30vmin',
  backgroundColor: globals.bgColor,
  borderRadius: 'inherit'
})
export default CenterPanel
