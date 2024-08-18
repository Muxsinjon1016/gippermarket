import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import { Home } from "./pages/home";
import { RenderCategoryProducts } from "./pages/home/components/renderCategoryProducts";
import { ProductDetails } from "./pages/home/components/productDetails";
import { RenderBrandsProducts } from "./pages/home/components/renderBrandProducts/renderBrandsProducts";
import { NotFound } from "./layout/notFound";
import { Cart } from "./pages/cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route
            path="category-product/:name"
            element={<RenderCategoryProducts />}
          />
          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route
            path="brand-products/:brand"
            element={<RenderBrandsProducts />}
          />
          <Route path="cart" element={<Cart />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
