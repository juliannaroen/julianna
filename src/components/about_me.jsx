import React from 'react';

export const AboutMe = ({ trackEvent }) => (
  <div className="flex-center">
    <p className="home-paragraph">
      Ruby and JavaScript developer based in New York City.{' '}
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