import React, { useState, useEffect } from "react";
import { useAllProducts } from "../../services/useAllProducts";
import { DayProductSkeleton } from "../../../../components/ui/dayProductSkelaton";
import { useNavigate } from "react-router-dom";

export const DayOfProduct = () => {
  const { data, isLoading } = useAllProducts();
  const [randomProduct, setRandomProduct] = useState(null);

  useEffect(() => {
    if (!isLoading && data) {
      let matchedProduct = null;
      const ids = data.map((product) => product.id);

      while (!matchedProduct) {
        const randomNum = Math.floor(Math.random() * 101);
        if (ids.includes(randomNum)) {
          matchedProduct = data.find((product) => product.id === randomNum);
        }
      }

      setRandomProduct(matchedProduct);
    }
  }, [data, isLoading]);

  const navigate = useNavigate();

  const toDetails = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div>
      <div className="py-3 px-5 border-2 rounded-20 mb-14 text-center mx-auto overflow-hidden">
        <h3 className="md:text-2xl text-xl font-bold text-center mb-2">
          Product of the day
        </h3>
        <div>
          {isLoading ? (
            <DayProductSkeleton />
          ) : (
            randomProduct && (
              <div
                className="cursor-pointer"
                onClick={() => toDetails(randomProduct.id)}
                key={randomProduct.id}
              >
                <img
                  className="md:w-[300px] w-[200px] transition-all duration-500 hover:scale-[1.05] h-[200px] md:h-[300px]"
                  src={randomProduct.img}
                  alt="Product"
                />
                <h4 className="text-lg font-medium truncate max-w-[20ch]">
                  {randomProduct.title}
                </h4>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DayOfProduct;
