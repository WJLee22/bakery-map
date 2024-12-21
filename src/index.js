import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyle.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//div.루트 엘리먼트에 렌더링
  <>
    <GlobalStyle />
    <App />
  </>
);

