import React from 'react';

import './Button.scss';

const Button = ({
                  type = 'submit',
                  className = 'btn',
                  onClick,
                  children
                }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;