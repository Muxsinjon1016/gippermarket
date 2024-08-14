import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCategories } from "../../services/useCategories";
import { useNavigate } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        right: "20px",
        zIndex: 1,
        width: "50px",
        height: "50px",
        color: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        left: "20px",
        zIndex: 1,
        width: "50px",
        height: "50px",
        color: "#fff7f7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      onClick={onClick}
    />
  );
}

export const Categories = () => {
  const { data } = useCategories();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const navigate = useNavigate();

  const categoryProducts = (name) => {
    console.log(name);
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
