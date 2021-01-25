import React, { memo } from 'react';
import './CodeTyping.scss';

const CodeTyping: React.FC = () => {
  return (
  <div className="typing-wrapper">
    <div className="frse-portfolio">
    </div>
    <div className="frse-portfolio-start">
      <div className="frse-portfolio-power1"/>
      <div className="frse-portfolio-power2"/>
    </div>
  </div>);
}

export default memo(CodeTyping);