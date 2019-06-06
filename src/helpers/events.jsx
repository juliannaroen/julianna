import ReactGA from 'react-ga';

export const initReactGA = () => {
  ReactGA.initialize('UA-134686188-1');
  ReactGA.pageview('home');
};

export const trackEvent = (link) => {
  ReactGA.event({
    category: 'External link click',
    action: 'Clicked a link',
    label: link
  });
};