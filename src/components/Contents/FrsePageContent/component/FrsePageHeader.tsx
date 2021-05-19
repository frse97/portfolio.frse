import React, { memo } from 'react';
import cs from 'classnames';

interface IFrsePageHeader {
  className?: string;
  children?: React.ReactNode;
}

const FrsePageHeader: React.FC<IFrsePageHeader> = props => {
  const { className, children } = props;

  const classNames = cs("frse-page-content", className);

  return <div className={classNames}>{children}</div>
}

export default memo(FrsePageHeader);