import React, { useEffect, useState } from "react";
import { saveState } from "../../config/storage";
import { FaTrash } from "react-icons/fa";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = JSON.parse(localStorage.getItem(key));
      storedCartItems.push(item);
    }
    setCartItems(storedCartItems);
  }, []);

  const incrementCount = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const newCount = item.count + 1;
        const updatedItem = { ...item, count: newCount };
        saveState(id, updatedItem);
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const decrementCount = (id) => {
    const updatedItems = cartItems
      .map((item) => {
        if (item.id === id) {
          const newCount = item.count > 1 ? item.count - 1 : 0;
          if (newCount > 0) {
            const updatedItem = { ...item, count: newCount };
            saveState(id, updatedItem);
            return updatedItem;
          } else {
            localStorage.removeItem(id);
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);
    setCartItems(updatedItems);
  };

  const removeItem = (id) => {
    localStorage.removeItem(id);
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <div className="container my-[150px]">
      <h1 className="text-2xl font-medium">Корзина</h1>
      <div className="flex mt-6 justify-between">
        <div className="w-[75%]">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="py-6 flex gap-4 px-6 border-b-2">
                <img
                  className="w-[200px] h-[200px]"
                  src={item.img}
                  alt={item.title}
                />
                <div>
                  <div className="flex mb-4 justify-between">
                    <h2 className="text-2xl gap-40 w-[570px] font-medium">
                      {item.title}
                    </h2>
                    <p className="text-lg ml-20">Price: {item.price}</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex cursor-pointer items-center gap-3"
                        onClick={() => removeItem(item.id)}
                      >
                        <FaTrash className="text-gray-300 transition-all duration-300 hover:text-black font-bold" />
                        <p className="text-gray-300 transition-all duration-300 hover:text-black font-bold">
                          Удалить
                        </p>
                      </div>
                      <div className="flex bg-gray-300 rounded-6 gap-2 items-center mt-2">
                        <button
                          className="rounded-6 py-1 px-3 bg-gray-100 font-semibold hover:bg-white border-2"
                          onClick={() => decrementCount(item.id)}
                        >
                          -
                        </button>
                        <p className="rounded-6 py-1 px-3 bg-gray-100 font-semibold border-2">
                          {item.count}
                        </p>
                        <button
                          className="rounded-6 py-1 px-3 bg-gray-100 font-semibold hover:bg-white border-2"
                          onClick={() => incrementCount(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>
        <div className="w-[20%]"></div>
      </div>
    </div>
  );
};

export default Cart;
  