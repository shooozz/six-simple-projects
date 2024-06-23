import React from "react";
import { Skeleton } from "./components/Users/Skeleton";
import { Users } from "./components/Users/";
import { Success } from "./components/Success";
import { useUsers } from "./hooks/useUsers";
import "./styles/Users.css";

const App: React.FC = () => {
    const [searchValue, setSearchValue] = React.useState("");
    const [invites, setInvites] = React.useState<number[]>([]);
    const [succes, setSucces] = React.useState(false);
    const { data } = useUsers();

    const onChangeSearchValue = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setSearchValue(event.target.value);
    };

    const onClickInvite = (id: number): void => {
        if (invites.includes(id)) {
            setInvites((prev) => prev.filter((_id) => _id !== id));
        } else {
            setInvites((prev) => [...prev, id]);
        }
    };

    const onClickSendInvites = () => {
        setSucces(true);
    };

    return (
        <div className="App">
            {succes ? (
                <Success count={invites.length} />
            ) : data ? (
                <Users
                    itemsUsers={data.data}
                    searchValue={searchValue}
                    onChangeSearchValue={onChangeSearchValue}
                    invites={invites}
                    onClickInvite={onClickInvite}
                    onClickSendInvites={onClickSendInvites}
                />
            ) : (
                <Skeleton />
            )}
        </div>
    );
};

export default App;
