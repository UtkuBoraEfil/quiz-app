import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";

function MainScreen({ changeActive }) {
  return (
    <>
      <div className="flex-1">
        <h1 className="headingL dark:dark-text">Welcome to the</h1>
        <h1 className="headingLbold mb-8 dark:dark-text">Frontend Quiz!</h1>
        <p className="bodyS dark:dark-text-lightBlue">
          pick a subject to get started
        </p>
      </div>
      <nav className=" w-full flex-1 items-center ">
        <Button
          onClick={() => {
            changeActive("HTML");
          }}
          content="HTML"
          png="html"
        />
        <Button
          onClick={() => {
            changeActive("CSS");
          }}
          content="CSS"
          png="css"
        />
        <Button
          onClick={() => {
            changeActive("JAVASCRIPT");
          }}
          content="Javascript"
          png="javascript"
        />
        <Button onClick={() => {
            changeActive("ACCESSIBILITY");
          }}
          content="Accessibility" png="accessibility" />
      </nav>
    </>
  );
}
export default MainScreen;
