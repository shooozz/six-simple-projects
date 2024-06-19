import React from "react";
import { ResultProps } from "./types/StateContext";

const Result: React.FC<ResultProps> = ({ countRightAnswer, questions }) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>
                Вы отгадали {countRightAnswer} ответа из {questions.length}
            </h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
};

export default Result;
