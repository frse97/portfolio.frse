import React from 'react';
import { PCDevice, CodeTyping } from './components/';

const App: React.FC = () => {
  return (
    <PCDevice screenContent={<CodeTyping />} />
  );
}

export default App;
