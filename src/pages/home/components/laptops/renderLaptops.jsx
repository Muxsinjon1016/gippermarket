import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const RenderLaptops = ({
  img,
  title,
  brand,
  price,
  color,
  ram,
  geForce,
  core,
  display,
  memory,
  weight,
  id,
}) => {
  const navigate = useNavigate();

  const toDetails = () => {
    navigate(`/product-details/${id}`);
  };

  return (
    <>
      <div>
        <div
          onClick={() => toDetails(id)}
          key={id}
          className="w-[214px] container border-2 product transition-all overflow-hidden cursor-grab duration-300 text-center mb-[48px] relative h-[332px] rounded-12 hover:shadow-xl py-2 px-4"
        >
          <img
            className="w-[165px] transition-all duration-300 productImg h-[165px] mb-3"
            src={img}
            alt={title}
          />
          <h4>{title}</h4>
          <div className="absolute z-20 flex items-center gap-[11px] bottom-5 left-5">
            <p className="font-semibold">{price} Сум</p>
            <button className="p-2 bg-gipermart">
              <FaCartShopping />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenderLaptops;
