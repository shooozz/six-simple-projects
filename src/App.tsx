import React from "react";
import { Skeleton } from "./components/Users/Skeleton";
import { Users } from "./components/Users/";
import { useUsers } from "./hooks/useUsers";
import "./styles/Users.css";

const App: React.FC = () => {
    const { data } = useUsers();

    return <div className="App">{data ? <Users /> : <Skeleton />}</div>;
};

export default App;
