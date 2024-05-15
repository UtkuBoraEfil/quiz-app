import React from "react";
import { useState, useEffect } from "react";
import FalseImage from "../assets/images/false.svg";
import correctImage from "../assets/images/correct.svg";

function Options({content, id, handleClick}) {

    return (
      <button
        disabled={false}
        id={id}
        className="flex justify-between w-full bg-white dark:bg-blue  mb-8 py-3 px-3 border-0 rounded-xl shadow-sm hover:-translate-y-1 hover:scale-105"
        onClick={()=>{handleClick(id)}}
      >
        <section className="flex items-center gap-6">
          <div id={id+"option"} className="w-11 h-11 bg-light-grey rounded-lg  transition-none flex">
            <p className=" headingS text-light-blue w-11 h-11  inline-flex items-center justify-center">
              {id === 0 ? "A" : id === 1 ? "B" : id === 2 ? "C" : "D"}
            </p>
          </div>
          <div className=" headingS dark:dark-text leading-none text-center">{content}</div>
        </section>
        <img id={id+"correct"} src={correctImage} alt="" className=" hidden"/>
        <img id={id+"false"} src={FalseImage} alt="" className="hidden"/>
      </button>
    );
}
export default Options;