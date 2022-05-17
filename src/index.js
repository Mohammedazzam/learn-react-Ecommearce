import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseContextProvider } from './component/UseContextExample';

//4-Wrap all app with Provider
ReactDOM.render(
  <UseContextProvider>
    <App />
  </UseContextProvider>
  , document.getElementById('root'))



