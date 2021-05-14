import React from "react";
import cs from "classnames";

export interface IFrseAppButton {
  /**
   * A label to display for the Button
   * Label is always visible since not hoverable on mobile
   */
  label?: string;
  /**
   * An additional classname
   */
  className?: string;
  /**
   * The content to display in the Button
   */
  btnContent?: React.ReactNode;
  /**
   * The content for the page
   */
  pageContent?: React.ReactNode;
  /**
   * A method on click
   */
  onClick?: () => void;
}

const FrseAppButton: React.FC<IFrseAppButton> = (props) => {
  const { label, className, btnContent, pageContent, onClick } = props;

  const classNames = cs("frse-btn-container", className);

  return (
    <div className={classNames}>
      <button className="frse-btn" onClick={onClick}>
        {btnContent}
      </button>
      <span className="frse-btn-label">{label}</span>
      {pageContent}
    </div>
  );
};

export default FrseAppButton;
