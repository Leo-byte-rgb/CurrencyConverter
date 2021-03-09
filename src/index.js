import React from 'react';
import ReactDOM from 'react-dom';
import  Routes  from './Routes'
import DolarProvider from './Contexts/DolarContext'
import './styles/global.css';


ReactDOM.render(
  <React.StrictMode>
    <DolarProvider>
      <Routes />
    </DolarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

