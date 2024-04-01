import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

global.API_BASE_URL="http://localhost:8080";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


