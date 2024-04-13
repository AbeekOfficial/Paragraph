import React from "react";
import "./login.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import CountdownTimer from "../../CountDownTimer";
import { Link } from "react-router-dom";

export default function Verification() {
  const [code, setCode] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (code === "12345") {
      navigate("/");
    } else {
      setError("Введен неправильный код");
    }
  };

  return (
    <div className="login">
      <div className="flex justify-center pt-24 pb-[354px]">
        <div className="w-[400px] rounded-xl border bg-white p-10 relative">
          <Link
            to={"/"}
            className="absolute top-0 right-0 rounded-full border border-gray flex justify-center w-7 h-7 items-center"
          >
            <IoClose className="text-rose-600 text-2xl" />
          </Link>
          <h1 className="text-center text-3xl pt-7 font-bold">Вход на сайт</h1>
          <p className="text-center font-semibold text-gray-600 pt-5">
            Код отправили сообщением на номер{" "}
          </p>
          <label
            htmlFor="phone"
            className="w-full flex  flex-col font-semibold mb-2 mt-4"
          >
            Код подтверждения
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type="number"
              required
              id="phone"
              className="border h-[30px] border-yellow-300 outline-none rounded-sm"
            />
          </label>
          <p className="text-gray-400 text-xs">e.g: 12345</p>
          {error && <p className="text-rose-600 font-semibold">{error}</p>}
          <CountdownTimer initialSeconds={60} />
          <button
            onClick={handleSubmit}
            type="submit"
            className="flex justify-center py-2 text-white font-semibold mt-5 w-full rounded-lg items-center bg-[#FF9910] "
          >
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
}
