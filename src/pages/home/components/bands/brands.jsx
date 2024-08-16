import React from "react";
import { useBrands } from "../../services/useBrands";
import { useNavigate } from "react-router-dom";

export const Brands = () => {
  const { data } = useBrands();
  const navigate = useNavigate();

  const toDetails = (brand) => {
    navigate(`brand-products/${brand}`);
  };

  return (
    <>
      <div>
        <h2 className="text-xl container font-semibold mb-6">
          Популярные бренды
        </h2>
        <div className="flex container flex-wrap gap-4 mb-[110px]">
          {data?.map((brand) => (
            <div
              onClick={() => toDetails(brand.brand)}
              className="w-[180px] cursor-pointer h-[90px] py-2 px-4 rounded-20 flex items-center justify-center bg-gray-50"
            >
              <img src={brand.img} alt={brand.brand} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
