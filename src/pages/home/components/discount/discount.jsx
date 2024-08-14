import React from "react";
import { useDiscount } from "../../services/useDiscount";

export const Discount = () => {
  const { data } = useDiscount();

  return (
    <>
      <div className="bg-gradient-to-r mb-8 from-[rgba(222,0,255,1)] to-[rgba(255,252,0,1)] pt-4 pb-8">
        <div className="container">
          <h2 className="font-semibold text-2xl mb-6">Акции</h2>
          <div className="flex items-center justify-between">
            {data?.map((discount) => (
              <div key={discount.id}>
                <img className="rounded-20" src={discount.img} alt="img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
