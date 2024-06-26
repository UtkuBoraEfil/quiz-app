import React from "react";
import accessibility from "../assets/images/accessibility.png";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import javascript from "../assets/images/javascript.png";
function Button({ onClick, png, content }) {
  return (
    <button
      className="flex w-full bg-white  dark:bg-blue  mb-8 py-3 px-3 border-0 rounded-xl gap-6 shadow-sm hover:-translate-y-1 hover:scale-105"
      onClick={onClick}
    >
      <img
        className=" w-11 h-11"
        src={
          png === "html"
            ? html
            : png === "css"
            ? css
            : png === "accessibility"
            ? accessibility
            : javascript
        }
        alt=""
      />
      <div className=" headingS dark:dark-text pt-2">{content}</div>
    </button>
  );
}
export default Button;
