import React from "react";
import ButtomFormZayvka from "../Button/ButtomFormZayvka";
import HomeService from "./HomeService";
import ArrowListingMobile from "../Parts/ArrowListingMobile";

export default function ServiceFlex(props) {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl">
        <div className="w-full mx-auto">
          <h2 className="font-anticva text-center sm:text-left text-[#E6C37A] sm:text-[38px] text-[28px] mb-10">
            Наши услуги
          </h2>
          <div className="block sm:hidden mb-[30px]">
            <ArrowListingMobile />
          </div>
        </div>
        <div className="">
          <section>
            <div className="relative overflow-x-auto no-scrollbar">
              <div className="flex gap-3.5 group service-flex md:flex-wrap flex-nowrap">
                <article className="rounded-2xl p-5 sm:h-[724px] h-[688px] overflow-hidden group-hover:border group-hover:border-[#5B5955] border lg:border-0 border-[#5B5955] group-hover:bg-[#0A0A0A] lg:bg-[#1B1B1B] bg-none shadow-lg transition-element flex-none basis-[355px] sm:basis-[191px] lg:basis-[355px] lg:group-hover:basis-[247px] sm:group-hover:basis-[130px]">
                  <div>
                    <div className="flex justify-end">
                      <span className="inline-block rounded-full bg-[#DAC394] p-3">
                        <img
                          className="w-[16px] group-hover:rotate-45 arrow-rotate transition-element"
                          src="/img/icon/arrow.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="mt-1 min-h-[63px]">
                      <h2 className="text-2xl text-[#DAC394] title-service">
                        <span className="font-love text-[42px] mr-0.5">О</span>
                        <span className="tracking-[-4%]">
                          рганизация фотосессий
                        </span>
                      </h2>
                    </div>
                    <div className="mt-2.5">
                      <span className="inline-block tracking-[-4%] uppercase text-xs text-[#D7CCB6] px-[15px] py-1 border border-[rgba(255,249,236,0.3)] rounded-full">
                        Под ключ
                      </span>
                    </div>
                    <span className="text-base lg:block md:hidden sm:hidden block mt-4 group-hover:hidden text-[#D7CCB6] tracking-[-4%] service-text">
                      Стоимость: от 10 000 руб.
                    </span>
                  </div>
                  <figure className="mt-4">
                    <img
                      className="lg:h-[177px] sm:h-[425px] h-[177px] lg:w-[329px] sm:w-[175px] w-[323px] service-img group-hover:h-[425px] group-hover:w-[175px] lg:group-hover:w-[207px] group-hover:grayscale grayscale lg:grayscale-0 object-cover rounded-[20px] transition-element"
                      src="/img/service/fotoses.png"
                      alt="Организация фотосессий"
                    />
                  </figure>
                  <div className="mt-[16px] service-text group-hover:hidden lg:block md:hidden sm:hidden block">
                    <p className="sm:text-sm text-xs text-[#f0eed9] mb-2">
                      Мы занимаемся разработкой концепции, подбором локаций,
                      обеспечением профессионального оборудования и работой с
                      опытными фотографами. Наша команда учитывает все ваши
                      пожелания и предпочтения, чтобы каждая фотосессия отражала
                      ваш стиль и индивидуальность. Мы обеспечиваем комфортное и
                      творческое пространство для клиентов.
                    </p>
                    <p className="text-sm text-[#DAC394]">
                      С нами вы получите качественные фотографии и незабываемые
                      впечатления!
                    </p>
                    <div className="mt-[18px]">
                      <ButtomFormZayvka />
                    </div>
                  </div>
                </article>
                <article className="rounded-2xl p-5 sm:h-[724px] h-[688px] overflow-hidden border border-[#5B5955] bg-[#0A0A0A] shadow-lg transition-element flex-none basis-[355px] sm:basis-[191px] lg:basis-[247px] lg:group-hover:basis-[247px] sm:group-hover:basis-[130px]">
                  <div>
                    <div className="flex justify-end">
                      <span className="inline-block rounded-full bg-[#DAC394] p-3">
                        <img
                          className="w-[16px] rotate-45 arrow-rotate transition-element"
                          src="/img/icon/arrow.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="mt-1 min-h-[63px]">
                      <h2 className="text-2xl text-[#DAC394] title-service">
                        <span className="font-love text-[42px] mr-0.5">О</span>
                        <span className="tracking-[-4%]">
                          рганизация мероприятий
                        </span>
                      </h2>
                    </div>
                    <div className="mt-2.5">
                      <span className="inline-block tracking-[-4%] uppercase text-xs text-[#D7CCB6] px-[15px] py-1 border border-[rgba(255,249,236,0.3)] rounded-full">
                        Под ключ
                      </span>
                    </div>
                    <span className="text-base mt-4 lg:hidden md:hidden sm:hidden block text-[#D7CCB6] tracking-[-4%] service-text">
                      Стоимость: от 10 000 руб.
                    </span>
                  </div>
                  <figure className="mt-4">
                    <img
                      className="grayscale sm:h-[425px] h-[177px] lg:w-[329px] sm:w-[175px] w-[323px] service-img object-cover rounded-[20px] transition-element"
                      src="/img/service/meropriyatie.png"
                      alt="Организация мероприятий"
                    />
                  </figure>
                  <div className="mt-[16px] service-text lg:hidden md:hidden sm:hidden block">
                    <p className="sm:text-sm text-xs text-[#f0eed9] mb-2">
                      Наша компания специализируется на организации мероприятий
                      "под ключ", предлагая полный спектр услуг для создания
                      незабываемых событий. Мы работаем с клиентами, которые
                      хотят провести различные мероприятия, включая
                      корпоративные события, свадьбы, юбилеи, выставки и другие
                      торжества.
                    </p>
                    <div className="mt-[80px]">
                      <ButtomFormZayvka />
                    </div>
                  </div>
                </article>

                <article className="rounded-2xl p-5 sm:h-[724px] h-[688px] overflow-hidden border border-[#5B5955] bg-[#0A0A0A] shadow-lg transition-element flex-none basis-[355px] sm:basis-[191px] lg:basis-[247px] lg:group-hover:basis-[247px] sm:group-hover:basis-[130px]">
                  <div>
                    <div className="flex justify-end">
                      <span className="inline-block rounded-full bg-[#DAC394] p-3">
                        <img
                          className="w-[16px] rotate-45 arrow-rotate transition-element"
                          src="/img/icon/arrow.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="mt-1">
                      <h2 className="text-2xl text-[#DAC394] title-service">
                        <span className="font-love text-[42px] mr-0.5">П</span>
                        <span className="tracking-[-4%]">одбор персонала</span>
                      </h2>
                    </div>
                    <div className="mt-2.5 flex sm:flex-nowrap flex-wrap gap-2 tag-cart">
                      <span className="inline-block tracking-[-4%] uppercase text-xs text-[#D7CCB6] px-[15px] py-1 border border-[rgba(255,249,236,0.3)] rounded-full">
                        Хостес
                      </span>
                      <span className="inline-block tracking-[-4%] uppercase text-xs text-[#D7CCB6] px-[15px] py-1 border border-[rgba(255,249,236,0.3)] rounded-full">
                        Официанты
                      </span>
                      <span className="inline-block tracking-[-4%] uppercase text-xs text-[#D7CCB6] px-[15px] py-1 border border-[rgba(255,249,236,0.3)] rounded-full">
                        Модели
                      </span>
                      <span className="inline-block tracking-[-4%] uppercase text-xs text-[#D7CCB6] px-[15px] py-1 border border-[rgba(255,249,236,0.3)] rounded-full">
                        Охрана
                      </span>
                    </div>
                    <span className="text-base mt-4 lg:hidden md:hidden sm:hidden block text-[#D7CCB6] tracking-[-4%] service-text">
                      Стоимость: от 10 000 руб.
                    </span>
                  </div>
                  <figure className="mt-4">
                    <img
                      className="sm:h-[425px] h-[177px] lg:w-[329px] sm:w-[175px] w-[323px] grayscale service-img object-cover rounded-[20px] transition-element"
                      src="/img/service/personal.png"
                      alt="Подбор персонала"
                    />
                  </figure>
                  <div className="mt-[16px] service-text lg:hidden md:hidden sm:hidden block">
                    <p className="sm:text-sm text-xs text-[#f0eed9] mb-2">
                      Мы предлагаем услуги по поиску и отбору хостес, моделей и
                      официантов, соответствующих требованиям наших клиентов.
                      Наша команда профессионалов тщательно анализирует
                      потребности бизнеса и подбирает кандидатов с необходимыми
                      навыками и опытом работы. Мы гарантируем индивидуальный
                      подход к каждому заказчику, что позволяет создавать
                      успешные команды для мероприятий, ресторанов и других
                      организаций.
                    </p>
                    <div className="mt-[18px]">
                      <ButtomFormZayvka />
                    </div>
                  </div>
                </article>

                <article className="rounded-2xl p-5 sm:h-[724px] h-[688px] overflow-hidden border border-[#5B5955] bg-[#0A0A0A] shadow-lg transition-element flex-none basis-[355px] sm:basis-[191px] lg:basis-[247px] lg:group-hover:basis-[247px] sm:group-hover:basis-[130px]">
                  <div>
                    <div className="flex justify-end">
                      <span className="inline-block rounded-full bg-[#DAC394] p-3">
                        <img
                          className="w-[16px] rotate-45 arrow-rotate transition-element"
                          src="/img/icon/arrow.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="mt-1 min-h-[63px]">
                      <h2 className="text-2xl text-[#DAC394] title-service">
                        <span className="font-love text-[42px] mr-0.5">У</span>
                        <span className="tracking-[-4%]">
                          правление проектами
                        </span>
                      </h2>
                    </div>
                    <div className="mt-2.5">
                      <span className="inline-block tracking-[-4%] uppercase text-xs text-[#D7CCB6] px-[15px] py-1 border border-[rgba(255,249,236,0.3)] rounded-full">
                        Под ключ
                      </span>
                    </div>
                    <span className="text-base mt-4 lg:hidden md:hidden sm:hidden block text-[#D7CCB6] tracking-[-4%] service-text">
                      Стоимость: от 10 000 руб.
                    </span>
                  </div>
                  <figure className="mt-4">
                    <img
                      className="sm:h-[425px] h-[177px] lg:w-[329px] sm:w-[175px] w-[323px] grayscale service-img object-cover rounded-[20px] transition-element"
                      src="/img/service/projekt.png"
                      alt="Управление проектами"
                    />
                  </figure>
                  <div className="mt-[16px] service-text lg:hidden md:hidden sm:hidden block">
                    <div className="flex content-center flex-col h-full flex-wrap">
                      <ul className="sm:text-sm text-xs text-[#f0eed9] mb-2 list-disc ml-5">
                        <li>Организация фотосессий</li>
                        <li>Организация фотосессий для маркетплейсов</li>
                        <li>Предметная фотосъемка</li>
                        <li>Стилизация фотосъемки</li>
                        <li>Организация видеосъемки</li>
                        <li>Организация мероприятий</li>
                        <li>Подбор персонала</li>
                        <li>Подключение искусственного интеллекта</li>
                      </ul>
                      <div className="mt-[50px] text-center">
                        <ButtomFormZayvka />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
      <HomeService />
    </>
  );
}
