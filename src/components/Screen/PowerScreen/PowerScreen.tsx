import React, { useState } from 'react';
import cs from 'classnames';
import { IPowerMode } from '../../../models/model';

export interface IPowerScreen {
  /**
   * The current mode of the screen (used for styling)
   */
  mode: IPowerMode;
  /**
   * A method to handle the screen start
   */
  handleClick: () => void;
}

const PowerScreen: React.FC<IPowerScreen> = props => {
  const {mode, handleClick} = props;

  const className = cs('frse-portfolio-start', mode);

  return <div className={className} onClick={handleClick}>
    <div className="frse-portfolio-power1" />
    <div className="frse-portfolio-power2" />
  </div>;
}

export default PowerScreen;