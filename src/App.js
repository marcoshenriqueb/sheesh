import React from 'react';
import './App.scss';
import Cover from './assets/img/cover.jpg';
import Logo from './assets/img/logo.png';

const App = () => (
  <div className="App">
    <section className="App-section Primary-bg">
      <img className="Cover" src={Cover} alt="Cover" />
      <div className="image">&nbsp;</div>
      <img className="Logo" src={Logo} alt="Sheesh" />
      <h3 className="cursive">
        Em breve novidades!
        <br />
        Acesse o nosso instagram.
      </h3>
      <a
        href="https://www.instagram.com/sheesh.burger/"
        target="_blank"
        rel="noopener noreferrer"
        className="Social-anchor"
      >
        <i className="fab fa-instagram" />
      </a>
      <span className="small">Rua Oliveira Fausto 29A, Botafogo, RJ</span>
      <span className="small">(21) 4116-1207</span>
    </section>
  </div>
);

export default App;
