import React, { memo } from 'react';
import './PCDevice.scss';

interface IPCDevice {
  /**
   * The content displayed in the screen
   */
  screenContent: JSX.Element | undefined;
}

const PCDevice: React.FC<IPCDevice> = props => {
  const { screenContent } = props;

  return (<div className="pc-device-wrapper">
              <div className="pc-device-screen">
                {screenContent}
              </div>
              <div className="pc-device-middle-standing" />
              <div className="pc-device-standing-part1" />
              <div className="pc-device-standing-part2" />
              {/* <div className="pc-device-keyboard">
                <div className="keyboard-header-row" />
              </div> */}
          </div>);
}

export default memo(PCDevice);