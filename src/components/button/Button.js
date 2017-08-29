import React from 'react'
import colorTool from 'tinycolor2'
import './Button.css'

const Button = ({ activeButtonId, handleClick, sequenceIsPlaying, ...rest }) => {
  const active = activeButtonId === rest.id
  return (
    <button
      onMouseDown={handleClick}
      onMouseUp={handleClick}
      disabled={sequenceIsPlaying}
      className={`Button ${active ? 'active' : ''}`}
      {...rest}
    />
  )
}

export default Button
