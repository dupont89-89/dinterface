"use client"; // Указываем, что это клиентский компонент

import { useState } from "react";

export default function ImageGallery({ images }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const container = e.target.closest(".drag-scroll");
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = e.target.closest(".drag-scroll");
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Чувствительность перетаскивания
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative overflow-x-auto no-scrollbar drag-scroll mt-[22px] sm:mt-0"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="flex gap-4 w-max">
        {images.map((item, index) => (
          <div key={index} className="w-auto h-full flex-shrink-0">
            {/* Контейнер для изображения */}
            <div className="w-full h-full overflow-hidden">
              <img
                src={item.src}
                alt={`Фото ${index + 1}`}
                className="lg:w-full w-[190px] h-[253px] lg:h-[370px] object-cover"
                draggable="false"
              />
            </div>
            {/* Подпись фотографа */}
            <p className="text-[#8A8A8A] max-w-[190px] sm:max-w-full mt-3.5 text-left text-sm sm:text-base leading-[19px]">
              Фотограф: <span className="text-white">{item.photographer}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
