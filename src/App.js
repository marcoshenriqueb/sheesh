import React from 'react';
import Slider from 'react-slick';
import './App.scss';
import Logo from './assets/img/logo.png';
import Burger1 from './assets/img/lifestyle1.jpg';
import Burger from './assets/img/burger1.jpg';
import Burger2 from './assets/img/burger2.jpg';


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

  render() {
    const { settings, smallScreen, isMenuActive } = this.state;
    settings.slidesToShow = smallScreen ? 1 : 3;
    const menuClasses = `menu ${isMenuActive ? 'active' : ''}`;
    return (
      <div className="App">
        <div className="info">
          <span className="text">Seg - Dom: 12h - 24h</span>
          <span className="text">Rua Oliveira Fausto n29A, Botafogo</span>
          <span className="text">(21) 4116-1207</span>
        </div>
        <header className="header">
          <img className="Logo" src={Logo} alt="Sheesh" />
          <span
            className="menu-icon"
            onClick={() => this.setState({ isMenuActive: true })}
          >
            Menu
          </span>
          <nav className={menuClasses}>
            <div className="close-btn__container">
              <span
                className="close-btn"
                onClick={() => this.setState({ isMenuActive: false })}
              >
                X
              </span>
            </div>
            <div className="nav">
              <a href="#franquia" className="nav-item">.home</a>
              <a href="#franquia" className="nav-item">.o porquê</a>
              <a href="#franquia" className="nav-item">.cardápio</a>
              <a href="#franquia" className="nav-item">.contato</a>
            </div>
          </nav>
        </header>
        <section className="home">
          <div className="pop-bg">
            <h2 className="title">É xix que fala?</h2>
            <button type="button" className="button button-home">Cardápio</button>
          </div>
          <div className="header-image">
            &nbsp;
          </div>
        </section>
        <section className="App-section Primary-bg">
          <h2 className="subtitle">.o porquê</h2>
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
          <div className="section-image">
            <div className="image-container">
              <img className="image " src={Burger1} alt="Sheesh" />
            </div>
            <div className="overlay">Me leve pra casa!</div>
          </div>
        </section>
        <section className="App-section Primary-bg pb-0">
          <h2 className="subtitle">.cardápio</h2>
          <div className="food-menu">
            <div className="food-menu__item">
              <span className="food-menu__item-title">Burgers</span>
              <Slider {...settings}>
                <div className="food-menu-image">
                  <img className="image" src={Burger} alt="Sheesh" />
                </div>
                <div className="food-menu-image">
                  <img className="image" src={Burger2} alt="Sheesh" />
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
              <br />
              <br />
              <button className="button" type="button">cardápio</button>
            </div>
          </div>
        </section>
        <section className="App-section Primary-bg colored">
          <h2 className="subtitle">.contato</h2>
          <div className="contact">
            <span>Venha nos conhecer ;)</span>
            <br />
            <span>Seg - Dom: 12h - 24h</span>
            <span>Rua Oliveira Fausto n29A, Botafogo</span>
            <span>(21) 4116-1207</span>
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
