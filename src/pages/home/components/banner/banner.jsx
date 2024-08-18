import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBanners } from "../../services/useBanners";
import { Skeleton } from "../../../../components/ui/skeleton";
import { DayOfProduct } from "./dayOfProduct";

export const Banner = () => {
  const { data, isLoading } = useBanners();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mx-auto container -mb-10 mt-[150px] relative">
      <div className="flex items-center justify-between">
        <div className="w-[978px] inline h-[431px]">
          <Slider {...settings}>
            {isLoading ? (
              <Skeleton />
            ) : (
              data?.map((item) => (
                <div key={item.id}>
                  <img
                    className="w-full h-full object-cover rounded-20 overflow-hidden"
                    src={item.img}
                    alt="Banner"
                  />
                </div>
              ))
            )}
          </Slider>
        </div>
        <div className="-mt-16">
          <DayOfProduct />
        </div>
      </div>
    </div>
  );
};

export default Banner;
