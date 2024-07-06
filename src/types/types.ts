export interface ImagesResponse {
    categories: Category[];
    collections: CollectionType[];
}
export interface CollectionType {
    category: number;
    name: string;
    photos: string[];
}

export interface Category {
    name: string;
}

export interface HeaderProps {
    searchValue: string;
    onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    categoryId: number;
    onChangeCategoryId: (index: number) => void;
}
