import React, { memo } from 'react';

interface IFrseAppProjectsIcon {}

const FrseAppProjectsIcon: React.FC<IFrseAppProjectsIcon> = props => {
  return (
    <>
      <div className="frse-app-icon-projects-arrow-left-1" />
      <div className="frse-app-icon-projects-arrow-left-2" />
      <div className="frse-app-icon-projects-arrow-middle" />
      <div className="frse-app-icon-projects-arrow-right-1" />
      <div className="frse-app-icon-projects-arrow-right-2" />
    </>
  )
}

export default memo(FrseAppProjectsIcon);