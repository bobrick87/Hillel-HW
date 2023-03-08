import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './modules/Header/Header';
import reportWebVitals from './reportWebVitals';
import BodyPart from './modules/BodyPart/BodyPart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <BodyPart />

  </React.StrictMode>
);

reportWebVitals();
