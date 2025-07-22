import React from "react";

export default function HomeService(props) {
  return (
    <section>
      <div className="relative">
        <div className="absolute inset-0 bg-[url(/img/baner/price-back.png)] bg-no-repeat bg-cover opacity-10"></div>
        <div className="relative mt-[120px]">
          <div className="container max-w-screen-xl leading-[19px]">
            <hr className="text-[#5B5955]" />
            <div className="pt-[31px] pb-[30px]">
              <div className="grid relative sm:grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-5 sm:gap-0 sm:justify-items-end justify-items-start group">
                <div>
                  <div className="max-w-56 sm:max-w-full">
                    <h2 className="font-anticva sm:text-[22px] leading-[120%] text-[20px] text-[#DAC394]">
                      Консультации и планирование
                    </h2>
                  </div>
                  <p className="text-white mt-6 text-base">
                    Мы начинаем с{" "}
                    <span className="text-[#DAC394]">
                      детального обсуждения ваших пожеланий
                    </span>{" "}
                    и целей мероприятия. Наша команда поможет разработать
                    концепцию, выбрать тематику и определить бюджет.
                  </p>
                </div>
                <div className="flex items-end flex-col justify-between">
                  <span className="inline-block absolute sm:relative top-0 right-[10px] rounded-full bg-white p-3">
                    <img
                      className="w-[16px] group-hover:rotate-45 transition-element"
                      src="/img/icon/arrow.png"
                      alt=""
                    />
                  </span>
                  <div className="text-white text-base">
                    <span className="text-[#DAC394]">Стоимость:</span> от 10 000
                    руб.
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-[#5B5955]" />
            <div className="pt-[31px] pb-[30px]">
              <div className="grid relative sm:grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-5 sm:gap-0 sm:justify-items-end justify-items-start group">
                <div>
                  <div className="max-w-56 sm:max-w-full">
                    <h2 className="font-anticva text-[22px] leading-[120%] text-[#DAC394]">
                      Локации
                    </h2>
                  </div>
                  <p className="text-white mt-6 text-base">
                    Мы предлагаем{" "}
                    <span className="text-[#DAC394]">
                      широкий выбор мест для проведения мероприятий
                    </span>
                    , включая залы, рестораны, открытые площадки и уникальные
                    локации, которые соответствуют вашим требованиям.
                  </p>
                </div>
                <div className="flex items-end flex-col justify-between">
                  <span className="inline-block absolute sm:relative top-0 right-[10px] rounded-full bg-white p-3">
                    <img
                      className="w-[16px] group-hover:rotate-45 transition-element"
                      src="/img/icon/arrow.png"
                      alt=""
                    />
                  </span>
                  <div className="text-white text-base">
                    <span className="text-[#DAC394]">Стоимость:</span> от 10 000
                    руб.
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-[#5B5955]" />
            <div className="pt-[31px] pb-[30px]">
              <div className="grid relative sm:grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-5 sm:gap-0 sm:justify-items-end justify-items-start group">
                <div>
                  <div className="max-w-56 sm:max-w-full">
                    <h2 className="font-anticva leading-[120%] text-[22px] text-[#DAC394]">
                      Кейтеринг
                    </h2>
                  </div>
                  <p className="text-white mt-6 text-base">
                    Мы{" "}
                    <span className="text-[#DAC394]">
                      сотрудничаем с проверенными поставщиками кейтеринга
                    </span>
                    , предлагая разнообразное меню, которое можно адаптировать
                    под любые предпочтения и диетические ограничения.
                  </p>
                </div>
                <div className="flex items-end flex-col justify-between">
                  <span className="inline-block absolute sm:relative top-0 right-[10px] rounded-full bg-white p-3">
                    <img
                      className="w-[16px] group-hover:rotate-45 transition-element"
                      src="/img/icon/arrow.png"
                      alt=""
                    />
                  </span>
                  <div className="text-white text-base">
                    <span className="text-[#DAC394]">Стоимость:</span> от 10 000
                    руб.
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-[#5B5955]" />
            <div className="pt-[31px] pb-[30px]">
              <div className="grid relative sm:grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-5 sm:gap-0 sm:justify-items-end justify-items-start group">
                <div>
                  <div className="max-w-56 sm:max-w-full">
                    <h2 className="font-anticva leading-[120%] sm:w-full w-[257px] text-[22px] text-[#DAC394]">
                      Техническое обеспечение
                    </h2>
                  </div>
                  <p className="text-white mt-6 text-base">
                    Мы{" "}
                    <span className="text-[#DAC394]">
                      обеспечиваем необходимое оборудование
                    </span>
                    , включая звуковую и световую аппаратуру, проекторы и экран,
                    а также Wi-Fi и другие технические услуги.
                  </p>
                </div>
                <div className="flex items-end flex-col justify-between">
                  <span className="inline-block absolute sm:relative top-0 right-[10px] rounded-full bg-white p-3">
                    <img
                      className="w-[16px] group-hover:rotate-45 transition-element"
                      src="/img/icon/arrow.png"
                      alt=""
                    />
                  </span>
                  <div className="text-white text-base">
                    <span className="text-[#DAC394]">Стоимость:</span> от 10 000
                    руб.
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-[#5B5955]" />
            <div className="pt-[31px] pb-[30px]">
              <div className="grid relative sm:grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-5 sm:gap-0 sm:justify-items-end justify-items-start group">
                <div>
                  <div className="max-w-56 sm:max-w-full">
                    <h2 className="font-anticva leading-[120%] text-[22px] text-[#DAC394]">
                      Декор и оформление
                    </h2>
                  </div>
                  <p className="text-white mt-6 text-base">
                    Наша команда дизайнеров поможет создать{" "}
                    <span className="text-[#DAC394]">
                      уникальный стиль вашего мероприятия
                    </span>
                    , включая оформление зала, подбор цветовой гаммы и
                    декораций.
                  </p>
                </div>
                <div className="flex items-end flex-col justify-between">
                  <span className="inline-block absolute sm:relative top-0 right-[10px] rounded-full bg-white p-3">
                    <img
                      className="w-[16px] group-hover:rotate-45 transition-element"
                      src="/img/icon/arrow.png"
                      alt=""
                    />
                  </span>
                  <div className="text-white text-base">
                    <span className="text-[#DAC394]">Стоимость:</span> от 10 000
                    руб.
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-[#5B5955]" />
            <div className="pt-[31px] pb-[30px]">
              <div className="grid relative sm:grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-5 sm:gap-0 sm:justify-items-end justify-items-start group">
                <div>
                  <div className="max-w-56 sm:max-w-full">
                    <h2 className="font-anticva leading-[120%] text-[22px] text-[#DAC394]">
                      Развлекательные программы
                    </h2>
                  </div>
                  <p className="text-white mt-6 text-base">
                    Мы предлагаем{" "}
                    <span className="text-[#DAC394]">
                      различные развлекательные программы
                    </span>
                    , включая ведущего, музыкантов, артистов и аниматоров, чтобы
                    сделать ваше мероприятие ярким и запоминающимся.
                  </p>
                </div>
                <div className="flex items-end flex-col justify-between">
                  <span className="inline-block absolute sm:relative top-0 right-[10px] rounded-full bg-white p-3">
                    <img
                      className="w-[16px] group-hover:rotate-45 transition-element"
                      src="/img/icon/arrow.png"
                      alt=""
                    />
                  </span>
                  <div className="text-white text-base">
                    <span className="text-[#DAC394]">Стоимость:</span> от 10 000
                    руб.
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-[#5B5955]" />
            <div className="pt-[31px] pb-[30px]">
              <div className="grid relative sm:grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-5 sm:gap-0 sm:justify-items-end justify-items-start group">
                <div>
                  <div className="max-w-56 sm:max-w-full">
                    <h2 className="font-anticva leading-[120%] text-[22px] text-[#DAC394]">
                      Координация мероприятия
                    </h2>
                  </div>
                  <p className="text-white mt-6 text-base">
                    В день проведения мероприятия наша команда будет
                    присутствовать на месте, чтобы{" "}
                    <span className="text-[#DAC394]">
                      обеспечить гладкое течение всех процессов
                    </span>{" "}
                    и решить любые возникающие вопросы.
                  </p>
                </div>
                <div className="flex items-end flex-col justify-between">
                  <span className="inline-block absolute sm:relative top-0 right-[10px] rounded-full bg-white p-3">
                    <img
                      className="w-[16px] group-hover:rotate-45 transition-element"
                      src="/img/icon/arrow.png"
                      alt=""
                    />
                  </span>
                  <div className="text-white text-base">
                    <span className="text-[#DAC394]">Стоимость:</span> от 10 000
                    руб.
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-[#5B5955]" />
          </div>
        </div>
      </div>
    </section>
  );
}
