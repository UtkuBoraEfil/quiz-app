import React from "react";
import { useState, useEffect } from "react";
import data from "../data.json";
import Options from "./Options";
import FalseImage from "../assets/images/false.svg";

function Questions({ changeActive, current }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([{
    "question": "",
    "options": [],
    "answer": "",
  }]);
  const [myAnswer, setMyAnswer] = useState(null);

  const [score, setScore] = useState(0);
  

  useEffect(() =>{
    localStorage.setItem("score", score);
  }, [score]);

  function handleClick(option){
      for(let i=0; i<4; i++){
        document.getElementById(i).classList.remove("click");
        document.getElementById(i+"option").classList.remove("clickOption");
      }
      console.log(option);
      setMyAnswer(option);
      localStorage.setItem("myAnswer", option);
      document.getElementById(option).classList.add("click");
  }

  function handleNextQuestion(){
    document.getElementById("sub").classList.remove("hidden");
    document.getElementById("next").classList.add("hidden");
    setQuestionNumber(questionNumber+1);
    setMyAnswer(null);
    if(questionNumber === 9){
      changeActive("result");
    }
    for(let i=0; i<4; i++){
      document.getElementById(i).classList.remove("click");
      document.getElementById(i+"option").classList.remove("clickOption");
      document.getElementById(i).classList.remove("true");
      document.getElementById(i+"option").classList.remove("trueOption");
      document.getElementById(i).classList.remove("false");
      document.getElementById(i+"option").classList.remove("falseOption");
      document.getElementById(i+"correct").classList.add("hidden");
      document.getElementById(i+"false").classList.add("hidden");
      document.getElementById(i).disabled=false;
    }
  }

  function handleSubmit(){
    if(myAnswer === null){
      document.getElementById("errorMessage").classList.remove("hidden");
      return;
    }
    if(questions[questionNumber].options[myAnswer] === questions[questionNumber].answer){
      setScore(score+1);
      document.getElementById(localStorage.getItem("myAnswer")).classList.remove("click");
      document.getElementById(localStorage.getItem("myAnswer")+"option").classList.remove("clickOption");
      document.getElementById(localStorage.getItem("myAnswer")).classList.add("true");
      document.getElementById(localStorage.getItem("myAnswer")+"option").classList.add("trueOption");
      document.getElementById(myAnswer+"correct").classList.remove("hidden");
    }
    else{
      document.getElementById(localStorage.getItem("myAnswer")).classList.remove("click");
      document.getElementById(localStorage.getItem("myAnswer")+"option").classList.remove("clickOption");
      document.getElementById(localStorage.getItem("myAnswer")).classList.add("false");
      document.getElementById(localStorage.getItem("myAnswer")+"option").classList.add("falseOption");
      document.getElementById(myAnswer+"false").classList.remove("hidden");
      for(let i=0; i<4; i++){
        if(questions[questionNumber].options[i] === questions[questionNumber].answer){
          document.getElementById(i+"correct").classList.remove("hidden");
        }
      }
    }
    if(myAnswer !== null){
      document.getElementById("sub").classList.add("hidden");
      document.getElementById("next").classList.remove("hidden");
      for(let i=0; i<4; i++){
        document.getElementById(i).disabled=true;
      }
    }
  }
  useEffect(() => {
    setQuestionNumber(0);
    console.log(questionNumber);
    for (let i = 0; i < data.quizzes.length; i++) {
      if (data.quizzes[i].title === current) {
        const currentQuiz = data.quizzes[i];
        setQuestions(currentQuiz.questions);
        break;
      }
    }
  }, []);



  useEffect(() => {
    localStorage.setItem("questionNumber", questionNumber);
  }, [questionNumber]);

  useEffect(() => {
    localStorage.setItem("myAnswer", myAnswer);
  }, [myAnswer]);

console.log(questions[questionNumber].answer);

  return (
    <>
      <div className="w-full">
        <p className=" bodyS dark:dark-text-lightBlue mb-5">
          Question {questionNumber+1} of 10
        </p>
        <div>
          <h1 className=" headingM  dark:dark-text">
            {questions[questionNumber].question}
          </h1>
        </div>
      </div>
      <div className="flex flex-col w-full">
        {questions[questionNumber].options.map((option, index) => {
            return <Options content={questions[questionNumber].options[index]} key={index} id={index} handleClick={handleClick}/>;
        })}
        <br />
        <button id="sub" onClick={()=>{handleSubmit()}} className="headingS bg-purple py-4 rounded-xl shadow-sm hover:-translate-y-1 hover:opacity-70"><p className="text-white ">Submit Answer</p></button>
        <button id="next" onClick={()=>{handleNextQuestion()}} className=" hidden headingS bg-purple py-4 rounded-xl shadow-sm hover:-translate-y-1 hover:opacity-70"><p className="text-white ">{questionNumber===9?"End Quiz": "Next Question" }</p></button>
        <div id="errorMessage" className="hidden">
          <div className="flex justify-between ">
            <img src={FalseImage} alt=""/>
            <div className="bodyM text-red color-red"><h1>please select an answer</h1></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
