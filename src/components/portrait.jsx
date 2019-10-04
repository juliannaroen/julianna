import React from 'react';
import portrait from '../assets/images/photos/polaroid-portrait-sm.png';

export const Portrait = () => (
  <div className="flex-center">
    <img
      src={portrait}
      alt="Julianna Roen Portrait"
      className="portrait"
    />
  </div>
);