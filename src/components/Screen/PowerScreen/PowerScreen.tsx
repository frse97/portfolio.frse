import React from 'react';

export interface IPowerScreen {
  handleMode: () => void;
}

const PowerScreen: React.FC<IPowerScreen> = props => {
  const { handleMode } = props;

  return <div className="frse-portfolio-start" onClick={handleMode}>
    <div className="frse-portfolio-power1" />
    <div className="frse-portfolio-power2" />
  </div>;
}

export default PowerScreen;