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
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

export default Advert
