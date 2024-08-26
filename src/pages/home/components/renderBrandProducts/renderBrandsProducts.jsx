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

  // State management for cart items
  const [cartItems, setCartItems] = React.useState({});

  React.useEffect(() => {
    // Load saved items from local storage
    const savedCart = {};
    data?.forEach((item) => {
      const savedItem = loadState(item.id);
      if (savedItem) {
        savedCart[item.id] = savedItem;
      }
    });
    setCartItems(savedCart);
  }, [data]);

  const savetoLocal = (item) => {
    const newItem = { ...item, count: 1 };
    saveState(item.id, newItem);
    setCartItems((prev) => ({ ...prev, [item.id]: newItem }));
  };

  const incrementCount = (item) => {
    const updatedItem = {
      ...cartItems[item.id],
      count: cartItems[item.id].count + 1,
    };
    saveState(item.id, updatedItem);
    setCartItems((prev) => ({ ...prev, [item.id]: updatedItem }));
  };

  const decrementCount = (item) => {
    const updatedItem = {
      ...cartItems[item.id],
      count: cartItems[item.id].count - 1,
    };
    if (updatedItem.count > 0) {
      saveState(item.id, updatedItem);
      setCartItems((prev) => ({ ...prev, [item.id]: updatedItem }));
    } else {
      localStorage.removeItem(item.id);
      setCartItems((prev) => {
        const { [item.id]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const toDetails = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div className="flex">
      {brandFiltered && brandFiltered.length > 0 ? (
        <>
          <div className="w-[16%] hidden lg:block sticky top-36 scrollbar-custom max-h-[calc(100vh-144px)] overflow-y-auto border-2 left-10">
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
          <div className="lg:w-[80%] ml-auto mt-[150px]">
            <div className="flex items-center justify-evenly flex-wrap">
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
                        onClick={() => toDetails(item.id)}
                      >
                        more info
                      </p>
                      <div className="flex items-center gap-[11px]">
                        <p className="font-semibold">{item.price} Сум</p>
                        {!cartItems[item.id] ? (
                          <button
                            onClick={() => savetoLocal(item)}
                            className="p-2 bg-gipermart"
                          >
                            <FaCartShopping />
                          </button>
                        ) : (
                          <div className="flex justify-evenly items-center mt-2">
                            <button
                              className="rounded-6 py-1 px-3 bg-gray-100 font-semibold hover:bg-white border-2"
                              onClick={() => decrementCount(item)}
                            >
                              -
                            </button>
                            <p className="rounded-6 py-1 px-3 bg-gray-100 font-semibold hover:bg-white border-2">
                              {cartItems[item.id].count}
                            </p>
                            <button
                              className="rounded-6 py-1 px-3 bg-gray-100 font-semibold hover:bg-white border-2"
                              onClick={() => incrementCount(item)}
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
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
