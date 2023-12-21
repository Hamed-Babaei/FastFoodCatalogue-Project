import React from "react";
import { useEffect, useState } from "react";
import CategoryList from "../Components/CategoryList/categoryList";
import Header from "../Components/Header/header";
import Loading from "../Components/Loading/loading";
import FastFoodList from "../Components/FastFoodList/fastFoodList";
import SearchBar from "../Components/SearchBar/SearchBar";
import notFound from "../assets/images/404.png";
import useAxios from "../useAxios";

export default function Home() {
  const [url, setUrl] = useState("/FastFood/list");
  const [fastFoodItems, , loading] = useAxios({
    url,
  });

  const filterItems = (categoryId) => {
    setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
  };

  const searchItems = async (term) => {
    setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }

    if (fastFoodItems.length === 0) {
      return (
        <>
          <div className="alert alert-warning text-center">
            برای کلیدواژه فوق هیچ آیتمی یافت نشد
          </div>
          <img className="mx-auto mt-5 d-block fade-in-horiz" src={notFound} />
        </>
      );
    }
    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  return (
    <>
      <div className="wrapper bg-faded-dark">
        <Header></Header>
        <CategoryList filterItems={filterItems}>
          <SearchBar searchItems={searchItems} />
        </CategoryList>
        <div className="container mt-4">{renderContent()}</div>
      </div>
    </>
  );
}
