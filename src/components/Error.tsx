import React from "react";

interface ErrorProps {
    error: string;
}

export const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <div className="App">
            <h1>
                Oops, Sorry :( <br /> {error}
            </h1>
        </div>
    );
};
