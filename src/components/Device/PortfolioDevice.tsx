import React, { memo, useState } from 'react';
import { PortfolioDevices } from '../../model';
import PCDevice from './PCDevice/PCDevice';
export interface IPortfolioDevice {
  /**
   * The content displayed in the screen of any device 
   */
  screenContent: JSX.Element;
}

const PortfolioDevice: React.FC<IPortfolioDevice> = props => {
  const { screenContent } = props;

  const [currentDevice, setCurrentDevice] = useState<PortfolioDevices>(PortfolioDevices.DESKTOP);

  let displayedDevice: JSX.Element | undefined = undefined;

  switch (currentDevice) {
    case PortfolioDevices.DESKTOP:
      displayedDevice = <PCDevice screenContent={screenContent} />;
      break;
    case PortfolioDevices.TABLET:
      displayedDevice = <>TabletDevice</>;
      break;
    case PortfolioDevices.MOBILE:
      displayedDevice = <>MobileDevice</>;
      break;
  }

  return <div className="portfolio-device-wrapper">{displayedDevice}</div>;
}

export default memo(PortfolioDevice);