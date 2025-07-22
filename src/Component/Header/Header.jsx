import React from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Header(props) {
  return (
    <div className="bg-[#1B1B1B] h-[63px] rounded-[50px] mt-5 md:px-[30px] px-[20px] relative z-1">
      <div className="xl:grid-cols-[108px_1fr_129px] md:grid-cols-[108px_1fr_184px] grid-cols-[93px_1fr_170px] grid items-center content-center h-full">
        <Logo
          textAlign="text-center"
          textSizeClass="md:text-[14px] text-[12px]"
          width="w-[47px]"
        />
        <div className="text-[#F2E9D6] text-[15px] px-[20px] font-normal flex justify-end">
          <div className="none xl:block">
            <nav>
              <ul className="flex items-center gap-5">
                <li>
                  <Link className="hover:underline" href="/#service">
                    Услуги
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/#promotion-busines">
                    Продвижение бизнеса
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/#about">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/#portfolio">
                    Портфолио
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/#reviews">
                    Отзывы
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/#faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/anket/">
                    Соискателям
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/#contact">
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex md:gap-3 gap-2.5">
          <Link
            target="_blank"
            rel="nofollow noopener"
            className="hover:opacity-65"
            href="https://t.me/dynamicdhs"
          >
            <img className="w-[35px]" src="\img\header\telegram.png" alt="" />
          </Link>
          <Link
            target="_blank"
            rel="nofollow noopener"
            className="hover:opacity-65"
            href="https://wa.me/79151272292?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C."
          >
            <img className="w-[35px]" src="\img\header\whatsapp.png" alt="" />
          </Link>
          <Link
            target="_blank"
            rel="nofollow noopener"
            className="hover:opacity-65"
            href="https://vk.com/club229005350"
          >
            <img className="w-[35px]" src="\img\header\vk.png" alt="" />
          </Link>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
