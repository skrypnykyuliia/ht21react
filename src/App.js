// src/App.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";
import Question from "./components/Question";
import Result from "./components/Result";
import styles from "./styles/App.module.css";

function App() {
  const dispatch = useDispatch();
  const { questions, submitted } = useSelector((state) => state.questionnaire);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className={styles.appContainer}>
      <h1>Анкета</h1>
      {!submitted ? (
        <div>
          {questions.map((q) => (
            <Question key={q.id} {...q} />
          ))}
          <button onClick={handleSubmit} className={styles.submitButton}>
            Отправить
          </button>
        </div>
      ) : (
        <Result />
      )}
    </div>
  );
}

export default App;