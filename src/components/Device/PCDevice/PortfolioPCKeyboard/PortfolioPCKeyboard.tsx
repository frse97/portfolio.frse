import React, { memo } from 'react';

export interface IPortfolioPCkeyboard {

}

const PortfolioPCKeyboard: React.FC = props => {
  return <div className="pc-device-keyboard-wrapper">
    <div className="pc-device-keyboard-search">
      <label htmlFor="portfolio-search" />
      <input type="search" id="portfolio-search" name="Portfolio.Frse Search" />
    </div>
    <div className="pc-device-keyboard-actions" />
  </div>
}

export default memo(PortfolioPCKeyboard);