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
    <div className="frse-portfolio-content-profile">
      <FrseAvatar />
    </div>
  </div>
}

export default PortfolioContent;