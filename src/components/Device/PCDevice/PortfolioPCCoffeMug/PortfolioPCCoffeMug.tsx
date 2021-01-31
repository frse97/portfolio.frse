import React, { memo } from 'react';

export interface IPortfolioPCCoffeMug {

}

const PortfolioPCCoffeMug: React.FC<IPortfolioPCCoffeMug> = props => {
  return <div className="pc-device-coffe-mug">
    <div className="pc-device-coffe-circle">
      <div className="pc-device-coffe-liquid" />
    </div>
    <div className="pc-device-coffe-handle" />
  </div>
}

export default memo(PortfolioPCCoffeMug);