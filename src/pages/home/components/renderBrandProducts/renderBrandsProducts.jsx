import React from "react";
import { useBrandProducts } from "../../services/useBrandProducts";
import { useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useBrands } from "../../services/useBrands";
import { ProductSkeleton } from "../../../../components/ui/skeletonProducts";
import { saveState, loadState } from "../../../../config/storage";

export const RenderBrandsProducts = () => {
  const { brand } = useParams();
  const { data, isLoading } = useBrandProducts();
  const { brandsName } = useBrands();
  const navigate = useNavigate();

  const brandFiltered = data?.filter((item) => item.brand === brand);
  const [cart, setCart] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const savedItem = loadState(item.id);
    if (savedItem) {
      setCount(savedItem.count);
      setCart(true);
    }
  }, [item.id]);

  const savetoLocal = () => {
    const newItem = { img, id, title, price, count: 1 };
    saveState(id, newItem);
    setCount(1);
    setCart(true);
  };

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    saveState(id, { id, img, title, price, count: newCount });
  };

  const decrementCount = () => {
    const newCount = count > 0 ? count - 1 : 0;
    setCount(newCount);
    if (newCount > 0) {
      saveState(id, { id, img, title, price, count: newCount });
    } else {
      localStorage.removeItem(id);
      setCart(false);
    }
  };

  const toDetails = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div className="flex">
      {brandFiltered && brandFiltered.length > 0 ? (
        <>
          <div className="w-[16%] sticky top-36 scrollbar-custom max-h-[calc(100vh-144px)] overflow-y-auto border-2 left-10">
            <div>
              <p className="font-medium border-b-2 py-3 px-4">Производитель</p>
              <div>
                {brandsName?.map((name) => (
                  <div key={name.brand}>
                    <p>{name.brand}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[80%] ml-auto mt-[150px]">
            <div className="flex items-center justify-between flex-wrap">
              {isLoading ? (
                <ProductSkeleton />
              ) : (
                brandFiltered.map((item) => (
                  <div
                    key={item.id}
                    className="w-[214px] container border-2 product transition-all overflow-hidden cursor duration-300 text-center mb-[48px] relative h-[352px] rounded-12 hover:shadow-xl py-2 px-4"
                  >
                    <img
                      className="w-[165px] h-[165px] mb-3"
                      src={item.img}
                      alt="phone image"
                    />
                    <h4 className="truncate">{item.title}</h4>
                    <div className="absolute z-20 bottom-5 left-5">
                      <p
                        className="mb-2 cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-gray-400"
                        onClick={() => toDetails(id)}
                      >
                        more info
                      </p>
                      <div className="flex items-center gap-[11px]">
                        <p className="font-semibold">{item.price} Сум</p>
                        {!cart && (
                          <button
                            onClick={savetoLocal}
                            className="p-2 bg-gipermart"
                          >
                            <FaCartShopping />
                          </button>
                        )}
                      </div>
                      {cart && (
                        <div className="flex justify-evenly items-center mt-2">
                          <button
                            className="rounded-6 py-1 px-3 bg-gray-100 font-semibold hover:bg-white border-2"
                            onClick={decrementCount}
                          >
                            -
                          </button>
                          <p className="rounded-6 py-1 px-3 bg-gray-100 font-semibold hover:bg-white border-2">
                            {count}
                          </p>
                          <button
                            className="rounded-6 py-1 px-3 bg-gray-100 font-semibold hover:bg-white border-2"
                            onClick={incrementCount}
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="w-full flex justify-center items-center h-screen">
          <p className="text-7xl font-semibold">
            There is not any product for this brand
          </p>
        </div>
      )}
    </div>
  );
};
