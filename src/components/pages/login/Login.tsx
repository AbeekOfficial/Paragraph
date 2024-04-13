import React from "react";
import "./login.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Login() {
  const [countryCode, setCountryCode] = useState("+998"); // Set default country code to +998
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const getFullPhoneNumber = () => {
    return countryCode + phoneNumber;
  };

  const handleInput = () => {
    console.log(getFullPhoneNumber());
  };

  const [error, setError] = useState();

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (phoneNumber !== "") {
      navigate("/Verification");
    } else {
      setError("Введите телефон номер");
    }
  };

  return (
    <div className="login">
      <div className="flex justify-center pt-24 pb-[354px] ">
        <div className="w-[400px] rounded-xl border bg-white p-10 relative">
          <Link
            to={"/"}
            className="absolute top-0 right-0 rounded-full border border-gray flex justify-center w-7 h-7 items-center"
          >
            <IoClose className="text-rose-600 text-2xl" />
          </Link>
          <h1 className="text-center text-3xl pt-7 font-bold">Вход на сайт</h1>
          <p className="text-center pt-5 font-semibold">
            Войдите с вашим номером телефона
          </p>

          <label
            htmlFor="phone"
            className="flex flex-col font-semibold mb-2 mt-4"
          >
            Номер телефона
            <div className="flex">
              <select
                className=" border-yellow-300 outline-none border"
                value={countryCode}
                onChange={handleCountryCodeChange}
              >
                <option value="+998">UZ (+998)</option>
                <option value="+1">US (+1)</option>
                <option value="+44">UK (+44)</option>
              </select>
              <input
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                onInput={handleInput}
                type="phone"
                required
                id="phone"
                className="w-full border h-[30px] border-yellow-300 outline-none"
              />
            </div>
            {error && <p className="text-rose-600 mt-2">{error}</p>}
          </label>
          <button
            onClick={() => handleSubmit()}
            className="flex justify-center py-2 text-white font-semibold mt-5 w-full rounded-lg items-center bg-[#FF9910] "
          >
            Выслать код
          </button>
        </div>
      </div>
    </div>
  );
}
