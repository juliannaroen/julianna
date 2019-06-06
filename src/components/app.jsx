import React, { Component } from 'react';
import portrait from '../assets/images/photos/polaroid-portrait-sm.png';
import instagram from '../assets/images/icons/instagram-doodle.png';
import github from '../assets/images/icons/github-doodle.png';
import linkedin from '../assets/images/icons/linkedin-doodle.png';
import * as Events from '../helpers/events';

class App extends Component {
  constructor(props) {
    super(props);
    Events.initReactGA();
  }

  render = () => (
    <div className="app">
      <div className="portrait-text-block">
        <Portrait />
        <div>
          <Title />
          <Paragraph trackEvent={Events.trackEvent} />
          <Social trackEvent={Events.trackEvent} />
        </div>
      </div>
    </div>
  );
}

const Title = () => (
  <div className="flex-center">
    <h1>Julianna Roen</h1>
  </div>
);

const Portrait = () => (
  <div className="flex-center">
    <img
      src={portrait}
      alt="Julianna Roen Portrait"
      className="portrait"
    />
  </div>
);

const Paragraph = ({ trackEvent }) => (
  <div className="flex-center">
    <p className="home-paragraph">
      Ruby and JavaScript developer based in San Francisco.{' '}
      <a 
        href="https://medium.com/@juliannaroen"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackEvent('Medium')}
      >
        Writing about life and tech
      </a>.
      Building payroll, benefits, and employee management software for small businesses at{' '}
      <a
        href="https://gusto.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackEvent('Gusto')}
      >Gusto</a>.
    </p>
  </div>
);

const Social = ({ trackEvent }) => (
  <div className="social-container flex-center">
    <a
      href="https://www.instagram.com/juliannaroen"
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackEvent('Instagram')}
    >
      <img src={instagram} alt="Instagram" />
    </a>
    <a
      href="https://github.com/juliannaroen/" 
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackEvent('Github')}
    >
      <img src={github} alt="Github" />
    </a>
    <a
      href="https://www.linkedin.com/in/julianna-roen-abbabb68/" 
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackEvent('LinkedIn')}
    >
      <img src={linkedin} alt="LinkedIn" />
    </a>
  </div>
); 

export default App;
