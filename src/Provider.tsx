import React, {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";

interface ContextType {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
}

const defaultValue: ContextType = {
    count: 0,
    setCount: () => {},
};

export const Context = createContext<ContextType>(defaultValue);

interface ProviderProps {
    children: ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <Context.Provider value={{ count, setCount }}>
            {children}
        </Context.Provider>
    );
};
