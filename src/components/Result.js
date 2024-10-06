// src/components/Result.js
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Result.module.css";

const Result = () => {
  const { answers, questions } = useSelector((state) => state.questionnaire);

  return (
    <div className={styles.resultContainer}>
      <h2>Результаты</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <strong>{question.question}</strong>:{" "}
            {answers[question.id] || "Нет ответа"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;