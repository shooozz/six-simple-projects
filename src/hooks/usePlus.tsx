import { useContext } from "react";
import { Context } from "../Provider";

export const usePlus = () => {
    const { count, setCount } = useContext(Context);
    return () => setCount(count + 1);
};
