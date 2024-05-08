import React from "react";
import A from "../assets/images/whiteA.png";
import B from "../assets/images/whiteB.png";
import C from "../assets/images/whiteC.png";
import D from "../assets/images/whiteD.png";

function Options({content, ind}) {
    console.log(content);
  return (
    <button
      className="flex w-full bg-white  dark:bg-blue  mb-8 py-3 px-3 border-0 rounded-xl gap-6 shadow-sm hover:-translate-y-1 hover:scale-105"
    //   onClick={onClick}
    >
      <img
        className=" w-11 h-11"
        src={
          ind === "0"
            ? A
            : ind === "1"
            ? B
            : ind === "2"
            ? C
            : D
        }
        alt=""
      />
      <div className=" headingS dark:dark-text pt-2">{content}</div>
    </button>
  );
}
export default Options;