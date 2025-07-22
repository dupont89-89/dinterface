"use client";
import React, { useState, useEffect } from "react";
import StaticForm from "./StaticForm";
import InteractiveForm from "./InteractiveForm";
import { useRouter } from "next/navigation";

export default function PopupFormConsultant({ searchParams }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const isPopupOpen = searchParams.popup === "open";

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Блокировка скролла
  useEffect(() => {
    if (!isPopupOpen) return;

    const body = document.body;
    const originalStyle = window.getComputedStyle(body).overflow;

    // Блокируем скролл
    body.style.overflow = "hidden";

    // Отключаем touchmove для предотвращения прокрутки на мобильных устройствах
    const preventTouchMove = (e) => {
      e.preventDefault(); // Предотвращаем прокрутку
    };

    document.addEventListener("touchmove", preventTouchMove, {
      passive: false,
    });

    return () => {
      // Восстанавливаем исходное состояние
      body.style.overflow = originalStyle;
      document.removeEventListener("touchmove", preventTouchMove);
    };
  }, [isPopupOpen]);

  const closePopup = () => {
    router.push("/", { scroll: false }); // Закрытие попапа без прокрутки
  };

  if (!isPopupOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0ACC] touch-none"
      onClick={(e) => {
        if (!e.target.closest(".popup-container")) {
          closePopup();
        }
      }}
    >
      {/* Контейнер попапа */}
      <div
        className="relative bg-[#0A0A0A] rounded-[20px] shadow-lg max-w-[573px] w-full animate-fade-in popup-container max-h-[90vh] overflow-y-auto touch-auto"
        onTouchMove={(e) => e.stopPropagation()}
      >
        {isClient ? <InteractiveForm /> : <StaticForm />}
      </div>

      {/* Кнопка закрытия */}
      <button
        className="absolute sm:top-[60px] sm:right-[60px] top-[30px] right-[25px]"
        onClick={(e) => {
          e.stopPropagation();
          closePopup();
        }}
      >
        <img
          className="w-[28px] sm:w-[36px]"
          src="/img/icon/close-form.png"
          alt="Закрыть"
        />
      </button>
    </div>
  );
}
