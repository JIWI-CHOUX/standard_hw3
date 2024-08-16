import React from 'react'

const Button = ({ children, onClick, color }) => {
    if (color) {
      return (
        <button
          onClick={onClick}
          style={{
            backgroundColor: color,
            color: "white",
          }}
        >
          {children}
        </button>
      );
    }
    return <button onClick={onClick}>{children}</button>;
  };
  

export default Button
