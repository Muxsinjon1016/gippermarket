import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const RenderPhones = ({ img, title, price, id }) => {
  const navigate = useNavigate();

  const savetoLocal = () => {
    console.log("ihuygtfr");
  };

  const toDetails = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <>
      <div
        onClick={() => toDetails(id)}
        className="w-[214px] container border-2 product transition-all overflow-hidden cursor-grab duration-300 text-center mb-[48px] relative h-[332px] rounded-12 hover:shadow-xl py-2 px-4"
      >
        <img className="w-[165px] h-[165px] mb-3" src={img} alt="phone image" />
        <h4>{title}</h4>
        <div className="absolute flex items-center gap-[11px] bottom-5 left-5">
          <p className="font-semibold">{price} Сум</p>
          <button onClick={savetoLocal} className="p-2 bg-gipermart">
            <FaCartShopping />
          </button>
        </div>
      </div>
    </>
  );
};

export default RenderPhones;
