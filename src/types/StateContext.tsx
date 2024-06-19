import React from "react";

export type Question = {
    title: string;
    variants: string[];
    correct: number;
};

export type ResultProps = {
    countRightAnswer: number;
    questions: Question[];
};

export type QuizProps = {
    currentQuestion: Question;
    onClickVariant: (index: number) => void;
    step: number;
    questions: Question[];
};

interface ContextType {
    questions: Question[];
}

interface ProviderProps {
    children: React.ReactNode;
}

const questions: Question[] = [
    {
        title: "React - это ... ?",
        variants: ["библиотека", "фреймворк", "приложение"],
        correct: 0,
    },
    {
        title: "Компонент - это ... ",
        variants: [
            "приложение",
            "часть приложения или страницы",
            "то, что я не знаю что такое",
        ],
        correct: 1,
    },
    {
        title: "Что такое JSX?",
        variants: [
            "Это простой HTML",
            "Это функция",
            "Это тот же HTML, но с возможностью выполнять JS-код",
        ],
        correct: 2,
    },
];

const defaultValue: ContextType = {
    questions: questions,
};

export const Context = React.createContext<ContextType>(defaultValue);

export const Provider: React.FC<ProviderProps> = ({ children }) => {
    return (
        <Context.Provider value={{ questions }}>{children}</Context.Provider>
    );
};
