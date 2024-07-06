import { useState } from "react";

export const useCategories = () => {
    const [categoryId, setCategoryId] = useState(0);

    const onChangeCategoryId = (index: number): void => {
        setCategoryId(index);
    };

    return {
        categoryId,
        onChangeCategoryId,
    };
};
