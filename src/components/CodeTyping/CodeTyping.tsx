import React, { memo } from 'react';
import cs from 'classnames';
import './CodeTyping.scss';

interface ICodeTyping {
  mode: 'on' | 'off',
  handleMode: () => void;
}

const CodeTyping: React.FC<ICodeTyping> = (props) => {
  const {mode, handleMode} = props;

  const classNames = cs('typing-wrapper', mode === 'on' ? 'power-on' : 'power-off');

  return (
  <div className={classNames}>
    <div className="frse-portfolio">
    </div>
    <div className="frse-portfolio-start" onClick={handleMode}>
      <div className="frse-portfolio-power1"/>
      <div className="frse-portfolio-power2"/>
    </div>
  </div>);
}

export default memo(CodeTyping);