import React from "react";

import "./index.css";

export const Test = ({question, handlerClickAnswer, step }) => {
  const progressPercent = Math.round((step / 5) * 100);
  console.log(progressPercent);

  return (
    <div className="test-container">
      <div className="progress">
        <div
          style={{ width: `${progressPercent}%` }}
          className="progress__bar"
        ></div>
      </div>
      <h1 className="test-title">{question.title}</h1>
      <ul className="list">
        {question.answer.map((item, index) => (
          <li
            className="list__item"
            key={index}
            onClick={() => handlerClickAnswer(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
