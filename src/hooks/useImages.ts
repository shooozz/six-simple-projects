import { useQuery, UseQueryResult } from "react-query";
import { fetchImages } from "../api/imagesApi";
import { ImagesResponse } from "../types/types";

export const useImages = (): // categoryId: number
UseQueryResult<ImagesResponse[], Error> => {
    return useQuery<ImagesResponse[], Error>(
        [
            "images",
            // categoryId
        ],
        () =>
            fetchImages(),
            // categoryId
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        }
    );
};
