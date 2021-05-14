import React, { useCallback, useState } from "react";
import cs from "classnames";
import { IPowerMode } from "../../models/model";
import FrseAppButton, { IFrseAppButton } from "./FrseApps/FrseAppButton";
import FrseAppIcon, {
  FrseAppIconType,
} from "../Contents/FrseApps/FrseAppIcons/FrseAppIcon";
import FrsePageContent from '../Contents/FrsePageContent/FrsePageContent';

export interface IPortfolioContent {
  /**
   * The current mode of the screen (used for styling)
   */
  mode: IPowerMode;
}

interface AppButtons extends IFrseAppButton {}

const PortfolioContent: React.FC<IPortfolioContent> = (props) => {
  const { mode } = props;

  const [isAboutMeVisible, setIsAboutMeVisible] = useState<boolean>(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState<boolean>(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState<boolean>(false);
  const [isHobbiesVisible, setIsHobbiesVisible] = useState<boolean>(false);

  const apps: AppButtons[] = [
    {
      className: `frse-about-me`,
      label: "About me",
      btnContent: (
        <FrseAppIcon
          type={FrseAppIconType.ABOUT_ME}
          borderDirection="bottom-right"
        />
      ),
      pageContent: (
        <FrsePageContent className="frse-content-about-me" />
      ),
      onClick: () => setIsAboutMeVisible(!isAboutMeVisible),
    },
    {
      className: "frse-skills",
      label: "Skills",
      btnContent: (
        <FrseAppIcon
          type={FrseAppIconType.SKILLS}
          borderDirection="bottom-right"
        />
      ),
      pageContent: (
        <FrsePageContent className="frse-content-skills" />
      ),
      onClick: () => setIsSkillsVisible(!isSkillsVisible),
    },
    {
      className: "frse-projects",
      label: "Projects",
      btnContent: (
        <FrseAppIcon
          type={FrseAppIconType.PROJECTS}
          borderDirection="bottom-left"
        />
      ),
      pageContent: (
        <FrsePageContent className="frse-content-projects"/>
      ),
      onClick: () => setIsProjectsVisible(!isProjectsVisible),
    },
    {
      className: "frse-hobbies",
      label: "Hobbies",
      btnContent: (
        <FrseAppIcon
          type={FrseAppIconType.HOBBIES}
          borderDirection="bottom-left"
        />
      ),
      pageContent: (
        <FrsePageContent className="frse-content-hobbies"/>
      ),
      onClick: () => setIsHobbiesVisible(!isHobbiesVisible),
    },
  ];

  const portfolioContentClassName = cs("frse-portfolio-content", mode);
  const portofolioContentPage = cs(
    "frse-portfolio-content-profile",
    isAboutMeVisible ? "about-me-expanded" : "about-me-collapsed",
    isSkillsVisible ? "skills-expanded" : "skills-collapsed",
    isProjectsVisible ? "projects-expanded" : "projects-collapsed",
    isHobbiesVisible ? "hobbies-expanded" : "hobbies-collapsed",
  );

  return (
    <div className={portfolioContentClassName}>
      <div className={portofolioContentPage}>
        {/* <FrseAvatar /> */}
        {apps.map((item: IFrseAppButton, i) => {
          return (
            <FrseAppButton
              key={i}
              className={item.className}
              label={item.label}
              btnContent={item.btnContent}
              pageContent={item.pageContent}
              onClick={item.onClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioContent;
