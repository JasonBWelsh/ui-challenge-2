import React, { useState } from 'react';
import './App.css';
import Pill from './components/Pill.js';

function App() {
  const [count, setCount] = useState(0);

  const handleCountChange = (delta) => {
    console.log('handleCountChange');
    setCount(count + delta);
  };

  return (
    <div className="App">
      <Pill count={count} handleCountChange={handleCountChange} />
    </div>
  );
}

export default App;
