import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import "../src/styles/styles.css"

ReactDOM.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);