import React from "react";
import { useCategories } from "../../pages/home/services/useCategories";
import { CategoriesSkeleton } from "./skeletonCategories";
import { useNavigate } from "react-router-dom";

export const Modal = ({ closeModal }) => {
  const { data, isLoading } = useCategories();
  const navigate = useNavigate();

  const categoryProducts = (name) => {
    navigate(`category-product/${name}`);
    closeModal();
  };

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-20 bg-white shadow-lg w-[1100px] mt-[200px] border-4 py-[50px] px-7 sm:px-12 md:px-[90px]"
      >
        <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-10">
          {isLoading ? (
            <CategoriesSkeleton />
          ) : (
            data?.map((category) => {
              return (
                <>
                  <div
                    onClick={() => categoryProducts(category.name)}
                    className="rounded-6 cursor-pointer text-center sm:flex items-center gap-4 w-[120px] sm:w-[245px] h-[120px] sm:h-[115px] overflow-hidden bg-gray-200"
                  >
                    <img
                      className="sm:w-[96px] mx-auto w-[75px] h-[75px] sm:h-[96px] py-[14px] px-4"
                      src={category.img}
                      alt={category.name}
                    />
                    <p className="font-medium mx-auto">{category.text}</p>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
