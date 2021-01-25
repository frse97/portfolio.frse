import React, { useState } from 'react';
import { PCDevice, CodeTyping } from './components/';

const App: React.FC = () => {
  const [mode, setMode] = useState<'on'|'off'>('off')

  const handleStartMode = () => {
    mode === 'off' ? setMode('on') : setMode('off');
  }

  return (
    <PCDevice screenContent={<CodeTyping mode={mode} handleMode={handleStartMode} />} />
  );
}

export default App;
