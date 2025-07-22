import React from "react";
import ButtomFormZayvka from "../Button/ButtomFormZayvka";

export default function ServiceAboutMe(props) {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[72px] gap-[30px]">
        <div className="max-w-[287px] sm:max-w-full">
          <h2 className="text-[28px] lg:text-[38px] font-anticva text-[#E6C37A]">
            Почему выбирают нас
          </h2>
        </div>
        <div>
          <p className="text-white">
            Мы предлагаем{" "}
            <span className="text-[#DAC394] leading-[19px] text-base">
              полный спектр услуг
            </span>{" "}
            для создания и развития бизнеса, что делает нас оптимальным выбором
            для клиентов. Вот несколько причин, почему выбирают нас:
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-[14px] mt-[50px]">
        <div className="bg-[url(/img/service/about-me-1.jpg)] bg-cover bg-no-repeat rounded-[20px] relative h-[310px]">
          <div className="inset-0 bg-[#141414CC] absolute z-0 rounded-[20px]"></div>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="flex justify-between items-center">
              <h3 className="text-[#DAC394] sm:text-2xl text-xl pl-[13px] pt-[39px] leading-[100%] max-w-[170px] sm:max-w-full">
                <span className="font-love sm:text-[52px] text-[40px]">K</span>
                омплексный подход:
              </h3>
              <span className="text-[#DAC394] sm:text-2xl text-xl pr-[24px] leading-[100%] sm:pt-[35px] pt-[39px]">
                01
              </span>
            </div>
            <div className="p-6">
              <p className="text-base text-[#FCF8EF] leading-[19px]">
                Мы предоставляем все необходимые услуги, начиная от разработки
                бизнес-идеи и заканчивая ее реализацией и поддержкой.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url(/img/service/about-me-2.jpg)] bg-cover bg-no-repeat rounded-[20px] relative h-[310px]">
          <div className="inset-0 bg-[#141414CC] absolute z-0 rounded-[20px]"></div>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="flex justify-between items-center">
              <h3 className="text-[#DAC394] sm:text-2xl text-xl pl-[13px] pt-[39px] leading-[100%] max-w-[170px] sm:max-w-full">
                <span className="font-love sm:text-[52px] text-[40px]">О</span>
                пыт и профессионализм:
              </h3>
              <span className="text-[#DAC394] sm:text-2xl text-xl pr-[24px] leading-[100%] sm:pt-[35px] pt-[39px]">
                02
              </span>
            </div>
            <div className="p-6">
              <p className="text-base text-[#FCF8EF] leading-[19px]">
                Наша команда состоит из опытных специалистов с глубокими
                знаниями в различных областях бизнеса.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url(/img/service/about-me-3.jpg)] bg-cover bg-no-repeat rounded-[20px] relative h-[310px]">
          <div className="inset-0 bg-[#141414CC] absolute z-0 rounded-[20px]"></div>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="flex justify-between items-center">
              <h3 className="text-[#DAC394] sm:text-2xl text-xl pl-[13px] pt-[39px] leading-[100%] max-w-[170px] sm:max-w-full">
                <span className="font-love sm:text-[52px] text-[40px]">И</span>
                ндивидуальные решения:
              </h3>
              <span className="text-[#DAC394] sm:text-2xl text-xl pr-[24px] leading-[100%] sm:pt-[35px] pt-[39px]">
                03
              </span>
            </div>
            <div className="p-6">
              <p className="text-base text-[#FCF8EF] leading-[19px]">
                Мы понимаем, что каждый бизнес уникален, поэтому предлагаем
                персонализированные решения, учитывающие особенности и
                потребности наших клиентов.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url(/img/service/about-me-4.jpg)] bg-cover bg-no-repeat rounded-[20px] relative h-[310px]">
          <div className="inset-0 bg-[#141414CC] absolute z-0 rounded-[20px]"></div>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="flex justify-between items-center">
              <h3 className="text-[#DAC394] sm:text-2xl text-xl pl-[13px] pt-[39px] leading-[100%]">
                <span className="font-love sm:text-[52px] text-[40px]">K</span>
                ачество услуг:
              </h3>
              <span className="text-[#DAC394] sm:text-2xl text-xl pr-[24px] leading-[100%] sm:pt-[35px] pt-[39px]">
                04
              </span>
            </div>
            <div className="p-6">
              <p className="text-base text-[#FCF8EF] leading-[19px]">
                Мы стремимся к высокому качеству, и постоянно работаем над
                улучшением наших процессов.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url(/img/service/about-me-5.jpg)] bg-cover bg-no-repeat rounded-[20px] relative h-[310px]">
          <div className="inset-0 bg-[#141414CC] absolute z-0 rounded-[20px]"></div>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="flex justify-between items-center">
              <h3 className="text-[#DAC394] sm:text-2xl text-xl pl-[13px] pt-[39px] leading-[100%] max-w-[170px] sm:max-w-full">
                <span className="font-love sm:text-[52px] text-[40px]">П</span>
                оддержка на всех этапах:
              </h3>
              <span className="text-[#DAC394] sm:text-2xl text-xl pr-[24px] leading-[100%] sm:pt-[35px] pt-[39px]">
                05
              </span>
            </div>
            <div className="p-6">
              <p className="text-base text-[#FCF8EF] leading-[19px]">
                Мы сопровождаем наших клиентов на каждом этапе предоставляя
                необходимую помощь и консультации.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url(/img/service/about-me-6.jpg)] bg-cover bg-no-repeat rounded-[20px] relative h-[310px]">
          <div className="inset-0 bg-[#141414CC] absolute z-0 rounded-[20px]"></div>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="flex justify-between items-center">
              <h3 className="text-[#DAC394] sm:text-2xl text-xl pl-[13px] pt-[39px] leading-[100%] max-w-[170px] sm:max-w-full">
                <span className="font-love sm:text-[52px] text-[40px]">Г</span>
                ибкость и адаптивность:
              </h3>
              <span className="text-[#DAC394] sm:text-2xl text-xl pr-[24px] leading-[100%] sm:pt-[35px] pt-[39px]">
                06
              </span>
            </div>
            <div className="p-6">
              <p className="text-base text-[#FCF8EF] leading-[19px]">
                Мы готовы быстро реагировать на изменения рынка и адаптировать
                наши услуги под новые условия.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url(/img/service/about-me-7.jpg)] bg-cover bg-no-repeat rounded-[20px] relative h-[310px]">
          <div className="inset-0 bg-[#141414CC] absolute z-0 rounded-[20px]"></div>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="flex justify-between items-center">
              <h3 className="text-[#DAC394] sm:text-2xl text-xl pl-[13px] pt-[39px] leading-[100%] max-w-[170px] sm:max-w-full">
                <span className="font-love sm:text-[52px] text-[40px]">Д</span>
                олгосрочные отношения:
              </h3>
              <span className="text-[#DAC394] sm:text-2xl text-xl pr-[24px] leading-[100%] sm:pt-[35px] pt-[39px]">
                07
              </span>
            </div>
            <div className="p-6">
              <p className="text-base text-[#FCF8EF] leading-[19px]">
                Мы ценим доверие наших клиентов и стремимся к установлению
                долгосрочных партнерских отношений.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[185px] sm:h-[310px] flex flex-col justify-end p-[12px] sm:p-[47px]">
          <div>
            <p className="text-base leading-[19px] text-white">
              <span className="font-love sm:text-[52px] text-[40px] text-[#DAC394]">
                В
              </span>
              ыбирая нас,{" "}
              <span className="text-[#DAC394]">
                вы получаете надежного партнера,
              </span>{" "}
              <span className="unset sm:block ml-0 sm:ml-[47px]">
                который вам успешно реализовать ваши бизнес-идеи и достичь
                поставленных целей
              </span>
            </p>
          </div>
          <div className="mt-[30px]">
            <ButtomFormZayvka />
          </div>
        </div>
      </div>
    </div>
  );
}
