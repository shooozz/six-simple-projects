import axios from "axios";
import { ImagesResponse } from "../types/types";
// import { useCategories } from "../hooks/useCategories";

const BASE_URL = "https://6688f77b0ea28ca88b868fa0.mockapi.io/api/photos/fff";

// const {categoryId} = useCategories()
// ${categoryId ? `category=${categoryId}`: ''}
export const fetchImages = async (): // categoryId: number
Promise<ImagesResponse[]> => {
    const response = await axios.get<ImagesResponse[]>(`${BASE_URL}?`);
    return response.data;
};
