import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// @TODO:
// 1. Stopwatch component
// 2. Add alert when timer reaches 0
// 3. Host
ReactDom.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App/>
  </Router>,
  document.getElementById('root')
);
