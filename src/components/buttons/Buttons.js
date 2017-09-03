import React from 'react';
import { css } from 'glamor';
import Button from '../button/Button';

// Container for the colored buttons.
const Buttons = ({ buttons, ...props }) =>
  <div id="buttons">
    {buttons.map(button =>
      <Button
        onMouseDown={props.handleMouseDown}
        onMouseUp={props.handleMouseUp}
        disabled={props.sequenceIsPlaying}
        className={'button'}
        active={props.activeButtonId === button.id}
        key={button.id}
        {...button}
      />
    )}
  </div>;

export default Buttons;
