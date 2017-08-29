import React from 'react'
import tinycolor from 'tinycolor2'
import Button from '../button/Button'
import Controls from '../controls/Controls'
import './Game.css'

const Game = ({startGame, ...rest}) => (
  <div className="container" onMouseUp={rest.handleClick}>
    <div className="Game">
    <Buttons {...rest} />
    <Controls />
    </div>
  </div>
)

const Buttons = ({buttons, ...rest}) => (
  <div className="buttons">
    {buttons.map((props, index) =>
      <Button {...props} {...rest} key={props.id}
      />
    )}
  </div>
)
const styles = {
}
export default Game
