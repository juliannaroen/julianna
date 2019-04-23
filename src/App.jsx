import React, { Component } from 'react';
import instagram from './assets/images/icons/instagram-doodle.png';
import github from './assets/images/icons/github-doodle.png';
import linkedin from './assets/images/icons/linkedin-doodle.png';
import ReactGA from 'react-ga';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.initReactGA();
  }

  render() {
    return (
      <div className="app">
        <div className="flex-center">
          <h1>Julianna Roen</h1>
        </div>
        <div className="flex-center">
          <p className="home-paragraph">
            Ruby and JavaScript developer based in San Francisco.{' '}
            <a 
              href="https://medium.com/@juliannaroen"
              target="_blank"
              rel="noopener noreferrer"
              onClick={this.trackEvent('Medium')}
            >
              Writing about tech
            </a>.
            Building payroll, benefits, and HR software for small businesses
            at <a
              href="https://gusto.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={this.trackEvent('Gusto')}
            >Gusto</a>.
          </p>
        </div>
        { this.renderSocial() }
      </div>
    );
  }

  renderSocial() {
    return (
      <div className="social-container flex-center">
        <a
          href="https://www.instagram.com/juliannaroen"
          target="_blank"
          rel="noopener noreferrer"
          onClick={this.trackEvent('Instagram')}
        >
          <img src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://github.com/juliannaroen/" 
          target="_blank"
          rel="noopener noreferrer"
          onClick={this.trackEvent('Github')}
        >
          <img src={github} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/julianna-roen-abbabb68/" 
          target="_blank"
          rel="noopener noreferrer"
          onClick={this.trackEvent('LinkedIn')}
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    );
  }

  initReactGA() {
    ReactGA.initialize('UA-134686188-1');
    ReactGA.pageview('home');
  }

  trackEvent(link) {
    ReactGA.event({
      category: 'External link click',
      action: 'Clicked a link',
      label: link
    });
  }
}

export default App;
