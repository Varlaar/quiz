import React, { useState } from "react";
import { Result } from "./components/Result";
import { Test } from "./components/Test";

import "./App.css";

const questions = [
  {
    title: "Что такое React JS?",
    answer: ["JavaScript библиотека", "Фреймворк", "Приложение"],
    correct: 0,
  },

  {
    title: "Можно ли писать не используя Babel?",
    answer: ["Нет, нельзя", "Да, можно"],
    correct: 1,
  },

  {
    title: "Чем свойства отличаются от состояний?",
    answer: [
      "Свойства можно изменять, состояния нельзя",
      "Состояния для работы со значениями, свойства для работы с функциями",
      "Состояния можно изменять, свойства нельзя",
    ],
    correct: 2,
  },

  {
    title: "Какая компания разработала React JS?",
    answer: ["Twitter", "Google", "Facebook"],
    correct: 2,
  },

  {
    title: "Как много компонентов может быть на сайте?",
    answer: ["Не более 10", "Не более 100", "Неограниченное количество"],
    correct: 2,
  },

  {
    title: "Как много?",
    answer: ["Не более 10", "Не более 100", "Неограниченное количество"],
    correct: 2,
  },

  {
    title: "Как много компонентов?",
    answer: ["Не более 10", "Не более 100", "Неограниченное количество"],
    correct: 2,
  },
];

// function getRandomArrayElement(questions){
//   const randomQuestion = questions[Math.floor(Math.random()*questions.length)]
//   if (questions[step].title === randomQuestion.title) {
//     console.log('aaaa')
//   } else {
//     return questions[Math.floor(Math.random()*questions.length)]
//   }
// }

// console.log(getRandomArrayElement(questions))

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const handlerClickAnswer = (i) => {
    setStep((nextProp) => nextProp + 1);

    if (i === question.correct) {
      setCorrect((nextProp) => nextProp + 1);
    }
  };

  const handleClickButtonRestart = () => {
    setStep(0);
    setCorrect(0);
  };

  function getRandomArrayElement(questions) {
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    if (questions[step].title === randomQuestion.title) {
      return;
    } else {
      return randomQuestion;
    }
  }

  console.log(getRandomArrayElement(questions));

  return (
    <div className="wrapper">
      {step < 5 ? (
        <Test
          question={question}
          handlerClickAnswer={handlerClickAnswer}
          step={step}
        />
      ) : (
        <Result
          correct={correct}
          handleClickButtonRestart={handleClickButtonRestart}
        />
      )}
    </div>
  );
}

export default App;
