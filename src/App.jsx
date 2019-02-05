import React, { Component } from 'react';
import portrait from './assets/images/portrait.jpg';
import instagram from './assets/images/instagram-50.png';
import github from './assets/images/github-50.png';
import linkedin from './assets/images/linkedin-50.png';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="flex-center">
          <h1>Julianna Roen</h1>
        </div>
        <div className="flex-center">
          <p className="home-paragraph">
            Ruby and JavaScript developer based in San Francisco.
            Building payroll, benefits, and HR software for small businesses
            at <a href="https://gusto.com" target="_blank">Gusto</a>.
          </p>
        </div>
        { this.renderSocial() }
      </div>
    );
  }

  renderSocial() {
    return (
      <div class="social-container flex-center">
        <a href="https://www.instagram.com/juliannaroen" target="_blank">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://github.com/juliannaroen/" target="_blank">
          <img src={github} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/julianna-roen-abbabb68/" target="_blank">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    );
  }

  renderCopyright() {
    return (
      <div>
        © 2019 Julianna Roen
      </div>
    );
  }
}

export default App;
