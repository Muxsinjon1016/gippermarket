import React from "react";
import { Banner } from "./components/banner";
import { Categories } from "./components/categories";
import { Advert } from "./components/advert";
import { Discount } from "./components/discount";

export const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Advert />
      <Discount />
    </>
  );
};

export default Home;
