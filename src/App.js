import React, { Component } from 'react';
import './App.scss';
import Cover from './assets/img/cover.jpg';
import Logo from './assets/img/logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathChosen: false,
    };
  }

  render() {
    const { pathChosen } = this.state;

    if (!pathChosen) {
      return (
        <div className="App">
          <button
            type="button"
            onClick={() => { this.setState({ pathChosen: true }); }}
            className="App-section half Yellow-bg"
          >
            <h3 className="cursive">
              I
              {"'"}
              m a burger and chips person, such a cheap date.
            </h3>
          </button>
          <button
            type="button"
            onClick={() => { location.href = 'https://www.google.com/search?source=hp&ei=1qG-W5OvEcfFwATh85iYDg&q=fancy+places&oq=fancy+places&gs_l=psy-ab.3..0i19k1l10.3219.5489.0.5767.13.12.0.0.0.0.323.1624.0j7j1j1.9.0....0...1c.1.64.psy-ab..4.9.1622.0..0j0i131k1.0.750sJRuZW9w'; }} //eslint-disable-line
            className="App-section half Purple-bg"
          >
            <h3 className="cursive">
              I
              {"'"}
              d rather fancy places.
            </h3>
          </button>
        </div>
      );
    }

    return (
      <div className="App">
        <section className="App-section Primary-bg">
          <img className="Cover" src={Cover} alt="Cover" />
          <div className="image">&nbsp;</div>
          <img className="Logo" src={Logo} alt="Sheesh" />
          <h3 className="cursive">
            Em breve novidades!
            <br />
            Acesse as nossas redes.
          </h3>
          <div>
            <a
              href="https://www.instagram.com/sheesh.burger/"
              target="_blank"
              rel="noopener noreferrer"
              className="Social-anchor"
            >
              <i className="fab fa-instagram" />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a
              href="https://www.facebook.com/sheeshburger/"
              target="_blank"
              rel="noopener noreferrer"
              className="Social-anchor"
            >
              <i className="fab fa-facebook-square" />
            </a>
          </div>
          <span className="small">Rua Oliveira Fausto 29A, Botafogo, RJ</span>
          <span className="small">(21) 4116-1207</span>
        </section>
      </div>
    );
  }
}

export default App;
