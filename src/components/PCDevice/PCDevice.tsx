import React, { memo } from 'react';
import './PCDevice.scss';

const PCDevice: React.FC = () => {
  return (<div className="pc-device-wrapper">
              <div className="pc-device-screen" />
              <div className="pc-device-middle-standing" />
              <div className="pc-device-standing-part1" />
              <div className="pc-device-standing-part2" />
          </div>);
}

export default memo(PCDevice);