//import React from 'react';
//import ReactDOM, { createRoot } from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
// const root = ReactDOM.createRoot(document.getElementById('root'));

import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
    <App />
);