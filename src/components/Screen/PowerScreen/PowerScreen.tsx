import React, { useState } from 'react';

export enum IPowerMode {
  ON = 'ON',
  OFF = 'OFF'
}
export interface IPowerScreen {
}

const PowerScreen: React.FC<IPowerScreen> = props => {
  const [mode, setMode] = useState<IPowerMode>(IPowerMode.OFF);

  const handleClick = () => {
    alert('power btn was clicked');
  }

  return <div className="frse-portfolio-start" onClick={handleClick}>
    <div className="frse-portfolio-power1" />
    <div className="frse-portfolio-power2" />
  </div>;
}

export default PowerScreen;