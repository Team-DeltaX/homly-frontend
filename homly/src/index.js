import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// create globle variable for all file name API_BASE_URL
global.API_BASE_URL = 'http://localhost:8080';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


