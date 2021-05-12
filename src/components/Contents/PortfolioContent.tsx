import React, { useCallback } from "react";
import cs from "classnames";
import { IPowerMode } from "../../models/model";
import FrseAppButton, { IFrseAppButton } from "./FrseApps/FrseAppButton";
import FrseAppIcon, { FrseAppIconType } from "../Contents/FrseApps/FrseAppIcons/FrseAppIcon";

export interface IPortfolioContent {
  /**
   * The current mode of the screen (used for styling)
   */
  mode: IPowerMode;
}

interface AppButtons extends IFrseAppButton {}

const apps: AppButtons[] = [
  { 
    className: "frse-about-me",
    label: "About me",
    content: <FrseAppIcon type={FrseAppIconType.ABOUT_ME} borderDirection="bottom-right" />
  },
  {
    className: "frse-skills",
    label: "Skills",
    content: <FrseAppIcon type={FrseAppIconType.SKILLS} borderDirection="bottom-right" />
  },
  {
    className: "frse-projects",
    label: "Projects",
    content: <FrseAppIcon type={FrseAppIconType.PROJECTS} borderDirection="bottom-left" />
  },
  {
    className: "frse-hobbies",
    label: "Hobbies",
    content: <FrseAppIcon type={FrseAppIconType.HOBBIES} borderDirection="bottom-left" />
  }
]

const PortfolioContent: React.FC<IPortfolioContent> = (props) => {
  const { mode } = props;

  const portfolioContentClassName = cs("frse-portfolio-content", mode);

  return (
    <div className={portfolioContentClassName}>
      <div className="frse-portfolio-content-profile">
        {/* <FrseAvatar /> */}
        {apps.map((item: IFrseAppButton, i) => {
          return <FrseAppButton key={i} className={item.className} label={item.label} content={item.content} onClick={item.onClick} />
        })}
      </div>
    </div>
  );
};

export default PortfolioContent;
