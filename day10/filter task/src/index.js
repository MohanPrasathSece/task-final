// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './ProductListStyle.css'; // Optional, if you want to add CSS
import App from './App'; // Your main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
