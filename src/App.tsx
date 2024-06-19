import React from "react";
import { Provider } from "./Provider";
import Counter from "./Counter";

const App: React.FC = () => {
    return (
        <Provider>
            <Counter />
        </Provider>
    );
};

export default App;
