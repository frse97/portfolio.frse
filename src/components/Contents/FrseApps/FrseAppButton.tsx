import React from "react";
import cs from "classnames";

interface IFrseAppButton {
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
  content?: React.ReactNode;
  /**
   * A method on click
   */
  onClick?: () => void;
}

const FrseAppButton: React.FC<IFrseAppButton> = (props) => {
  const { label, className, content, onClick } = props;

  const classNames = cs("frse-btn-container", className);

  return (
    <div className={classNames}>
      <button className="frse-btn" onClick={onClick}>
        {content}
      </button>
      <span className="frse-btn-label">{label}</span>
    </div>
  );
};

export default FrseAppButton;
