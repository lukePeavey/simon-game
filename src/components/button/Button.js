import styled from 'glamorous';
import PropTypes from 'prop-types';
import colorTool from 'tinycolor2';
import { pascalCase } from '../../utils';
import { values } from 'lodash';
import * as globals from '../../styles/global';

/**
 * The large colored buttons that make up the game interface.
 */
const Button = styled.button(
  {
    position: 'absolute',
    width: `calc(50% - ${globals.buttonSpacing * 1.5}px)`,
    height: `calc(50% - ${globals.buttonSpacing * 1.5}px)`,
    boxShadow: `inset 0 0 1px 2px rgba(0,0,0,0.33),
    inset 0 0 1px 4px rgba(0,0,0,0.13)`,
    border: 'none',
    [':focus, :active']: {
      outline: 'none'
    }
  },
  ({ color, position, active }) => ({
    // Sets position, border radius, and background color based on props
    [position.x]: globals.buttonSpacing,
    [position.y]: globals.buttonSpacing,
    [`border${pascalCase(values(position).join('-'))}Radius`]: '100%',
    backgroundColor: active
      ? colorTool(color).brighten(20).saturate(50).toString()
      : color
  })
);

Button.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    x: PropTypes.oneOf(['left', 'right']).isRequired,
    y: PropTypes.oneOf(['top', 'bottom']).isRequired
  }).isRequired
};

export default Button;
