import React from 'react';
import PropTypes from 'prop-types';
import Left from './Left';

export default function Overlay() {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <Left />
        </div>
        <div className="overlay-panel overlay-right">
          <Left />
        </div>
      </div>
    </div>
  );
}

Overlay.propTypes = {
  onButtonClick: PropTypes.func.isRequired
};
