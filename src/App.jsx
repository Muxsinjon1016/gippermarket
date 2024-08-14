import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import { Home } from "./pages/home";
import { RenderCategoryProducts } from "./pages/home/components/renderCategoryProducts/renderCategoryProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="category-product/:name"
            element={<RenderCategoryProducts />}
          />
          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
