"use client";
import React, { useState } from "react";

export default function ReviewsCarousel() {
  // Массив с фотографиями в порядке от левого уменьшенного до правого уменьшенного
  const [photos, setPhotos] = useState([
    "/img/reviews/reviews-4.png",
    "/img/reviews/reviews-5.png",
    "/img/reviews/reviews-1.png", // Главное фото
    "/img/reviews/reviews-2.png",
    "/img/reviews/reviews-3.png",
  ]);

  // Функция для перемещения фотографий вправо
  const moveRight = () => {
    const newPhotos = [...photos];
    const lastPhoto = newPhotos.pop(); // Убираем последний элемент
    newPhotos.unshift(lastPhoto); // Добавляем его в начало
    setPhotos(newPhotos);
  };

  // Функция для перемещения фотографий влево
  const moveLeft = () => {
    const newPhotos = [...photos];
    const firstPhoto = newPhotos.shift(); // Убираем первый элемент
    newPhotos.push(firstPhoto); // Добавляем его в конец
    setPhotos(newPhotos);
  };

  return (
    <div className="container max-w-screen-xl mx-auto">
      <div className="flex justify-center items-center mt-[60px]">
        {/* Левое уменьшенное фото */}
        <div className="lg:px-5 sm:px-2.5 px-[9px]">
          <div className="lg:h-[326px] lg:w-[160px] sm:h-[224px] sm:w-[103px] h-[224px] w-[103px]">
            <img src={photos[0]} alt="" />
          </div>
        </div>

        {/* Второе слева уменьшенное фото */}
        <div className="lg:px-5 sm:px-2.5 px-[18px]">
          <div className="lg:h-[394px] lg:w-[194px] sm:h-[269px] sm:w-[124px] h-[269px] w-[124px]">
            <img src={photos[1]} alt="" />
          </div>
        </div>

        {/* Кнопка влево */}
        <div className="lg:px-5 sm:px-2.5 px-[0px]">
          <button
            onClick={moveLeft}
            className="hover:bg-[#e6c37a7a] bg-none h-[46px] w-[46px] sm:h-[60px] sm:w-[60px] border rounded-full border-[#DAC394] flex justify-center items-center"
          >
            <img
              className="w-[23px]"
              src="/img/reviews/arrow-left.png"
              alt=""
            />
          </button>
        </div>

        {/* Главное фото */}
        <div className="lg:px-5 sm:px-2.5 px-[18px]">
          <div className="h-[480px] sm:h-[416px] lg:h-[582px] w-[235px] sm:w-[204px] lg:w-[282px]">
            <img
              className="h-full w-full object-cover"
              src={photos[2]}
              alt="Отзыв заказчика по мероприятию в ЭКСПО"
            />
          </div>
        </div>

        {/* Кнопка вправо */}
        <div className="lg:px-5 sm:px-2.5 px-[0px]">
          <button
            onClick={moveRight}
            className="hover:bg-[#e6c37a7a] bg-none h-[46px] w-[46px] sm:h-[60px] sm:w-[60px] border rounded-full border-[#DAC394] flex justify-center items-center"
          >
            <img
              className="w-[23px]"
              src="/img/reviews/arrow-right.png"
              alt=""
            />
          </button>
        </div>

        {/* Первое справа уменьшенное фото */}
        <div className="lg:px-5 sm:px-2.5 px-[18px]">
          <div className="lg:h-[394px] lg:w-[194px] sm:h-[269px] sm:w-[124px] h-[269px] w-[124px]">
            <img src={photos[3]} alt="" />
          </div>
        </div>

        {/* Правое уменьшенное фото */}
        <div className="lg:px-5 sm:px-2.5 px-[9px]">
          <div className="lg:h-[326px] lg:w-[160px] sm:h-[224px] sm:w-[103px] h-[224px] w-[103px]">
            <img src={photos[4]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
