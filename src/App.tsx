import React, { useContext } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

import "./styles/Quiz.css";

import { Provider, Question } from "./types/StateContext";
import { Context } from "./types/StateContext";

const App: React.FC = () => {
    const [step, setStep] = React.useState<number>(0);
    const [countRightAnswer, setCountRightAnswer] = React.useState<number>(0);
    const { questions } = useContext(Context);

    const currentQuestion: Question = questions[step];

    const onClickVariant = (index: number): void => {
        setStep((prev) => prev + 1);
        if (index === currentQuestion.correct) {
            setCountRightAnswer((prev) => prev + 1);
        }
    };

    return (
        <Provider>
            <div className="App">
                {step !== questions.length ? (
                    <Quiz
                        currentQuestion={currentQuestion}
                        onClickVariant={onClickVariant}
                        step={step}
                        questions={questions}
                    />
                ) : (
                    <Result
                        countRightAnswer={countRightAnswer}
                        questions={questions}
                    />
                )}
            </div>
        </Provider>
    );
};

export default App;
