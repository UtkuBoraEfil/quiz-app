import React from "react";
import { useState, useEffect } from "react";
import data from "../data.json";
import Options from "./Options";

function Questions({ changeActive, current }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([{
    "question": "",
    "options": [],
    "answer": "",
  }]);

  useEffect(() => {
    for (let i = 0; i < data.quizzes.length; i++) {
      if (data.quizzes[i].title === current) {
        const currentQuiz = data.quizzes[i];
        setQuestions(currentQuiz.questions);
        break;
      }
    }
  }, []);

console.log(questions[0].answer);

  return (
    <>
      <div>
        <p className=" bodyS dark:dark-text-lightBlue">
          Question {questionNumber+1} of 10
        </p>
        <div>
          <h1 className=" headingM  dark:dark-text">
            {questions[questionNumber].question}
          </h1>
        </div>
      </div>
      <div className="flex flex-col">
        {questions[questionNumber].options.map((option, index) => {
            return <Options content={questions[questionNumber].options[index]} key={index} />;
        })}
        <br />
        <button onClick={()=>{setQuestionNumber(questionNumber+1)}} className="headingS dark:dark-text">submit answer</button>
      </div>
    </>
  );
}

export default Questions;
