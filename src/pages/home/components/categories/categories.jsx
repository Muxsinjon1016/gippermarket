import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCategories } from "../../services/useCategories";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const { data } = useCategories();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const navigate = useNavigate();

  const categoryProducts = (name) => {
    navigate(`category-product/${name}`);
  };

  return (
    <>
      <div className="container my-8">
        <Slider {...settings}>
          {data?.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div
                onClick={() => categoryProducts(item.name)}
                className="rounded-6 cursor-pointer text-center flex items-center gap-4 w-[245px] h-[115px] overflow-hidden bg-gray-200"
              >
                <img
                  className="w-[96px] h-[96px] py-[14px] px-4"
                  src={item.img}
                  alt="img"
                />
                <p className="font-medium">{item.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Categories;
