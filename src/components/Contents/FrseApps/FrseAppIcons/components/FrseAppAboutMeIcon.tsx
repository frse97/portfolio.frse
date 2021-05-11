import React, { memo } from 'react';

interface IFrseAppAboutMeIcon {}

const FrseAppAboutMeIcon: React.FC<IFrseAppAboutMeIcon> = props => {
  return (
    <>
      <div className="frse-about-me-head" />
      <div className="frse-about-me-body" />
    </>
  )
}

export default memo(FrseAppAboutMeIcon);