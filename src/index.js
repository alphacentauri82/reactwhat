import React from 'react';
import ReactDOM from 'react-dom';

import TheBros from './TheSistas';

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
    <TheBros />
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
