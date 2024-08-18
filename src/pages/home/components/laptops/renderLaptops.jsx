import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { saveState, loadState } from "../../../../config/storage";

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
  const [cart, setCart] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const savedItem = loadState(id);
    if (savedItem) {
      setCount(savedItem.count);
      setCart(true);
    }
  }, [id]);

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

  const toDetails = () => {
    navigate(`/product-details/${id}`);
  };

  return (
    <>
      <div>
        <div className="w-[214px] container border-2 product transition-all overflow-hidden duration-300 text-center mb-[48px] relative h-[352px] rounded-12 hover:shadow-xl py-2 px-4">
          <img
            className="w-[165px] h-[165px] mb-3"
            src={img}
            alt="phone image"
          />
          <h4 className="truncate">{title}</h4>
          <div className="absolute z-20 bottom-5 left-5">
            <p
              className="mb-2 cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-gray-400"
              onClick={() => toDetails(id)}
            >
              more info
            </p>
            <div className="flex items-center gap-[11px]">
              <p className="font-semibold">{price} Сум</p>
              {!cart && (
                <button onClick={savetoLocal} className="p-2 bg-gipermart">
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
      </div>
    </>
  );
};

export default RenderLaptops;
