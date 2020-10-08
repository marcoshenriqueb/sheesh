import React from 'react';
import Slider from 'react-slick';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './App.scss';
import Logo from './assets/img/logo.png';
import Menu from './assets/img/menu.svg';
import CloseIcon from './assets/img/close.svg';
import Hero from './assets/img/hero.jpeg';
import Burger1 from './assets/img/sheesh.jpg';
import Burger2 from './assets/img/classic.jpg';
import Burger3 from './assets/img/provolone.jpg';
import Burger4 from './assets/img/homus.jpg';
import Burger5 from './assets/img/egg.jpg';
import Burger6 from './assets/img/DSC_3424.jpg';
import Burger7 from './assets/img/DSC_3213.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      smallScreen: false,
      isMenuActive: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    const isSmall = window.innerWidth < 768;
    const { smallScreen } = this.state;
    if (isSmall !== smallScreen) {
      this.setState({ smallScreen: window.innerWidth < 768 });
    }
  }

  close() {
    this.setState({ isMenuActive: false });
  }

  render() {
    const { settings, smallScreen, isMenuActive } = this.state;
    settings.slidesToShow = smallScreen ? 1 : 3;
    const menuClasses = `menu ${isMenuActive ? 'active' : ''}`;
    return (
      <div className="App">
        <header className="header">
          <img className="Logo" src={Logo} alt="Sheesh" />
          <span
            className="menu-icon"
            onClick={() => this.setState({ isMenuActive: true })}
          >
            <img src={Menu} alt="burger menu" />
          </span>
          <nav className={menuClasses}>
            <div className="close-btn__container">
              <span
                className="close-btn"
                onClick={() => this.close()}
              >
                <img src={CloseIcon} alt="close menu" />
              </span>
            </div>
            <div className="nav">
              <AnchorLink onClick={() => this.close()} href="#why" className="nav-item">.o porquê</AnchorLink>
              <a href="http://dire.to/sheesh" target="_blank" rel="noopener noreferrer" className="nav-item">.delivery</a>
              <AnchorLink onClick={() => this.close()} href="#menu" className="nav-item">.fotos</AnchorLink>
              <AnchorLink onClick={() => this.close()} href="#contact" className="nav-item">.contato</AnchorLink>
            </div>
          </nav>
        </header>
        <section className="home">
          <div className="pop-bg">
            <h2 className="title">É xix que fala?</h2>
            <h1 className="main-title">hambúrguer gostoso e sem frescura</h1>
            <a className="button button-home" target="_blank" rel="noopener noreferrer" href="http://dire.to/sheesh">delivery</a>
          </div>
          <div className="header-image">
            &nbsp;
          </div>
        </section>
        <section className="App-section Primary-bg" id="why">
          <h2 className="subtitle">.o porquê</h2>
          <p className="storystelling sheesh-border border-padding">
            Os melhores smash burgers do Rio! Agora também temos sanduíches artesanais,
            todos feitos com muito carinho e dedicação, desde a escolha dos fornecedores
            aos nossos cuidados no preparo.
            <br />
            <br />
            Venha nos visitar ou peça no delivery! Ahh, não esqueça de pronunciar
            certinho, é Xix que fala ;)
          </p>
          <br />
          <a className="button" target="_blank" rel="noopener noreferrer" href="http://dire.to/sheesh">peça já</a>
          <div className="section-image">
            <div className="image-container">
              <img src={Hero} className="image" alt="Sheesh" />
            </div>
          </div>
        </section>
        <section className="App-section Primary-bg pb-0" id="menu">
          <h2 className="subtitle">.fotos</h2>
          <div className="food-menu">
            <div className="food-menu__item">
              <Slider {...settings}>
                <div className="food-menu-image">
                  <img src={Burger1} className="image" alt="Sheesh" />
                </div>
                <div className="food-menu-image">
                  <img src={Burger2} className="image" alt="Sheesh" />
                </div>
                <div className="food-menu-image">
                  <img src={Burger3} className="image" alt="Sheesh" />
                </div>
                <div className="food-menu-image">
                  <img src={Burger4} className="image" alt="Sheesh" />
                </div>
                <div className="food-menu-image">
                  <img src={Burger5} className="image" alt="Sheesh" />
                </div>
                <div className="food-menu-image">
                  <img src={Burger6} className="image" alt="Sheesh" />
                </div>
                <div className="food-menu-image">
                  <img src={Burger7} className="image" alt="Sheesh" />
                </div>
              </Slider>
              <br />
              <br />
            </div>
          </div>
        </section>
        <section className="App-section Primary-bg colored pb-0" id="contact">
          <h2 className="subtitle">.contato</h2>
          <div className="contact">
            <div className="store">
              <span className="lead">Botafogo</span>
              <br />
              <span>Seg - Dom: 12h - 23h</span>
              <span>Rua Oliveira Fausto n29A, Botafogo</span>
              <span>(21) 98346-1516</span>
            </div>
            <div className="store">
              <span className="lead">Barra</span>
              <br />
              <span>Ter - Dom: 17h - 23h</span>
              <span>Av Ruy Frazão Soares 191, loja J, Botafogo</span>
              <span>(21) 98247-8071</span>
            </div>
          </div>
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.8284673578996!2d-43.18575134977326!3d-22.956543545345355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ffb5bfafbf7%3A0x117adc8c5c4feb52!2sR.+Oliveira+Fausto%2C+29+-+Botafogo%2C+Rio+de+Janeiro+-+RJ%2C+22280-090!5e0!3m2!1spt-BR!2sbr!4v1560190670039!5m2!1spt-BR!2sbr"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
        </section>
        <section className="App-section Primary-bg">
          <span>© 2019 por Sheesh!</span>
        </section>
      </div>
    );
  }
}

export default App;
