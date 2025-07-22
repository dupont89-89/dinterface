"use client";

import { useState } from "react";
import Image from "next/image";

export const ImageGalleryPopup = ({ images, galleryTitle = "Галерея" }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images?.length) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-white mb-6">{galleryTitle}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => {
              setSelectedImage(img);
              setCurrentIndex(index);
            }}
          >
            <Image
              src={img}
              alt={`Изображение ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-[170px] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <Image
              src={images[currentIndex]}
              alt="Увеличенное изображение"
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain"
              priority
            />

            {images.length > 1 && (
              <>
                <button
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 hover:bg-white bg-[#1b1b1b] hover:text-[#1b1b1b] text-base sm:text-xl flex items-center content-center justify-center text-[#dac394] p-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                  onClick={handlePrev}
                >
                  ❮
                </button>
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-white bg-[#1b1b1b] hover:text-[#1b1b1b] text-base sm:text-xl flex items-center content-center justify-center text-[#dac394] p-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                  onClick={handleNext}
                >
                  ❯
                </button>
              </>
            )}

            <div className="absolute top-4 right-4">
              <button
                className="bg-white hover:bg-[#1b1b1b] text-[#1b1b1b] text-sm flex items-center content-center justify-center hover:text-[#dac394] p-2 w-6 h-6 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ✕
              </button>
            </div>
            <div className="text-white text-center mt-2">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
