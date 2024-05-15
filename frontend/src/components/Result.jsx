import React from "react";
import { useState, useEffect } from "react";
import Active from "./Active";

function Result({ changeActive, current }) {
    return(
        <>
            <div className="w-full">
                <h1 className=" headingL dark:dark-text">Quiz Completed</h1>
                <h1 className=" headingLbold dark:dark-text">You Scored...</h1>
            </div>
            <div className="w-full flex flex-col gap-8">
                <div className="w-full bg-white dark:bg-blue rounded-xl flex justify-center py-6">
                    <div>
                        <Active current={localStorage.getItem("active")} className=""/>
                        <h1 className=" result dark:dark-text flex justify-center py-5 ">{localStorage.getItem("score")}</h1>
                        <p className=" bodyM dark:dark-text flex justify-center">out of 10</p>
                    </div>
                </div>
                <button onClick={()=>{changeActive("main")}} className="w-full headingS  bg-purple py-4 rounded-xl shadow-sm hover:-translate-y-1 hover:opacity-70"><p className=" text-white">Play Again</p></button>
            </div>
            
        </>
    )
}

export default Result;