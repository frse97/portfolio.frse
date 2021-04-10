import React from 'react';
import cs from 'classnames';
import { IPowerMode } from '../../models/model';
import FrseAvatar from './FrseAvatar/FrseAvatar';

export interface IPortfolioContent {
  /**
   * The current mode of the screen (used for styling)
   */
  mode: IPowerMode;
}

const PortfolioContent: React.FC<IPortfolioContent> = props => {
  const { mode } = props;

  const portfolioContentClassName = cs("frse-portfolio-content", mode);

  return <div className={portfolioContentClassName}>
    <FrseAvatar />
    <div className="profile-description">
      <p>Welcome to my mind</p>
      <span>I am a webdeveloper with passion for every artistic aspect of life</span>
    </div>
  </div>
}

export default PortfolioContent;