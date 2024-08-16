import React from "react";
import { useBrandProducts } from "../../services/useBrandProducts";
import { useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useBrands } from "../../services/useBrands";

export const RenderBrandsProducts = () => {
  const { brand } = useParams();
  const { data } = useBrandProducts();
  const navigate = useNavigate();

  const { brandsName } = useBrands();

  const brandFiltered = data?.filter((item) => item.brand === brand);

  const toDetails = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="w-[16%] sticky top-36 scrollbar-custom  max-h-[calc(100vh-144px)] overflow-y-auto border-2 left-10">
          <div>
            <p className="font-medium border-b-2 py-3 px-4">Производитель</p>
            <div>
              {brandsName?.map((name) => (
                <>
                  <div>
                    <p>{name.brand}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[80%] ml-auto mt-[150px]">
          <div className="flex items-center justify-between flex-wrap">
            {brandFiltered?.map((item) => (
              <div
                onClick={() => toDetails(item.id)}
                className="w-[214px] container border-2 product transition-all overflow-hidden cursor-grab duration-300 text-center mb-[48px] relative h-[332px] rounded-12 hover:shadow-xl py-2 px-4"
              >
                <img
                  className="w-[165px] h-[165px] mb-3"
                  src={item.img}
                  alt="phone image"
                />
                <h4>{item.title}</h4>
                <div className="absolute flex items-center gap-[11px] bottom-5 left-5">
                  <p className="font-semibold">{item.price} Сум</p>
                  <button
                    onClick={item.savetoLocal}
                    className="p-2 bg-gipermart"
                  >
                    <FaCartShopping />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
