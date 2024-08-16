import React from "react";
import { useLaprops } from "../../services/useLaprops";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RenderLaptops } from "./renderLaptops";

export const Laptops = () => {
  const { data } = useLaprops();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div>
        <h2 className="text-xl container font-semibold mb-6">
          Ноутбуки, планшеты и компьютеры
        </h2>
        <Slider {...settings}>
          {data?.map((laptop) => (
            <RenderLaptops key={laptop.id} {...laptop} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Laptops;
