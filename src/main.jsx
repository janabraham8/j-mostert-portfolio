import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Mounts the React engine directly into the root HTML element of your project
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);