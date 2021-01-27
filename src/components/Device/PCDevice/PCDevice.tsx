import React, { memo } from 'react';
import './PCDevice.scss';
import { IPortfolioDevice } from './../PortfolioDevice';
import { PCDeviceStandingPartBottom1, PCDeviceStandingPartBottom2, PCDeviceStandingPartMiddle } from './PortfolioPCStandingPart/PortolioPCStandingPart';
import PortfolioScreen from '../Shared/PortfolioScreen/PortfolioScreen';
import PortfolioPCKeyboard from '../PCDevice/PortfolioPCKeyboard/PortfolioPCKeyboard';
import { PortfolioDevices } from '../../../model';

export interface IPCDevice extends IPortfolioDevice { }

const PCDevice: React.FC<IPCDevice> = props => {
  const { screenContent } = props;

  return (
    <div className="portfolio-pc-device-wrapper">
      <PortfolioScreen currentScreenContent={screenContent} currentDevice={PortfolioDevices.DESKTOP} />
      <PCDeviceStandingPartMiddle />
      <PCDeviceStandingPartBottom1 />
      <PCDeviceStandingPartBottom2 />
      <PortfolioPCKeyboard />
    </div>);
}

export default memo(PCDevice);