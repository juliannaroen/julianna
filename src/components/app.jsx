import React from 'react';
import { Title } from './title';
import { Portrait } from './portrait';
import { AboutMe } from './about_me';
import { SocialLinks } from './social_links';
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
