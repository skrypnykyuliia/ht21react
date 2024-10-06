import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../features/questionnaire/questionnaireSlice";
import styles from "../styles/Question.module.css";

const Question = ({ id, question, options }) => {
  const dispatch = useDispatch();
  const answer = useSelector((state) => state.questionnaire.answers[id]);

  const handleAnswer = (option) => {
    dispatch(answerQuestion({ id, answer: option }));
  };

  return (
    <div className={styles.questionContainer}>
      <h3>{question}</h3>
      <div className={styles.options}>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className={`${styles.optionButton} ${
              answer === option ? styles.selected : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;