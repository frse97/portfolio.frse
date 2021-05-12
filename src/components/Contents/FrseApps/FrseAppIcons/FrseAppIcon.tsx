import React from "react";
import cs from "classnames";
import FrseAppAboutMeIcon from "./components/FrseAppAboutMeIcon";
import FrseAppSkillsIcon from "./components/FrseAppSkillsIcon";
import FrseAppProjectsIcon from "./components/FrseAppProjectsIcon";
import FrseAppHobbiesIcon from "./components/FrseAppHobbiesIcon";

type FrseAppIconBorderDirection =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export enum FrseAppIconType {
  ABOUT_ME = "ABOUT ME",
  SKILLS = "SKILLS",
  PROJECTS = "PROJECTS",
  HOBBIES = "HOBBIES",
}

export interface IFrseAppIcon {
  /**
   * An additional className for the icon
   */
  className?: string;
  /**
   * Defines the border direction of the icon
   */
  borderDirection?: FrseAppIconBorderDirection;
  /**
   * The type of the AppIcon
   */
  type: FrseAppIconType;
}

const FrseAppIicon: React.FC<IFrseAppIcon> = (props) => {
  const { className, borderDirection, type } = props;

  let borderDirectionCls: string;
  switch (borderDirection) {
    case "top-left": {
      borderDirectionCls = "icon-b-tl";
      break;
    }
    case "top-right": {
      borderDirectionCls = "icon-b-tr";
      break;
    }
    case "bottom-left": {
      borderDirectionCls = "icon-b-bl";
      break;
    }
    case "bottom-right": {
      borderDirectionCls = "icon-b-br";
      break;
    }
  }

  let content;
  let contentClassName;
  switch (type) {
    case FrseAppIconType.ABOUT_ME: {
      content = <FrseAppAboutMeIcon />;
      contentClassName = "frse-app-icon-about-me";
      break;
    }
    case FrseAppIconType.SKILLS: {
      content = <FrseAppSkillsIcon />;
      contentClassName = "frse-app-icon-skills"
      break;
    }
    case FrseAppIconType.PROJECTS: {
      content = <FrseAppProjectsIcon />;
      contentClassName = "frse-app-icon-projects"
      break;
    }
    case FrseAppIconType.HOBBIES: {
      content = <FrseAppHobbiesIcon />;
      contentClassName = "frse-app-icon-hobbies"
      break;
    }
  }

  const classNames = cs(
    "frse-app-icon",
    className,
    borderDirectionCls,
    contentClassName
  );

  return <div className={classNames}>{content}</div>;
};

export default FrseAppIicon;
