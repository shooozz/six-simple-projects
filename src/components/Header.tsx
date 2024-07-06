import React from "react";
import { useImages } from "../hooks/useImages";
import { Category, HeaderProps } from "../types/types";

export const Header: React.FC<HeaderProps> = ({
    searchValue,
    onChangeSearchValue,
    categoryId,
    onChangeCategoryId,
}) => {
    const { data } = useImages();
    if (data) {
        const categories: Category[] = data[0].categories;
        return (
            <>
                <h1>Моя коллекция фотографий</h1>
                <div className="top">
                    <ul className="tags">
                        {categories.map((category, index) => (
                            <li
                                className={categoryId === index ? "active" : ""}
                                key={index}
                                onClick={() => onChangeCategoryId(index)}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>
                    <input
                        value={searchValue}
                        onChange={onChangeSearchValue}
                        className="search-input"
                        placeholder="Поиск по названию"
                    />
                </div>
            </>
        );
    }
};
