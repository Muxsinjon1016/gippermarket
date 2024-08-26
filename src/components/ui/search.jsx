import React, { useState } from "react";
import { Input } from "./input";
import { IoSearchSharp } from "react-icons/io5";
import { useDebounce } from "../../hooks/useDebounce";
import useSearch from "../services/useSearch";
// import { Products } from "../../pages/home/components/products";

const Search = ({ register }) => {
  const [inputValue, setInputValue] = React.useState("");
  const debouncedValue = useDebounce(inputValue);
  const { data } = useSearch(debouncedValue);

  return (
    <div className="flex items-center justify-between max-w-[675px] lg:w-[400px] xl:w-[500px] border-2 py-2 border-black px-4">
      <Input
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Поиск"
        name="name"
        register={register}
      />
      <IoSearchSharp className="text-gray-700 w-7 h-auto" />
      {inputValue.length >= 3 && (
        <div className="absolute w-full bg-blue-300 p-5 top-[120px] rounded-12 right-0">
          {/* {data?.map((category) => (
            <Products key={category.id} {...category} />
          ))} */}
        </div>
      )}
    </div>
  );
};

export default Search;
