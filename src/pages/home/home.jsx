import React from "react";
import { Banner } from "./components/banner";
import { Categories } from "./components/categories";
import { Advert } from "./components/advert";
import { Discount } from "./components/discount";
import { Mixed } from "./components/mixed";
import { Laptops } from "./components/laptops";
import { Brands } from "./components/bands";

export const Home = () => {
  return (
    <>
      <div className="container">
        <Banner />
        <Categories />
        <Advert />
      </div>
      <Discount />
      <div className="container">
        <Advert />
        <Laptops />
        <Brands />
      </div>
    </>
  );
};

export default Home;
