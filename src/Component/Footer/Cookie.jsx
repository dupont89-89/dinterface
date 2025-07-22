"use client";
import { useState, useEffect } from "react";

export default function Cookie() {
  const [isVisible, setIsVisible] = useState(false);

  // Проверяем localStorage при загрузке компонента
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true); // Показываем уведомление, если cookie не приняты
    }
  }, []);

  // Обработчик для кнопки "Даю согласие"
  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true"); // Сохраняем в localStorage
    setIsVisible(false); // Скрываем уведомление
  };

  // Если cookie уже приняты, не показываем уведомление
  if (!isVisible) {
    return null;
  }

  return (
    <div className="sm:container containe-max-w max-w-screen-xl fixed z-50 bottom-0 left-0 right-0">
      <div className="bg-white text-black text-sm leading-[16px] px-2 sm:px-10 py-3.5 flex flex-col sm:flex-row gap-3 sm:gap-10 justify-between items-center rounded-0 sm:rounded-full shadow-lg">
        <div>
          <p>
            Сайт использует cookie-файлы и сервис веб-аналитики Яндекс.Метрика.
            Продолжая использовать сайт, вы соглашаетесь на обработку
            персональных данных в соответствии с{" "}
            <a className="underline" href="/privacy-policy/">
              Политикой конфиденциальности
            </a>
          </p>
        </div>
        <div>
          <button
            onClick={handleAcceptCookies}
            className="bg-[#141414] w-[250px] text-white px-[70] py-3.5 rounded-full cursor-pointer hover:bg-[#333333] transition-colors"
          >
            Даю согласие
          </button>
        </div>
      </div>
    </div>
  );
}
