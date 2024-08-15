import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import { Home } from "./pages/home";
import { RenderCategoryProducts } from "./pages/home/components/renderCategoryProducts";
import { ProductDetails } from "./pages/home/components/productDetails";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="*"
            element={
              <h1 className="mt-[230px] font-bold text-7xl block ml-64 container">
                NotFound
              </h1>
            }
          />
          <Route index element={<Home />} />
          <Route
            path="category-product/:name"
            element={<RenderCategoryProducts />}
          />
          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
