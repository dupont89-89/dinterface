"use client";
import React, { useState, useEffect, useRef } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClick = (e) => {
      // Если клик по ссылке внутри меню
      if (isOpen && e.target.closest("a")) {
        closeMenu();
      }
    };

    if (menuRef.current) {
      menuRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (menuRef.current) {
        menuRef.current.removeEventListener("click", handleClick);
      }
    };
  }, [isOpen]);

  return (
    <>
      {/* Кнопка бургер-меню */}
      <div className="xl:hidden flex content-center">
        <button onClick={toggleMenu} className="relative w-[35px] h-[35px]">
          <img
            className={`w-full h-full transition-transform duration-300 ${
              isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
            src="\img\header\icon-burger.png"
            alt=""
          />
          <span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            &times;
          </span>
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 z-11 w-full h-screen bg-black bg-opacity-90 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <button
            onClick={closeMenu}
            className="text-white text-4xl absolute right-[30px]"
          >
            &times; {/* Иконка закрытия */}
          </button>
          <nav className="mt-10">
            <ul className="flex flex-col gap-5 text-white">
              <li>
                <a className="hover:underline" href="/#service">
                  Услуги
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/#promotion-busines">
                  Продвижение бизнеса
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/#about">
                  О нас
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/#portfolio">
                  Портфолио
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/#reviews">
                  Отзывы
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/anket/">
                  Соискателям
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/news">
                  Новости
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/#contact">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
