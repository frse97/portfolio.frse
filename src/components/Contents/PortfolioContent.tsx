import React from "react";
import cs from "classnames";
import { IPowerMode } from "../../models/model";
import FrseAvatar from "./FrseAvatar/FrseAvatar";
import FrseAppButton from "./FrseApps/FrseAppButton";
import FrseIcon, { FrseAppIconType } from "../Contents/FrseApps/FrseAppIcons/FrseAppIcon";

export interface IPortfolioContent {
  /**
   * The current mode of the screen (used for styling)
   */
  mode: IPowerMode;
}

const PortfolioContent: React.FC<IPortfolioContent> = (props) => {
  const { mode } = props;

  const portfolioContentClassName = cs("frse-portfolio-content", mode);

  return (
    <div className={portfolioContentClassName}>
      <div className="frse-portfolio-content-profile">
        {/* <FrseAvatar /> */}
        <FrseAppButton
          className="frse-about-me"
          label="About me"
          content={<FrseIcon type={FrseAppIconType.ABOUT_ME} borderDirection="bottom-right" />}
        />
        <FrseAppButton
          className="frse-skills"
          label="Skills"
          content={<FrseIcon type={FrseAppIconType.SKILLS} borderDirection="bottom-right" />}
        />
        <FrseAppButton
          className="frse-projects"
          label="Projects"
          content={<FrseIcon type={FrseAppIconType.PROJECTS} borderDirection="bottom-left" />}
        />
        <FrseAppButton
          className="frse-hobbies"
          label="Hobbies"
          content={<FrseIcon type={FrseAppIconType.HOBBIES} borderDirection="bottom-left" />}
        />
      </div>
    </div>
  );
};

export default PortfolioContent;
