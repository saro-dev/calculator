import React from 'react';

const Button = ({ label, onClick }) => (
  <button className="button" onClick={() => onClick(label)}>
    {label}
  </button>
);

export default Button;
