import React, { memo } from "react";

interface IFrseAppSkillsIcon {}

const FrseAppSkillsIcon: React.FC<IFrseAppSkillsIcon> = (props) => {
  return (
    <>
      <div className="frse-skills-badge-top">
        <div className="frse-skills-badge-container">
          {/* <div className="frse-skills-badge-top-star" />
          <div className="frse-skills-badge-top-star-border" /> */}
        </div>
      </div>
      <div className="frse-skills-badge-bottom-left">
        <div className="frse-skills-badge-bottom-left-triangle-border" />
        <div className="frse-skills-badge-bottom-left-triangle" />
      </div>

      <div className="frse-skills-badge-bottom-right">
      <div className="frse-skills-badge-bottom-right-triangle-border" />
      <div className="frse-skills-badge-bottom-right-triangle" />
      </div>
    </>
  );
};

export default memo(FrseAppSkillsIcon);
