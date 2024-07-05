import { useState } from "react";

export const useSearch = () => {
    const [searchValue, setSearchValue] = useState("");

    const onChangeSearchValue = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setSearchValue(event.target.value);
    };

    return {
        searchValue,
        onChangeSearchValue,
    };
};
