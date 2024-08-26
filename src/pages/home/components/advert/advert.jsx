import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePhones } from "../../services/usePhones";
import { RenderPhones } from "./renderPhones";

export const Advert = () => {
  const { data } = usePhones();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default for xs
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 576, // xs
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // sm
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992, // md
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200, // lg
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1800, // xl and up
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div className="relative container">
      <h2 className="text-xl font-semibold mb-6">Смартфоны и планшеты</h2>
      <Slider {...settings}>
        {data?.map((phone) => (
          <RenderPhones key={phone.id} {...phone} />
        ))}
      </Slider>
    </div>
  );
};

export default Advert;
