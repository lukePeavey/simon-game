import React from 'react';

const ResetIcon = ({ color }) => {
  return (
    <svg
      id="restart"
      x="0px"
      y="0px"
      width="497.25px"
      height="497.25px"
      viewBox="0 0 497.25 497.25"
      style={{ fill: '#eee', maxWidth: '100%' }}
    >
      <g>
        <path d="M248.625,89.25V0l-127.5,127.5l127.5,127.5V140.25c84.15,0,153,68.85,153,153c0,84.15-68.85,153-153,153
 c-84.15,0-153-68.85-153-153h-51c0,112.2,91.8,204,204,204s204-91.8,204-204S360.825,89.25,248.625,89.25z" />
      </g>
    </svg>
  );
};

ResetIcon.defaultProps = {
  color: '#eee'
};

export default ResetIcon;
