import axios from "axios";
const API_URL = "https://reqres.in/api";
import { UsersResponse } from "../types/types";

export const fetchUsers = async (): Promise<UsersResponse> => {
    const response = await axios.get<UsersResponse>(`${API_URL}/users`);
    return response.data;
};
