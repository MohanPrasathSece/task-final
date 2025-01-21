import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>React Counter</h1>
      <div style={styles.counter}>{count}</div>
      <div>
        <button style={styles.button} onClick={increment}>
          Increment
        </button>
        <button style={styles.button} onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  counter: {
    fontSize: '3rem',
    margin: '20px 0',
    color: '#333',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    margin: '0 10px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
};

export default App;
