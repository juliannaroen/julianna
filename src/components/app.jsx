import React from 'react';
import { AboutMe, Portrait, Title, SocialLinks } from './';
import * as Events from '../helpers/events';

export const App = () => {
  Events.initReactGA();

  return (
    <div className="app">
    <div className="portrait-text-block">
      <Portrait />
      <div>
        <Title />
        <AboutMe trackEvent={Events.trackEvent} />
        <SocialLinks trackEvent={Events.trackEvent} />
      </div>
    </div>
  </div>
  );
}
