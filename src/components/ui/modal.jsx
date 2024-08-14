import React from "react";

export const Modal = ({ closeModal }) => {
  return (
    <div
      onClick={closeModal}
      className="absolute inset-0 backdrop-blur-[1px] flex justify-center items-start"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-20 bg-white shadow-lg w-[1100px] mt-[200px] border-4 py-[50px] px-[90px]"
      >
        smt
      </div>
    </div>
  );
};

export default Modal;
