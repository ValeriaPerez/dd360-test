import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkProvider } from './hooks';
import { initStorage } from './utils';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';
const isDD360 = localStorage.getItem('dd360');

if (!isDD360) {
  initStorage();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DarkProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DarkProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
