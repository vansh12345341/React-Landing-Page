import React, { useEffect, useRef } from "react";
import "./Button.css";
const Button = ({
  className,
  bgc,
  content,
  paddingInline,
  top,
  color,
  borderColor,
}) => {
  const buttonDivRef = useRef();

  useEffect(() => {
    buttonDivRef.current.style.setProperty("--color", color);
    buttonDivRef.current.style.setProperty("--border-color", borderColor);
  }, []);
  return (
    <div
      style={{ position: "relative", top: top }}
      ref={buttonDivRef}
      className="button"
    >
      <button
        style={{
          backgroundColor: bgc,
          paddingInline: paddingInline,
        }}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
