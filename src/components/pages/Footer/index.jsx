import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#37475A] w-full p-10 flex justify-between ">
      <ul className="flex flex-col gap-5 text-white">
        <li>Информация</li>
        <li>О нас</li>
        <li>Блог</li>
        <li>О Контакты</li>
        <li>Публичный оферта</li>
      </ul>
      <ul className="flex flex-col gap-5 text-white">
        <li>Контакты для предложений</li>
        <li>Support@paragraf.uz</li>
        <li>Форма обратной связи</li>
      </ul>
      <div className="flex flex-col gap-5 text-white">
        <h3>Телефон</h3>
        <span>+998 90 123 45 67</span>
        <h3>Адрес</h3>
        <span>
          Алмазарский район,
          <br /> ул. Джами, 12.
        </span>
      </div>
      <div className="flex flex-col gap-5 text-white">
        <h3>Платежная система</h3>
        <h3>LOGO в соц.сетях</h3>
      </div>
    </footer>
  );
}
