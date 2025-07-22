import React from "react";
import ButtomFormZayvka from "../Button/ButtomFormZayvka";

export default function ServiceAbout(props) {
  return (
    <div>
      <div>
        <h2 className="text-[28px] sm:text-[38px] text-[#E6C37A] font-anticva">
          Кто мы
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 items-end gap-[12px] sm:gap-[112px] sm:mt-[50px] mt-[40px]">
        <div>
          <p className="leading-[19px] text-white text-[15px]">
            Мы — компания, специализирующаяся на предоставлении профессиональных
            услуг в области организации мероприятий.{" "}
            <span className="text-[#DAC394]">
              Наша команда обладает богатым опытом
            </span>{" "}
            и высоким уровнем экспертизы, что позволяет нам создавать уникальные
            и запоминающиеся события для наших клиентов.
          </p>
          <hr className="w-full text-[#5B5955] mt-6 none sm:hidden" />
        </div>
        <div>
          <p className="leading-[19px] text-white text-[15px]">
            <span className="text-[#DAC394]">Наша команда профессионалов</span>{" "}
            готова предложить креативные решения и инновационные идеи, чтобы
            сделать ваше мероприятие успешным и незабываемым.
          </p>
          <hr className="w-full text-[#5B5955] mt-6" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-3.5 mt-10">
        <div className="grid grid-cols-2 gap-3.5">
          <div>
            <img
              className="h-[230px] object-cover w-full rounded-[20px]"
              src="/img/service/floewrs.png"
              alt="Цветы на мероприятие"
            />
          </div>
          <div>
            <img
              className="h-[230px] object-cover w-full rounded-[20px]"
              src="/img/service/nevesta.png"
              alt="Невеста на фотосессии"
            />
          </div>
          <div className="col-span-2">
            <img
              className="h-[217px] object-cover w-full rounded-[20px]"
              src="/img/service/friends.png"
              alt="Друзья на дне рождении"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          <div className="col-span-1">
            <img
              className="h-[461px] object-cover w-full rounded-[20px]"
              src="/img/service/portret-nevesta.png"
              alt="Портрет невесты"
            />
          </div>
          <div className="grid gap-3.5">
            <div>
              <img
                className="h-[230px] object-cover w-full rounded-[20px]"
                src="/img/service/business-mer.png"
                alt="Организовали бизнес мероприятие"
              />
            </div>
            <div>
              <img
                className="h-[217px] object-cover w-full rounded-[20px]"
                src="/img/service/predmet-foto.png"
                alt="Предметная съёмка для интернет-магазина"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full text-[#5B5955] mt-[40px]" />
      <div className="mt-6 grid grid-cols-[1fr] sm:grid-cols-[1fr_455px] gap-[30px] sm:gap-[62px]">
        <div className="grid sm:grid-cols-[auto_1fr] grid-cols-[1fr] gap-5">
          <span className="text-[#E6C37A] font-bold text-[28px] w-[256px]">
            DINTERFACE
          </span>
          <p className="text-[#F2E9D6] text-base leading-[19px]">
            — ваш надежный партнер в организации мероприятий и фотосессий любого
            масштаба и формата.
          </p>
        </div>
        <div>
          <ButtomFormZayvka />
        </div>
      </div>
    </div>
  );
}
