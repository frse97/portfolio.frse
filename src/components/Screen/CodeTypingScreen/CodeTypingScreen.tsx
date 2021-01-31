import React, { memo } from 'react';
import cs from 'classnames';

interface ICodeTypingScreen {
  mode: 'on' | 'off',
}

const CodeTypingScreen: React.FC<ICodeTypingScreen> = (props) => {
  const { mode } = props;

  const classNames = cs('typing-wrapper', mode === 'on' ? 'power-on' : 'power-off');

  return (
    <div className={classNames}>
      <div className="frse-portfolio">
      </div>
    </div>);
}

export default memo(CodeTypingScreen);