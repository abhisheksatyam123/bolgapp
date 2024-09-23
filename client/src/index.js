import React from 'react';
import ReactDOM from 'react-dom/client';
import {App,Temp2} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const temp2 = ReactDOM.createRoot(document.getElementById('temp2'));
temp2.render(
  <React.StrictMode>
    <Temp2/>
  </React.StrictMode>
);
