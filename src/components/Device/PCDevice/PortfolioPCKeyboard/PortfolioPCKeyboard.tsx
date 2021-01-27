import React, { memo } from 'react';
import './PortfolioPCKeyboard.scss';

export interface IPortfolioPCkeyboard {

}

const PortfolioPCKeyboard: React.FC = props => {
  return <div className="pc-device-keyboard">
    <div className="keyboard-header-row" />
  </div>
}

export default memo(PortfolioPCKeyboard);