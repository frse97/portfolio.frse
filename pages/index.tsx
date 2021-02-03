import React, { useState } from 'react';
import cs from 'classnames';
import PortfolioDevice from '../src/components/Device/PortfolioDevice';
import PowerScreen from '../src/components/Screen/PowerScreen/PowerScreen';
import CodeTypingScreen from '../src/components/Screen/CodeTypingScreen/CodeTypingScreen';

const App: React.FC = () => {
  const portfolioContentClassName = cs("portfolio-content");

  return (
    <PortfolioDevice screenContent={
      <>
        <CodeTypingScreen />
        <PowerScreen />
        <div className={portfolioContentClassName} />
      </>} />
  );
}

export default App;
