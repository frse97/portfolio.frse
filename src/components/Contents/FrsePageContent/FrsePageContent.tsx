import React, { memo } from 'react';
import cs from 'classnames';

interface IFrsePageContent {
  className?: string;
}

const FrsePageContent: React.FC<IFrsePageContent> = props => {
  const { className } = props;

  const classNames = cs("frse-page-content", className);

  return <div className={classNames}></div>
}

export default memo(FrsePageContent);