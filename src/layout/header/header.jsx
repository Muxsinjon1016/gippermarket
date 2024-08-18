import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Modal } from "../../components/ui/modal";
import { Button } from "../../components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Search from "../../components/ui/search";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { loadState } from "../../config/storage";

export const Header = () => {
  const [catalogModal, setCatalogModal] = React.useState(false);
  const navigate = useNavigate();

  const cartCount = localStorage.length;

  return (
    <>
      <div className="bg-white shadow-lg z-30 fixed top-0 left-0 right-0">
        <div className="container">
          <div className="py-2 flex justify-end">
            <ul className="flex items-center gap-8">
              <li>Доставка и оплата</li>
              <li>Пункты выдачи</li>
              <li>Поддержка</li>
              <li className="flex items-center gap-4">
                <MdOutlineLocalPhone className="w-6 h-auto" />
                +998 91 980 1409
              </li>
            </ul>
          </div>
          <div className="py-3 flex items-center justify-between gap-[52px]">
            <div className="flex items-center gap-8">
              <div
                onClick={() => navigate("/")}
                className="relative cursor-pointer flex items-center gap-2"
              >
                <img className="w-[65px] h-auto" src="/logo.svg" alt="logo" />
                <span className="text-4xl font-semibold text-[#feee00]">
                  IPER<span className="text-3xl">MART</span>
                </span>
              </div>
              <div>
                <Button
                  onClick={() => setCatalogModal(!catalogModal)}
                  startIcon={
                    catalogModal ? (
                      <IoCloseSharp className="w-6 h-auto" />
                    ) : (
                      <GiHamburgerMenu className="w-6 h-auto" />
                    )
                  }
                  children={"Каталог"}
                  variant={"default"}
                  className="relative z-50"
                />
                {catalogModal && (
                  <Modal closeModal={() => setCatalogModal(false)} />
                )}
              </div>
              <div>
                <Search />
              </div>
            </div>
            <div>
              <ul className="flex items-center gap-8">
                <li>
                  <FaRegCircleUser className="w-6 h-auto mx-auto mb-1" />
                  <p>Профиль</p>
                </li>
                <li>
                  <FaRegHeart className="w-6 h-auto mx-auto mb-1" />
                  <p>Избранное</p>
                </li>
                <li className="relative">
                  <Link to={"/cart"}>
                    <IoMdCart className="w-6 transition-all duration-300 hover:text-[#feee00] h-auto mx-auto mb-1" />
                    <p>Корзина</p>
                  </Link>
                  <span className="absolute -top-4 text-xs right-2 bg-[#feee00] py-1 px-2 rounded-[100%]">
                    {cartCount}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
