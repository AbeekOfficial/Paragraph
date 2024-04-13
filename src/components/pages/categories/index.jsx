import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

export default function Categories({ open, onClose }) {
  if (!open) {
    return null;
  }

  const handleClick = () => {
    onClose();
  };

  return (
    <div className="w-full container flex ml-44">
      <div className="w-[550px] border-r-4 border-gray-500 pt-4 pb-96 pl-4 rounded-md ml-[-180px] bg-gray-100 h-[100%] flex flex-col justify-items-end">
        <Link
          onClick={handleClick}
          to="/smartphones"
          className="hover:bg-white hover:py-2 ml-40 hover:text-yellow-500 py-2 pl-2 hover:pl-2"
        >
          Smartphones
        </Link>
        <Link
          onClick={handleClick}
          to="/laptops"
          className="hover:bg-white hover:py-2 ml-40 hover:text-yellow-500 py-2 pl-2 hover:pl-2"
          href=""
        >
          Laptops and Computers
        </Link>
        <Link
          onClick={handleClick}
          to="/"
          className="hover:bg-white hover:py-2 ml-40 hover:text-yellow-500 py-2 pl-2 hover:pl-2"
          href=""
        >
          TV
        </Link>
        <Link
          onClick={handleClick}
          to="/"
          className="hover:bg-white hover:py-2 ml-40 hover:text-yellow-500 py-2 pl-2 hover:pl-2"
          href=""
        >
          Sport
        </Link>
        <Link
          onClick={handleClick}
          to="/"
          className="hover:bg-white hover:py-2 ml-40 hover:text-yellow-500 py-2 pl-2 hover:pl-2"
          href=""
        >
          Beauty
        </Link>
      </div>
    </div>
  );
}
