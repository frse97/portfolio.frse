import React, { memo } from 'react';

export interface IPortfolioPCCoffeMug {

}

const PortfolioPCCoffeMug: React.FC<IPortfolioPCCoffeMug> = props => {
  return <div className="pc-device-coffe-mug">
    <div className="pc-device-coffe-vapor">
      <span id="1" className="vapor1"></span>
      <span id="2" className="vapor2"></span>
      <span id="3" className="vapor3"></span>
      <span id="4" className="vapor4"></span>
      <span id="5" className="vapor5"></span>
      <span id="6" className="vapor6"></span>
      <span id="7" className="vapor7"></span>
      <span id="8" className="vapor8"></span>
      <span id="9" className="vapor9"></span>
      <span id="10" className="vapor10"></span>
    </div>
    <div className="pc-device-coffe-circle">
      <div className="pc-device-coffe-liquid" />
    </div>
    <div className="pc-device-coffe-handle" />
  </div >
}

export default memo(PortfolioPCCoffeMug);