import React, { useState } from 'react';
import cs from 'classnames';
import PortfolioDevice from '../src/components/Device/PortfolioDevice';
import PowerScreen from '../src/components/Screen/PowerScreen/PowerScreen';
import CodeTypingScreen from '../src/components/Screen/CodeTypingScreen/CodeTypingScreen';

const App: React.FC = () => {
  const [mode, setMode] = useState<'on' | 'off'>('off')

  const handleStartMode = () => {
    mode === 'off' ? setMode('on') : setMode('off');
  }

  const portfolioContentClassName = cs("portfolio-content", mode === 'on' ? 'power-start' : '');

  return (
    <PortfolioDevice screenContent={
      <>
        <CodeTypingScreen mode={mode} />
        <PowerScreen handleMode={handleStartMode} />
        <div className={portfolioContentClassName}>
          {/* <div>Content comes here</div> */}
        </div>
      </>} />
  );
}

export default App;
