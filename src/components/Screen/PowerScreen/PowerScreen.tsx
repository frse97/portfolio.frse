import React, { useState } from 'react';
import cs from 'classnames';

export enum IPowerMode {
  ON = 'ON',
  OFF = 'OFF'
}
export interface IPowerScreen {
}

const PowerScreen: React.FC<IPowerScreen> = props => {
  const [mode, setMode] = useState<IPowerMode>(IPowerMode.OFF);

  const handleClick = () => {
    setMode(IPowerMode.ON);
  }

  const className = cs('frse-portfolio-start', mode);

  return <div className={className} onClick={handleClick}>
    <div className="frse-portfolio-power1" />
    <div className="frse-portfolio-power2" />
  </div>;
}

export default PowerScreen;