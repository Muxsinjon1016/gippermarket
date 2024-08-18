import React from "react";
import {
  FaFacebookF,
  FaOdnoklassniki,
  FaVk,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#f5f5f6] py-10">
        <div className="container">
          <ul className="flex justify-between">
            <li>
              <div
                onClick={() => navigate("/")}
                className="relative ml-8 mb-6 cursor-pointer flex items-center gap-2"
              >
                <img className="w-[65px] h-auto" src="/logo.svg" alt="logo" />
                <span className="text-4xl font-semibold text-[#feee00]">
                  IPER<span className="text-3xl">MART</span>
                </span>
              </div>
              <h4 className="text-xl font-medium mb-1">+99 893 374-66-44</h4>
              <p className="mb-2">справочная служба</p>
              <h4 className="text-xl font-medium mb-1">+99 890 253-77-53</h4>
              <p className="mb-4">интернет-магазин</p>
              <h4 className="font-semibold mb-2">Оставайтесь на связи</h4>
              <ul className="flex items-center gap-4">
                <li className="text-white transition-all duration-500 hover:scale-[1.2] rounded-12 bg-[#e44542] p-2">
                  <FaFacebookF className="h-auto w-[31px]" />
                </li>
                <li className="text-white transition-all duration-500 hover:scale-[1.2] rounded-12 bg-[#e44542] p-2">
                  <FaOdnoklassniki className="h-auto w-[31px]" />
                </li>
                <li className="text-white transition-all duration-500 hover:scale-[1.2] rounded-12 bg-[#e44542] p-2">
                  <FaVk className="h-auto w-[31px]" />
                </li>
                <li className="text-white transition-all duration-500 hover:scale-[1.2] rounded-12 bg-[#e44542] p-2">
                  <FaYoutube className="h-auto w-[31px]" />
                </li>
                <li className="text-white transition-all duration-500 hover:scale-[1.2] rounded-12 bg-[#e44542] p-2">
                  <FaInstagram className="h-auto w-[31px]" />
                </li>
              </ul>
            </li>
            <li>
              <p className="mb-4">Условия обмена и возврата</p>
              <p className="mb-4">Каталог</p>
              <p className="mb-4">О компании</p>
              <p className="mb-4">Контакты</p>
              <p className="mb-4">Доставка</p>
              <p>Оплата</p>
            </li>
            <li>
              <p className="mb-4">Клиентам</p>
              <p className="mb-4">Личный кабинет</p>
              <p className="mb-4">Блог</p>
              <p>Обратная связь</p>
            </li>
            <li>
              <p className="mb-4">Информация</p>
              <p className="mb-4">Пользовательское соглашение</p>
              <p>Политика конфиденциальности и оферта</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#eaeaea] py-7">
        <div className="container flex items-center justify-between">
          <p>
            © 2024 Любое использование контента без письменного разрешения
            запрещено
          </p>
          <div className="flex items-center gap-8">
            <img src="payme.svg" alt="card" />
            <img src="uzcard.svg" alt="card" />
            <img src="humo.svg" alt="card" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
