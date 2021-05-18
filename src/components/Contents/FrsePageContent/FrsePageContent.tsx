import React, { memo } from 'react';
import cs from 'classnames';

interface IFrsePageContent {
  className?: string;
  children?: React.ReactNode;
}

const FrsePageContent: React.FC<IFrsePageContent> = props => {
  const { className, children } = props;

  const classNames = cs("frse-page-content", className);

  return <div className={classNames}>{children}</div>
}

export default memo(FrsePageContent);