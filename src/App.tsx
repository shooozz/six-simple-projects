import React from "react";
import { Collection } from "./components/Collection";
import { useImages } from "./hooks/useImages";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";
// import { Pagination } from "./components/Pagination";
import { Header } from "./components/Header";
import { CollectionType } from "./types/types";
import { useSearch } from "./hooks/useSearch";
import { useCategories } from "./hooks/useCategories";

const App: React.FC = () => {
    const { searchValue, onChangeSearchValue } = useSearch();
    const { categoryId, onChangeCategoryId } = useCategories();
    const { data, error, isLoading } = useImages();
    // categoryId

    if (isLoading) {
        return <Loading />;
    }

    if (error?.message) {
        return <Error error={error.message} />;
    }

    if (!data) {
        return <div>No data available</div>;
    }

    if (data) {
        const collections: CollectionType[] = data[0].collections;
        return (
            <div className="App">
                <Header
                    searchValue={searchValue}
                    onChangeSearchValue={onChangeSearchValue}
                    categoryId={categoryId}
                    onChangeCategoryId={onChangeCategoryId}
                />
                <div className="content">
                    {collections
                        .filter((collection) =>
                            collection.name
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        )
                        .filter((collection) =>
                            categoryId
                                ? collection.category === categoryId
                                : true
                        )
                        .map((collection, index) => {
                            return (
                                <Collection
                                    key={index}
                                    name={collection.name}
                                    images={collection.photos}
                                />
                            );
                        })}
                </div>
                {/* <Pagination /> */}
            </div>
        );
    }
    return (
        <div>
            <h1>Please, try later.</h1>
        </div>
    );
};

export default App;
