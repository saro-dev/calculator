import React, { useState } from 'react';
import Button from './components/Button';
import Row from './components/Row';
import calculate from './util/calculator';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = calculate(input);
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" value={input} readOnly className="input-display" />
        <Row>
          <Button label="7" onClick={handleButtonClick} />
          <Button label="8" onClick={handleButtonClick} />
          <Button label="9" onClick={handleButtonClick} />
          <Button label="/" onClick={handleButtonClick} />
        </Row>
        <Row>
          <Button label="4" onClick={handleButtonClick} />
          <Button label="5" onClick={handleButtonClick} />
          <Button label="6" onClick={handleButtonClick} />
          <Button label="-" onClick={handleButtonClick} />
        </Row>
        <Row>
          <Button label="1" onClick={handleButtonClick} />
          <Button label="2" onClick={handleButtonClick} />
          <Button label="3" onClick={handleButtonClick} />
          <Button label="+" onClick={handleButtonClick} />
        </Row>
        <Row>
          <Button label="C" onClick={handleButtonClick} />
          <Button label="0" onClick={handleButtonClick} />
          <Button label="=" onClick={handleButtonClick} />
          <Button label="*" onClick={handleButtonClick} />
        </Row>
      </div>
    </div>
  );
}

export default App;
