import { UseQueryResult, useQuery } from "react-query";
import { fetchUsers } from "../api/users";
import { UsersResponse } from "../types/types";

export const useUsers = (): UseQueryResult<UsersResponse, Error> => {
    return useQuery<UsersResponse, Error>(["users"], fetchUsers, {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    });
};
