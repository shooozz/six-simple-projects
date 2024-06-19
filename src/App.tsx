import React from "react";
import "./App.css";

const App: React.FC = () => {
    const [count, setCount] = React.useState<number>(0);
    return (
        <>
            <div className="container">
                <section>
                    <div className="counter">
                        <h2>Счетчик:</h2>
                        <h1>{count}</h1>
                        <button
                            className="btn btn__minus"
                            onClick={() => setCount((prev) => prev - 1)}
                        >
                            - Минус
                        </button>
                        <button
                            className="btn btn__plus"
                            onClick={() => setCount((prev) => prev + 1)}
                        >
                            Плюс +
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default App;
