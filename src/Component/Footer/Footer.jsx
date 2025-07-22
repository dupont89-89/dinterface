import React from "react";
import Logo from "../Header/Logo";

export default function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <div className="md:h-[526px] xl:h-[516px] h-[812px] rounded-t-[40px] p-[20px] xl:p-[50px] relative overflow-hidden">
      {/* Псевдоэлемент для фона */}
      <div
        className="absolute inset-0 bg-[url(/img/footer/fon-footer.png)] opacity-12 mix-blend-luminosity bg-no-repeat bg-cover bg-center"
        aria-hidden="true"
      ></div>

      {/* Внутреннее содержимое */}
      <div className="relative z-10">
        <Logo
          width="md:w-[60px] w-[40px]"
          textAlign="text-center md:text-left"
          textSizeClass="xl:text-[26px] text-[21px]"
        />
        <div className="xl:mt-[40px] mt-[26px] flex justify-center items-center flex-col md:block">
          <span className="text-[#F2E9D6] text-base block">
            Мы в соц сетях:
          </span>
          <div className="flex gap-2 mt-[16px]">
            <a
              target="_blank"
              rel="nofollow noopener"
              className="hover:opacity-65"
              href="https://t.me/dynamicdhs"
            >
              <img className="w-[31px]" src="\img\header\telegram.png" alt="" />
            </a>
            <a
              target="_blank"
              rel="nofollow noopener"
              className="hover:opacity-65"
              href="https://wa.me/79151272292?text=Добрый%20день."
            >
              <img className="w-[31px]" src="\img\header\whatsapp.png" alt="" />
            </a>
            <a
              target="_blank"
              rel="nofollow noopener"
              className="hover:opacity-65"
              href="https://vk.com/club229005350"
            >
              <img className="w-[31px]" src="\img\header\vk.png" alt="" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] xl:grid-cols-[268px_111px_280px_194px] items-center gap-[30px] xl:gap-[102px] xl:mt-[41px] mt-[26px]">
          <div className="flex justify-center items-center flex-col md:block">
            <span className="text-[#F2E9D6] text-[16px] block mb-2.5">
              Связаться с нами:
            </span>
            <div className="flex gap-[5px] md:justify-start md:items-start justify-center items-center flex-col">
              <p className="flex">
                <span className="inline-block mr-2.5">
                  <img
                    className="w-[31px]"
                    src="\img\footer\icon-tel.png"
                    alt=""
                  />
                </span>
                <span className="text-xl text-[#DAC394]">
                  <a href="tel:+79151272292">+7 915 127 22 92</a>
                </span>
              </p>
              <p className="flex">
                <span className="inline-block mr-2.5">
                  <img className="w-[31px]" src="/img/footer/mail.png" alt="" />
                </span>
                <span className="text-xl text-[#DAC394]">
                  <a
                    className="border-dashed border-b-1"
                    href="mailto:dynamic.hr@yandex.ru"
                  >
                    dynamic.hr@yandex.ru
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div>
            <nav>
              <ul className="flex flex-col md:justify-start md:items-start justify-center items-center text-[16px] gap-1.5 text-[#F2E9D6] leading-[19px]">
                <li>
                  <a href="/anket/">Соискателям</a>
                </li>
                <li>
                  <a href="/#service">Услуги</a>
                </li>
                <li>
                  <a href="/#about">О нас</a>
                </li>
                <li>
                  <a href="/#portfolio">Наши работы</a>
                </li>
                <li>
                  <a href="/news">Новости</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul className="flex flex-col md:justify-start md:items-start justify-center items-center text-[16px] gap-1.5 text-[#F2E9D6] leading-[19px]">
                <li className="text-center sm:text-left">
                  <a href="/privacy-policy/">Политика конфиденциальности</a>
                </li>
                <li className="text-center sm:text-left">
                  <a href="/privacy-personal/">
                    Согласие на обработку персональных данных
                  </a>
                </li>
                <li className="text-center sm:text-left">
                  <a href="/mail-privacy-policy/">
                    Согласие на рекламную рассылку
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col md:justify-start md:items-start justify-center items-center text-[16px] gap-1.5 text-[#F2E9D6] leading-[19px]">
            <span>ИП Бабий К.Ю.</span>
            <span>ОГРНИП 325370000015093</span>
            <span>ИНН 370254912324</span>
          </div>
        </div>
        <div>
          <hr className="text-[#5B5955] mt-[40px]" />
        </div>
        <div className="grid md:gap-[185px] gap-[30px] grid-cols-[1fr] content-center text-[#5B5955] text-[14px] leading-[19px] mt-10">
          <div className="md:text-left text-center">
            ©{year} Все права защищены
          </div>
        </div>
      </div>
    </div>
  );
}
