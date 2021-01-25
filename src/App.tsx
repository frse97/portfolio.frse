import React, { useState } from 'react';
import cs from 'classnames';
import { PCDevice, CodeTyping } from './components/';
import './App.scss';

const App: React.FC = () => {
  const [mode, setMode] = useState<'on'|'off'>('off')

  const handleStartMode = () => {
    mode === 'off' ? setMode('on') : setMode('off');
  }

  const portfolioContentClassName = cs("portfolio-content", mode === 'on' ? 'power-start' : '');

  return (
    <PCDevice screenContent={<><CodeTyping mode={mode} handleMode={handleStartMode} /><div className={portfolioContentClassName}><div>Content comes here</div></div></>} />
  );
}

export default App;
