import React from 'react';
import './App.scss';
import Logo from './assets/img/logo.png';
import Burger1 from './assets/img/lifestyle1.jpg';
import Burger3 from './assets/img/burger2.jpg';

const App = () => (
  <div className="App">
    <header className="header">
      <img className="Logo" src={Logo} alt="Sheesh" />
      <nav className="nav">
        <a href="#franquia" className="nav-item">Vire um franqueado!</a>
      </nav>
    </header>
    <section className="header-image">
      <h2 className="title title-small">Siga as nossas redes</h2>
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
      <span className="small primary-font">rua oliveira fausto 29a, botafogo, rj</span>
      <span className="small primary-font">(21) 4116-1207</span>
    </section>
    <section className="App-section Primary-bg">
      <h2 className="title">Por quê?</h2>
      <p className="storystelling sheesh-border border-padding">
        O SHEESH! foi criado com o propósito de oferecer um hambúrguer artesanal
        de qualidade, por um preço justo. Fazemos uma escolha criteriosa de cada
        fornecedor e da origem dos alimentos. Além disso não usamos carne congelada
        e produzimos nossos blends quase que diaramente.
        <br />
        <br />
        Venha conhecer o nosso cantinho em Botafogo! Ahh, não esqueça de pronunciar
        certinho, é Xix que fala ;)
      </p>
      <div className="image-container">
        <img className="image" src={Burger1} alt="Sheesh" />
        <img className="image" src={Burger3} alt="Sheesh" />
      </div>
    </section>
    <section className="App-section Primary-bg">
      <h2 className="title">Nossa loja</h2>
      <p>http://neptunian.github.io/react-photo-gallery/</p>
    </section>
  </div>
);

export default App;
