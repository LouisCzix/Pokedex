import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Routes';
import './index.module.scss';
import './App.module.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);


