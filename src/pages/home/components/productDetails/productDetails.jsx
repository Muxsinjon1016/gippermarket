import React, { Children } from "react";
import { useProductDetails } from "../../services/useProductDetails";
import { ProductDetailSkeleton } from "../../../../components/ui/productDetailSkeleton";
import { IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { Button } from "../../../../components/ui/button";
import { saveState } from "../../../../config/storage";

export const ProductDetails = () => {
  const { data, isLoading } = useProductDetails();
  const [allDetail, setAllDetail] = React.useState(false);
  const [cart, setCart] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (data?.id) {
      const savedItem = JSON.parse(localStorage.getItem(data.id) || "{}");
      if (savedItem?.count !== undefined) {
        setCount(savedItem.count);
        setCart(true);
      }
    }
  }, [data?.id]);

  const savetoLocal = () => {
    const newItem = {
      img: data.img,
      id: data.id,
      title: data.title,
      price: data.price,
      count: 1,
    };
    saveState(data.id, newItem);
    setCount(1);
    setCart(true);
  };

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    saveState(data.id, {
      id: data.id,
      img: data.img,
      title: data.title,
      price: data.price,
      count: newCount,
    });
  };

  const decrementCount = () => {
    const newCount = count > 0 ? count - 1 : 0;
    setCount(newCount);
    if (newCount > 0) {
      saveState(data.id, {
        id: data.id,
        img: data.img,
        title: data.title,
        price: data.price,
        count: newCount,
      });
    } else {
      localStorage.removeItem(data.id);
      setCart(false);
    }
  };

  return (
    <>
      <div className="mt-[150px] container">
        {isLoading ? (
          <ProductDetailSkeleton />
        ) : (
          <div key={data.id}>
            <h1 className="font-semibold text-2xl mt-6 mb-4">{data.title}</h1>
            <div className="flex  items-center gap-8 mb-6 pb-5 border-b-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <IoStar className="text-[#FFCE39] w-4 h-auto" />
                  <IoStar className="text-[#FFCE39] w-4 h-auto" />
                  <IoStar className="text-[#FFCE39] w-4 h-auto" />
                  <IoStar className="text-[#FFCE39] w-4 h-auto" />
                  <IoStar className="text-[#FFCE39] w-4 h-auto" />
                </div>
                <p className="text-[#76bc21]">(0)</p>
              </div>
              <div className="flex items-center gap-3">
                <FaRegHeart className="w-6 cursor-pointer h-auto" />
                <p className="font-medium">В избранное</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-7 items-start justify-evenly">
              <div className="flex flex-wrap justify-evenly items-start gap-8">
                <img
                  className="sm:w-[435px] sm:h-[435px]"
                  src={data.img}
                  alt={data.title}
                />
                <div>
                  {data.rame && (
                    <>
                      <h4 className="text-lg font-medium mb-2">Объем памяти</h4>
                      <p className="py-2 px-3 text-center border-2 inline-block border-red-500 mb-6">
                        {data.rame}
                      </p>
                    </>
                  )}
                  <h4 className="font-medium text-lg mb-4">Характеристики</h4>
                  {data.color && (
                    <p className="text-gray-500 mb-3">
                      Цвет: <span className="text-black">{data.color}</span>
                    </p>
                  )}
                  {data.ram && (
                    <p className="text-gray-500 mb-3">
                      оперативная память:{" "}
                      <span className="text-black">{data.ram}</span>
                    </p>
                  )}
                  {data.brand && (
                    <p className="text-gray-500 mb-3">
                      Brand: <span className="text-black">{data.brand}</span>
                    </p>
                  )}
                  {data.details && (
                    <>
                      {data.details.display && (
                        <p className="text-gray-500 mb-3">
                          Display:{" "}
                          <span className="text-black">
                            {data.details.display}
                          </span>
                        </p>
                      )}
                      {data.details.frequency && (
                        <p className="text-gray-500 mb-3">
                          Frequency:{" "}
                          <span className="text-black">
                            {data.details.frequency}
                          </span>
                        </p>
                      )}
                    </>
                  )}
                  {allDetail && (
                    <>
                      {data.geForce && (
                        <p className="text-gray-500 mb-3">
                          GeForce:{" "}
                          <span className="text-black">{data.geForce}</span>
                        </p>
                      )}
                      {data.core && (
                        <p className="text-gray-500 mb-3">
                          Core: <span className="text-black">{data.core}</span>
                        </p>
                      )}
                      {data.memory && (
                        <p className="text-gray-500 mb-3">
                          Memory:{" "}
                          <span className="text-black">{data.memory}</span>
                        </p>
                      )}
                      {data.weight && (
                        <p className="text-gray-500 mb-3">
                          Weight:{" "}
                          <span className="text-black">{data.weight}</span>
                        </p>
                      )}
                      {data.details && (
                        <>
                          {data.details.weight && (
                            <p className="text-gray-500 mb-3">
                              Weight:{" "}
                              <span className="text-black">
                                {data.details.weight}
                              </span>
                            </p>
                          )}
                          {data.details.security && (
                            <p className="text-gray-500 mb-3">
                              Security:{" "}
                              <span className="text-black">
                                {data.details.security}
                              </span>
                            </p>
                          )}
                          {data.details.diagonal && (
                            <p className="text-gray-500 mb-3">
                              Diagonal:{" "}
                              <span className="text-black">
                                {data.details.diagonal}
                              </span>
                            </p>
                          )}
                        </>
                      )}
                    </>
                  )}
                  <Button
                    onClick={() => setAllDetail(!allDetail)}
                    className={"font-semibold text-lg rounded-12 py-1"}
                    variant={"default"}
                  >
                    {allDetail ? "Скрыть характеристики" : "Все характеристики"}
                  </Button>
                </div>
              </div>
              <div className="py-3 px-4 border ">
                <div className="flex mb-2 items-center justify-between">
                  <p>
                    <del className="font-medium text-gray-400 text-xl">
                      {data.price}
                    </del>
                  </p>
                  <Button variant={"danger"} children={"-9%"} />
                </div>
                <h4 className="font-semibold text-4xl mb-5 mt-2">
                  {data.price} Сум
                </h4>
                {!cart && (
                  <Button
                    onClick={savetoLocal}
                    className={"w-full text-center"}
                    variant={"default"}
                    children={"В корзину"}
                  />
                )}
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
            <div className="mt-8">
              <div className="flex flex-col md:flex-row items-center mb-9">
                <p className="text-2xl font-medium">Характеристики</p>
                <p className="text-2xl font-medium mt-4 md:mt-0 md:ml-[54px] text-gray-400">
                  Отзывы
                </p>
              </div>
              <div className="flex flex-col md:flex-row mb-16 items-center justify-between">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {data.color && (
                    <li className="flex items-center max-w-[600px] justify-between gap-4">
                      <p className="text-gray-400 truncate mb-4">Цвет</p>
                      <hr className="text-gray-400 flex-grow mx-5" />
                      <p className="text-gray-700 truncate text-lg font-medium">
                        {data.color}
                      </p>
                    </li>
                  )}
                  {data.rame && (
                    <li className="flex items-center max-w-[600px] justify-between gap-4">
                      <p className="text-gray-400 truncate mb-4">
                        Оперативная память
                      </p>
                      <hr className="text-gray-400 flex-grow mx-5" />
                      <p className="text-gray-700 truncate text-lg font-medium">
                        {data.rame}
                      </p>
                    </li>
                  )}
                  {data.brand && (
                    <li className="flex items-center max-w-[600px] justify-between gap-4">
                      <p className="text-gray-400 truncate mb-4">Brand</p>
                      <hr className="text-gray-400 flex-grow mx-5" />
                      <p className="text-gray-700 truncate text-lg font-medium">
                        {data.brand}
                      </p>
                    </li>
                  )}
                  {data.geForce && (
                    <li className="flex items-center max-w-[600px] justify-between gap-4">
                      <p className="text-gray-400 truncate mb-4">GeForce</p>
                      <hr className="text-gray-400 flex-grow mx-5" />
                      <p className="text-gray-700 truncate text-lg font-medium">
                        {data.geForce}
                      </p>
                    </li>
                  )}
                  {data.core && (
                    <li className="flex items-center max-w-[600px] justify-between gap-4">
                      <p className="text-gray-400 truncate mb-4">Core</p>
                      <hr className="text-gray-400 flex-grow mx-5" />
                      <p className="text-gray-700 truncate text-lg font-medium">
                        {data.core}
                      </p>
                    </li>
                  )}
                  {data.display && (
                    <li className="flex items-center max-w-[600px] justify-between gap-4">
                      <p className="text-gray-400 truncate mb-4">Display</p>
                      <hr className="text-gray-400 flex-grow mx-5" />
                      <p className="text-gray-700 truncate text-lg font-medium">
                        {data.display}
                      </p>
                    </li>
                  )}
                  {data.memory && (
                    <li className="flex items-center max-w-[600px] justify-between gap-4">
                      <p className="text-gray-400 truncate mb-4">Memory</p>
                      <hr className="text-gray-400 flex-grow mx-5" />
                      <p className="text-gray-700 truncate text-lg font-medium">
                        {data.memory}
                      </p>
                    </li>
                  )}
                  {data.weight && (
                    <li className="flex items-center max-w-[600px] justify-between gap-4">
                      <p className="text-gray-400 truncate mb-4">Weight</p>
                      <hr className="text-gray-400 flex-grow mx-5" />
                      <p className="text-gray-700 truncate text-lg font-medium">
                        {data.weight}
                      </p>
                    </li>
                  )}
                  {data.details && (
                    <>
                      {data.details.display && (
                        <li className="flex items-center max-w-[600px] justify-between gap-4">
                          <p className="text-gray-400 truncate mb-4">Display</p>
                          <hr className="text-gray-400 flex-grow mx-5" />
                          <p className="text-gray-700 truncate text-lg font-medium">
                            {data.details.display}
                          </p>
                        </li>
                      )}
                      {data.details.frequency && (
                        <li className="flex items-center max-w-[600px] justify-between gap-4">
                          <p className="text-gray-400 truncate mb-4">
                            Frequency
                          </p>
                          <hr className="text-gray-400 flex-grow mx-5" />
                          <p className="text-gray-700 truncate text-lg font-medium">
                            {data.details.frequency}
                          </p>
                        </li>
                      )}
                      {data.details.weight && (
                        <li className="flex items-center max-w-[600px] justify-between gap-4">
                          <p className="text-gray-400 truncate mb-4">Weight</p>
                          <hr className="text-gray-400 flex-grow mx-5" />
                          <p className="text-gray-700 truncate text-lg font-medium">
                            {data.details.weight}
                          </p>
                        </li>
                      )}
                      {data.details.security && (
                        <li className="flex items-center max-w-[600px] justify-between gap-4">
                          <p className="text-gray-400 truncate mb-4">
                            Security
                          </p>
                          <hr className="text-gray-400 flex-grow mx-5" />
                          <p className="text-gray-700 truncate text-lg font-medium">
                            {data.details.security}
                          </p>
                        </li>
                      )}
                      {data.details.diagonal && (
                        <li className="flex items-center max-w-[600px] justify-between gap-4">
                          <p className="text-gray-400 truncate mb-4">
                            Diagonal
                          </p>
                          <hr className="text-gray-400 flex-grow mx-5" />
                          <p className="text-gray-700 truncate text-lg font-medium">
                            {data.details.diagonal}
                          </p>
                        </li>
                      )}
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
