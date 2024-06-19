import { useContext } from "react";
import { Context } from "../Provider";

export const useMinus = () => {
    const { count, setCount } = useContext(Context);
    return () => setCount(count - 1);
};
