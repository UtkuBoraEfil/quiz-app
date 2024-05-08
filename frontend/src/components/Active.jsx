import React from "react";
import accessibility from "../assets/images/accessibility.png";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import javascript from "../assets/images/javascript.png";

function Active({ current }) {
  return (
    <div className="flex gap-3">
      <img
        className=" w-11 h-11"
        src={
          current === "HTML"
            ? html
            : current === "CSS"
            ? css
            : current === "ACCESSIBILITY"
            ? accessibility
            : javascript
        }
        alt=""
      />
      <h1 className="headingS dark:dark-text inline-flex items-center">{current}</h1>
    </div>
  );
}
export default Active;
