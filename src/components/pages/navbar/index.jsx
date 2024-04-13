import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Categories from "../categories";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`sticky flex justify-center flex-col left-0 top-0 right-0 z-20 py-2 ${
        !top && `bg-white shadow-lg`
      }`}
    >
      <div className="flex mx-auto items-center gap-5 my-4 ">
        <Link to="/">
          <img src={logo} alt="" className="mr-9" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="items-center flex border gap-3 font-semibold text-black bg-[#FF9910] hover:bg-[#ffbe1f] px-4 py-3 rounded-lg"
        >
          {!isOpen ? (
            <GiHamburgerMenu className="w-[24px] h-[24px] text-black" />
          ) : (
            <IoClose className="w-[24px] h-[24px]" />
          )}
          Категории
        </button>
        <div className="flex flex-col">
          <div className=" border-[#FF9910] w-[550px] border-[1px]  flex h-11 rounded-lg  outline-none">
            <input
              type="text"
              className="w-[100%] h-[100%] outline-none border-none bg-transparent ps-5 placeholder:text-black"
              placeholder="Искать товары"
            />
            <button className="px-5 pb-5 pt-3 rounded-r-lg bg-[#FF9910] h-[100%] hover:bg-[#ffbe1f]">
              <CiSearch className=" text-2xl font-semibold text-black text-center" />
            </button>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center flex-col">
            <FaBalanceScaleLeft className="hover:text-yellow-500 text-2xl" />
            Сравнение
          </div>
          <div className="flex items-center flex-col">
            <FaRegHeart className="hover:text-yellow-500 text-2xl" />
            Избранное
          </div>
          <Link to="/shopping">
            <div className="flex items-center flex-col">
              <MdOutlineShoppingCart className="hover:text-yellow-500 text-2xl" />
              Корзина
            </div>
          </Link>
        </div>

        <Link to="/login">
          <button className="bg-gray-200 hover:bg-gray-100 border border-gray-500 font-semibold rounded-md px-4 py-2">
            Войти
          </button>
        </Link>
      </div>

      <Categories open={isOpen} onClose={handleClose} />
    </header>
  );
}
