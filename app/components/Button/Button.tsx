import React from 'react';
import './Button.css';

export const Button = () => {
  let btnText: string = "Download";
  return (
    <button className="Button">
      {btnText}
    </button>
  );
}
