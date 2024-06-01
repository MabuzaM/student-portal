import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import App from './page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter
    basename='page'>
    <App />
  </HashRouter>
);

reportWebVitals();
