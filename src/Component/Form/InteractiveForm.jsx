"use client";
import { sendMail } from "@/app/api-function/send-mail/send-mail";
import Link from "next/link";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";

export default function InteractiveForm() {
  const [formData, setFormData] = useState({
    name: "",
    nameCompani: "",
    tel: "",
    email: "",
    mailPrivacy: false,
    service: "", // Значение для выпадающего списка
    comment: "",
    politik: false,
  });

  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия выпадающего списка

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleOptionClick = (value) => {
    setFormData((prev) => ({
      ...prev,
      service: value, // Устанавливаем выбранное значение в formData
    }));
    setIsOpen(false); // Закрываем выпадающий список
  };

  // Проверка, заполнены ли все обязательные поля
  const isFormValid = () => {
    const { name, nameCompani, tel, service, politik, mailPrivacy } = formData;
    return (
      name.trim() !== "" &&
      nameCompani.trim() !== "" &&
      tel.trim() !== "" &&
      service.trim() !== "" &&
      politik === true &&
      mailPrivacy === true
    );
  };

  const handleClickForm = () => {
    const statusForm = sendMail(formData);
    console.log(statusForm);
  };

  return (
    <div className="sm:px-0 px-2">
      <div className="p-10 border rounded-[20px] border-[#5B5955] sm:w-[573px] w-full sm:h-[629px] h-[627px] overflow-y-auto sm:overflow-hidden">
        <div className="font-anticva text-[22px] sm:text-[38px] text-[#E6C37A] text-center">
          Заполните форму
        </div>
        <div className="flex flex-col min-h-[190px]">
          {/* Имя */}
          <label className="relative mt-[30px]" htmlFor="name">
            <input
              placeholder="Ваше имя"
              className="form-input border-b border-[#5B5955] w-full text-base"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              autoComplete="new-password"
            />
          </label>

          {/* Компания */}
          <label className="relative mt-[20px]" htmlFor="nameCompani">
            <input
              placeholder="Компания"
              className="form-input border-b border-[#5B5955] w-full text-base"
              type="text"
              name="nameCompani"
              id="nameCompani"
              value={formData.nameCompani}
              onChange={handleInputChange}
              autoComplete="new-password"
            />
          </label>

          {/* Телефон */}
          <label htmlFor="tel" className="relative mt-[20px]">
            <IMaskInput
              mask="0 (000) 000-00-00"
              placeholder="_ (___) ___-__-__"
              className="form-input border-b border-[#5B5955] w-full text-base"
              type="tel"
              name="tel"
              id="tel"
              value={formData.tel}
              onAccept={(value) => {
                setFormData((prev) => ({
                  ...prev,
                  tel: value,
                }));
              }}
              autoComplete="new-password"
            />
          </label>

          {/* Email */}
          <label htmlFor="email" className="relative mt-[20px]">
            <input
              placeholder="Email"
              className="form-input border-b border-[#5B5955] w-full text-base"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="new-password"
            />
          </label>

          {/* Кастомный выпадающий список */}
          <div className="relative w-full mt-[20px]">
            <button
              className="text-[#FCF8EF] text-left form-input text-base border cursor-pointer border-[#5B5955] w-full rounded-[30px] px-[14px] py-[14px] pr-[40px] appearance-none bg-no-repeat bg-[length:20px_20px] bg-[right_14px_center]"
              style={{
                backgroundImage: "url('/img/icon/select-arrow.png')",
                backgroundSize: "16px 9px",
              }}
              onClick={() => setIsOpen(!isOpen)} // Переключение видимости списка
            >
              {formData.service || "Выберите услугу"}{" "}
              {/* Отображение выбранного значения */}
            </button>
            {isOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-[#0A0A0A] text-[#FCF8EF] overflow-hidden">
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-[#1A1A1A] border-b border-[#5B5955]"
                  onClick={() => handleOptionClick("Организация фотосессий")}
                >
                  Организация фотосессий
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-[#1A1A1A] border-b border-[#5B5955]"
                  onClick={() => handleOptionClick("Организация мероприятий")}
                >
                  Организация мероприятий
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-[#1A1A1A] border-b border-[#5B5955]"
                  onClick={() => handleOptionClick("Подбор персонала")}
                >
                  Подбор персонала
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-[#1A1A1A] border-b border-[#5B5955]"
                  onClick={() => handleOptionClick("Управление проектами")}
                >
                  Управление проектами
                </li>
              </ul>
            )}
          </div>

          {/* Комментарий */}
          <label htmlFor="comment" className="relative mt-[20px]">
            <input
              placeholder="Комментарий"
              className="form-input border-b border-[#5B5955] w-full text-base"
              type="text"
              name="comment"
              id="comment"
              value={formData.comment}
              onChange={handleInputChange}
              autoComplete="new-password"
            />
          </label>

          {/* Чекбоксы */}
          <div className="sm:text-sm text-xs mt-2.5 py-[10px]">
            <label className="text-[#FFFCF6] block mb-1.5" htmlFor="politik">
              <input
                onChange={handleInputChange}
                type="checkbox"
                name="politik"
                id="politik"
                checked={formData.politik || false}
              />{" "}
              Я согласен на{" "}
              <Link
                className="underline hover:text-[#E6C37A]"
                href="/privacy-personal/"
              >
                обработку моих персональных данных
              </Link>{" "}
              в соответствии с{" "}
              <a
                className="underline hover:text-[#E6C37A]"
                href="/privacy-policy/"
              >
                Политикой
              </a>
              .
            </label>
            <label className="text-[#FFFCF6] block" htmlFor="mailPrivacy">
              <input
                onChange={handleInputChange}
                type="checkbox"
                name="mailPrivacy"
                id="mailPrivacy"
                checked={formData.mailPrivacy || false}
              />{" "}
              Даю согласие на получение информационных и рекламных рассылок в
              соответствии с{" "}
              <a
                className="underline hover:text-[#E6C37A]"
                href="/mail-privacy-policy/"
              >
                Согласием
              </a>
            </label>
          </div>

          {/* Кнопка отправки */}
          <div className="mt-[30px]">
            <button
              onClick={handleClickForm}
              title={
                !isFormValid()
                  ? "Заполните обязательные поля"
                  : "Отправить заявку"
              }
              disabled={!isFormValid()}
              className={`bg-[#FCF8EF] text-[#141414] text-base w-full py-[11px] rounded-[30px] ${
                !isFormValid()
                  ? "opacity-50 !cursor-not-allowed"
                  : "hover:bg-[#e0c484]"
              }`}
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
