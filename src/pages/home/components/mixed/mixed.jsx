import React from "react";
import RenderPhones from "./components/renderPhones";
import RenderLaptops from "./components/renderLaptops";

export const Mixed = () => {
  return (
    <>
      <div className="flex container items-center">
        <RenderPhones />
        <RenderLaptops />
        <RenderPhones />
      </div>
    </>
  );
};

export default Mixed;
