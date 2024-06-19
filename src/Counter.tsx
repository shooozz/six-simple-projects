import React, { useContext } from "react";
import { Context } from "./Provider";
import { usePlus } from "./hooks/usePlus";
import { useMinus } from "./hooks/useMinus";
import "./styles/Counter.css";

const Counter: React.FC = () => {
    const { count } = useContext(Context);
    // const increment = ;
    // const decrement = ;

    return (
        <div className="container">
            <section>
                <div className="counter">
                    <h2>Счетчик:</h2>
                    <h1>{count}</h1>
                    <button className="btn btn__minus" onClick={useMinus()}>
                        - Минус
                    </button>
                    <button className="btn btn__plus" onClick={usePlus()}>
                        Плюс +
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Counter;
