import React from "react";
import Celebrate from "../.././assets/images/Celebrate.png";

import "./index.css";

export const Result = ({ correct, handleClickButtonRestart }) => {
  return (
    <div className="result-container">
      <img className="img" src={Celebrate} alt="celebrate"></img>
      <h2 className="result-text">
        Правильных ответов {correct} из 5
      </h2>
      <button className="result-button" onClick={handleClickButtonRestart}>
        Пройти тест снова
      </button>
    </div>
  );
};
