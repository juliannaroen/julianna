import React from 'react';
import instagram from '../assets/images/icons/instagram-doodle.png';
import github from '../assets/images/icons/github-doodle.png';
import linkedin from '../assets/images/icons/linkedin-doodle.png';

export const SocialLinks = ({ trackEvent }) => (
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