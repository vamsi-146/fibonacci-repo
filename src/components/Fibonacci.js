import React, { useState } from 'react';

function Fibonacci() {
  const [num, setNum] = useState('');
  const [sequence, setSequence] = useState([]);

  const generateFibonacci = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  };

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = parseInt(num);
    if (isNaN(n) || n <= 0) {
      setSequence([]);
      return;
    }
    setSequence(generateFibonacci(n));
  };

  return (
    <div>
      <h2>Fibonacci Generator</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter number of terms: </label>
        <input type="number" value={num} onChange={handleChange} min="1" required />
        <button type="submit">Generate</button>
      </form>
      {sequence.length > 0 && (
        <div>
          <h3>Sequence:</h3>
          <p>{sequence.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default Fibonacci;
