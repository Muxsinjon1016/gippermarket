import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { saveState } from "../../../../config/storage";

export const RenderPhones = ({ img, title, price, id }) => {
  const savetoLocal = () => {
    // saveState(id);
    console.log("ihuygtfr");
  };

  return (
    <>
      <div className="w-[214px] mb-[48px] relative h-[300px] py-2 px-4">
        <img className="w-[165px] h-[165px] mb-3" src={img} alt="phone image" />
        <h4>{title}</h4>
        <div className="absolute flex items-center gap-[11px] bottom-0 left-0">
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
