import React from 'react';
import ReactDOM from 'react-dom';

import TheBros from './TheSistas';
import Instructions from './Components/Instructions'

import './styles.css';

const App = () => (
  <div className="App container">
    <h1 className="text-center">
      <i class="fas fa-heart" />
      &nbsp;
      <span className="titulo">ReactSistas/GurlPower</span>
      &nbsp;
      <i class="fas fa-venus" />
    </h1>
    <Instructions/>
    <TheBros />
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
