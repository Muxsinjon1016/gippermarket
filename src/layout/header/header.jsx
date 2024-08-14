import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Modal } from "../../components/ui/modal";
import { Button } from "../../components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Search } from "../../components/ui/search";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [catalogModal, setCatalogModal] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white z-30 fixed top-0 left-0 right-0">
        <div className="container">
          <div className="py-2 flex justify-end">
            <ul className="flex items-center gap-8">
              <li>Доставка и оплата</li>
              <li>Пункты выдачи</li>
              <li>Поддержка</li>
              <li className="flex items-center gap-4">
                <MdOutlineLocalPhone className="w-6 h-auto" />
                +998 90 253 77 53
              </li>
            </ul>
          </div>
          <div className="py-4 flex items-center justify-between gap-[52px]">
            <div className="flex items-center gap-8">
              <img
                className="cursor-pointer"
                onClick={() => navigate("/")}
                src="/logo.svg"
                alt="logo"
              />
              <div>
                {catalogModal ? (
                  <Button
                    onClick={() => setCatalogModal(true)}
                    startIcon={<IoCloseSharp className="w-6 h-auto" />}
                    children={"Каталог"}
                    variant={"default"}
                  />
                ) : (
                  <Button
                    onClick={() => setCatalogModal(true)}
                    startIcon={<GiHamburgerMenu className="w-6 h-auto" />}
                    children={"Каталог"}
                    variant={"default"}
                  />
                )}

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
                <li>
                  <IoMdCart className="w-6 h-auto mx-auto mb-1" />
                  <p>Корзина</p>
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
