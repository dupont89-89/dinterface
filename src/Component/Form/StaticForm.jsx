import Link from "next/link";
import React from "react";

export default function StaticForm() {
  return (
    <div className="p-10 border rounded-[20px] border-[#5B5955] w-[573px] h-[629px]">
      <div className="font-anticva text-[38px] text-[#E6C37A] text-center">
        Заполните форму
      </div>
      <div className="flex flex-col min-h-[190px]">
        <label className="relative mt-[30px]" htmlFor="name">
          <input
            placeholder="Ваше имя"
            className="form-input border-b border-[#5B5955] w-full text-base"
            type="text"
            name="name"
            id="name"
            autoComplete="new-password"
          />
        </label>
        <label className="relative mt-[20px]" htmlFor="nameCompani">
          <input
            placeholder="Компания"
            className="form-input border-b border-[#5B5955] w-full text-base"
            type="text"
            name="nameCompani"
            id="nameCompani"
            autoComplete="new-password"
          />
        </label>
        <label htmlFor="tel" className="relative mt-[20px]">
          <input
            placeholder="_ (___) ___-__-__"
            className="form-input border-b border-[#5B5955] w-full text-base"
            type="tel"
            name="tel"
            id="tel"
            autoComplete="new-password"
          />
        </label>
        <label htmlFor="email" className="relative mt-[20px]">
          <input
            placeholder="Email"
            className="form-input border-b border-[#5B5955] w-full text-base"
            type="email"
            name="email"
            id="email"
            autoComplete="new-password"
          />
        </label>
        <label htmlFor="service" className="relative mt-[20px]">
          <select
            className="text-[#FCF8EF] form-input text-base border cursor-pointer border-[#5B5955] w-full rounded-[30px] px-[14px] py-[14px] pr-[40px] appearance-none bg-no-repeat bg-[length:20px_20px] bg-[right_14px_center]"
            style={{
              backgroundImage: "url('/img/icon/select-arrow.png')",
              backgroundSize: "16px 9px",
            }}
            type="service"
            name="service"
            id="service"
            autoComplete="new-password"
          >
            <option className="bg-[#0A0A0A]" value="">
              Выберите услугу
            </option>
            <option value="Организация фотосессий">
              Организация фотосессий
            </option>
            <option value="Организация мероприятий">
              Организация мероприятий
            </option>
            <option value="Подбор персонала">Подбор персонала</option>
            <option value="Управление проектами">Управление проектами</option>
          </select>
        </label>
        <label htmlFor="comment" className="relative mt-[20px]">
          <input
            placeholder="Комментарий"
            className="form-input border-b border-[#5B5955] w-full text-base"
            type="comment"
            name="comment"
            id="comment"
            autoComplete="new-password"
          />
        </label>
        <div className="sm:text-sm text-xs mt-2.5 py-[10px]">
          <label className="text-[#FFFCF6] block mb-1.5" htmlFor="politik">
            <input type="checkbox" name="politik" id="politik" /> Я согласен на{" "}
            <Link
              className="underline hover:text-[#E6C37A]"
              href="/privacy-personal/"
            >
              обработку моих персональных данных
            </Link>{" "}
            данных в соответствии с{" "}
            <a
              className="underline hover:text-[#E6C37A]"
              href="/privacy-policy/"
            >
              Политикой
            </a>
            .
          </label>
          <label className="text-[#FFFCF6] block" htmlFor="mailPrivacy">
            <input type="checkbox" name="mailPrivacy" id="mailPrivacy" /> Даю
            согласие на получение информационных и рекламных рассылок в
            соответствии с{" "}
            <a
              className="underline hover:text-[#E6C37A]"
              href="/mail-privacy-policy/"
            >
              Согласием
            </a>
          </label>
        </div>
        <div className="mt-[30px]">
          <button className="bg-[#FCF8EF] text-[#141414] text-base w-full py-[11px] rounded-[30px] hover:bg-[#e0c484]">
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}
