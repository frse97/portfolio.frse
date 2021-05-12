import React, { memo } from 'react';

interface IFrseAppHobbiesIcon {}

const FrseAppHobbiesIcon: React.FC<IFrseAppHobbiesIcon> = props => {
  return (
    <>
      <div className="frse-app-icon-hobbies-heart-shape" />
      <div className="frse-app-icon-hobbies-heart-shape-border" />
    </>
  )
}

export default memo(FrseAppHobbiesIcon);