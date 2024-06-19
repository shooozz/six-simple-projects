import React from "react";
import { QuizProps } from "./types/StateContext";

const Quiz: React.FC<QuizProps> = ({
    currentQuestion,
    onClickVariant,
    step,
    questions,
}) => {
    const percentage = Math.round((step / questions.length) * 100);
    return (
        <>
            <div className="progress">
                <div
                    style={{ width: `${percentage}%` }}
                    className="progress__inner"
                ></div>
            </div>
            <h1>{currentQuestion.title}</h1>
            <ul>
                {currentQuestion.variants.map((answer, index) => (
                    <li key={answer} onClick={() => onClickVariant(index)}>
                        {answer}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Quiz;
