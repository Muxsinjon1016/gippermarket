import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBanners } from "../../services/useBanners";
import { Skeleton } from "../../../../components/ui/skeleton";

export const Banner = () => {
  const { data, isLoading } = useBanners();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="mx-auto container mt-[120px] relative">
      <Slider {...settings}>
        {isLoading ? (
          <Skeleton />
        ) : (
          data?.map((item) => (
            <div key={item.id}>
              <img
                className="w-full h-[100%] object-cover"
                src={item.img}
                alt="Banner"
              />
            </div>
          ))
        )}
      </Slider>
    </div>
  );
};

export default Banner;
