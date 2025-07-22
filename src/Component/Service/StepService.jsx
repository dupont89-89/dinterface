import React from "react";
import ButtomFormZayvka from "../Button/ButtomFormZayvka";

export default function StepService(props) {
  return (
    <div>
      <div className="grid lg:grid-cols-2 lg:gap-0 gap-10 grid-cols-1">
        <div className="max-w-none md:max-w-[694px] lg:max-w-none">
          <h2 className="sm:text-[38px] text-[28px] text-[#E6C37A] font-anticva">
            Профессиональные услуги для бизнеса
          </h2>
        </div>
        <div>
          <p className="leading-[19px] sm:text-[15px] text-[14px] text-white">
            Профессиональные услуги для бизнеса под ключ включают в себя
            комплексное решение различных задач, связанных с запуском и
            развитием бизнеса. Это может охватывать такие области, как{" "}
            <span className="text-[#DAC394]">
              маркетинг – создание и реализация маркетинговых стратегий
            </span>
            , включая цифровой маркетинг и SMM.
          </p>
          <hr className="w-full mt-6 text-[#5B5955]" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-[#151515] gap-[15px] rounded-[20px] p-2.5 mt-10">
        <div className="flex flex-col justify-between mb-[30px] sm:mb-[0px] p-6 h-[100px] sm:h-[260px]">
          <div>
            <h2 className="text-2xl text-[#F2E9D6]">
              Основные аспекты маркетинга включают:
            </h2>
          </div>
          <div className="sm:block none">
            <ButtomFormZayvka />
          </div>
        </div>
        <div className="flex flex-col justify-between p-6 h-[260px] bg-[#0A0A0A] border border-[#32302D] rounded-[10px]">
          <div className="flex justify-between flex-row">
            <div>
              <h3 className="text-xl text-[#DAC394]">Исследование рынка:</h3>
            </div>
            <div className="text-[#5B5955] text-[20px]">01</div>
          </div>
          <div>
            <p className="text-white sm:text-[15px] text-[14px]">
              <span className="text-[#DAC394]">
                Анализ целевой аудитории, конкурентной среды и рыночных
                тенденций
              </span>{" "}
              для определения потребностей и предпочтений клиентов.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-6 h-[260px] bg-[#0A0A0A] border border-[#32302D] rounded-[10px]">
          <div className="flex justify-between flex-row">
            <div>
              <h3 className="text-xl text-[#DAC394]">
                Разработка
                <br /> маркетинговых стратегий:
              </h3>
            </div>
            <div className="text-[#5B5955] text-[20px]">02</div>
          </div>
          <div>
            <p className="text-white sm:text-[15px] text-[14px]">
              Создание планов, которые включают выбор целевых сегментов,
              позиционирование продукта и{" "}
              <span className="text-[#DAC394]">
                определение уникального торгового предложения
              </span>{" "}
              (УТП).
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-6 h-[260px] bg-[#0A0A0A] border border-[#32302D] rounded-[10px]">
          <div className="flex justify-between flex-row">
            <div>
              <h3 className="text-xl text-[#DAC394]">Цифровой маркетинг:</h3>
            </div>
            <div className="text-[#5B5955] text-[20px]">03</div>
          </div>
          <div className="text-white sm:text-[15px] text-[14px]">
            <p>
              Использование онлайн-платформ и{" "}
              <span className="text-[#DAC394]">технологий для продвижения</span>{" "}
              товаров и услуг.
            </p>
            <p>Это может включать:</p>
            <ul>
              <li>Поисковая оптимизация (SEO)</li>
              <li>Контекстная реклама (PPC)</li>
              <li>Контент-маркетинг.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between p-6 h-[260px] bg-[#0A0A0A] border border-[#32302D] rounded-[10px]">
          <div className="flex justify-between flex-row">
            <div>
              <h3 className="text-xl text-[#DAC394]">Реализация:</h3>
            </div>
            <div className="text-[#5B5955] text-[20px]">04</div>
          </div>
          <div>
            <p className="text-white sm:text-[15px] text-[14px]">
              Внедрение запланированных мероприятий, рекламных PR- акций
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-6 h-[260px] bg-[#0A0A0A] border border-[#32302D] rounded-[10px]">
          <div className="flex justify-between flex-row">
            <div>
              <h3 className="text-xl text-[#DAC394]">
                Социальные медиа
                <br /> маркетинг (SMM):
              </h3>
            </div>
            <div className="text-[#5B5955] text-[20px]">05</div>
          </div>
          <div>
            <p className="text-white sm:text-[15px] text-[14px]">
              Применение социальных сетей для взаимодействия с аудиторией,
              создания сообщества вокруг бренда и продвижения продуктов. Это
              может включать создание контента, ведение страниц в социальных
              сетях и запуск рекламных кампаний
            </p>
          </div>
        </div>
        <div className="block sm:hidden my-5 sm:my-0">
          <ButtomFormZayvka />
        </div>
      </div>
    </div>
  );
}
