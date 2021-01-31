import React, { memo } from 'react';
import { PortfolioDevices } from '../../../../model';
export interface IPortfolioScreen {
  /**
   * The current screen displayed
   */
  currentScreenContent: JSX.Element;
  /**
   * The device in which screen is currently displaying
   */
  currentDevice: PortfolioDevices;
}

const PortfolioScreen: React.FC<IPortfolioScreen> = props => {

  const { currentScreenContent } = props;

  return (<div className="pc-device-screen">
    {currentScreenContent}
  </div>);
}

export default memo(PortfolioScreen);