import Link from "next/link";
import ImageGallery from "../function/ImageGallery";
import OurWorkMobileTabs from "../Parts/OurWorkMobileTabs";

export default function OurWork({ searchParams }) {
  const activeTab = searchParams.tab || "marketplaces";

  const tabs = [
    { id: "marketplaces", label: "Маркетплейсы" },
    { id: "photoshoot", label: "Предметная съемка" },
    { id: "other", label: "Другое" },
  ];

  const images = {
    marketplaces: [
      { src: "/img/fotograf/carusel-1.png", photographer: "Денис Лачнев" },
      { src: "/img/fotograf/carusel-2.png", photographer: "Арсений Бобылёв" },
      { src: "/img/fotograf/carusel-3.png", photographer: "Кирилл Фадеев" },
      { src: "/img/fotograf/carusel-4.png", photographer: "Кирилл Фадеев" },
      { src: "/img/fotograf/carusel-1.png", photographer: "Денис Лачнев" },
      { src: "/img/fotograf/carusel-2.png", photographer: "Арсений Бобылёв" },
      { src: "/img/fotograf/carusel-3.png", photographer: "Кирилл Фадеев" },
      { src: "/img/fotograf/carusel-4.png", photographer: "Кирилл Фадеев" },
    ],
    photoshoot: [
      { src: "/img/predmet/slider-1.png", photographer: "Валерий Лебякин" },
      { src: "/img/predmet/slider-2.png", photographer: "Крутов Даниил" },
      { src: "/img/predmet/slider-3.png", photographer: "Самрин Леонид" },
      { src: "/img/predmet/slider-4.png", photographer: "Костя Картов" },
      { src: "/img/predmet/slider-1.png", photographer: "Денис Лачнев" },
      { src: "/img/predmet/slider-2.png", photographer: "Арсений Бобылёв" },
      { src: "/img/predmet/slider-3.png", photographer: "Кирилл Фадеев" },
      { src: "/img/predmet/slider-4.png", photographer: "Кирилл Фадеев" },
    ],
    other: [
      { src: "/img/fotograf/carusel-1.png", photographer: "Денис Лачнев" },
      { src: "/img/fotograf/carusel-2.png", photographer: "Арсений Бобылёв" },
      { src: "/img/fotograf/carusel-3.png", photographer: "Кирилл Фадеев" },
      { src: "/img/fotograf/carusel-4.png", photographer: "Кирилл Фадеев" },
      { src: "/img/fotograf/carusel-1.png", photographer: "Денис Лачнев" },
      { src: "/img/fotograf/carusel-2.png", photographer: "Арсений Бобылёв" },
      { src: "/img/fotograf/carusel-3.png", photographer: "Кирилл Фадеев" },
      { src: "/img/fotograf/carusel-4.png", photographer: "Кирилл Фадеев" },
    ],
  };

  return (
    <div className="container max-w-screen-xl">
      {/* Десктопные табы (скрываются на мобильных) */}
      <div className="none md:grid grid-cols-3 mb-10">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            scroll={false}
            href={`?tab=${tab.id}`}
            className={`py-[22px] leading-[19px] text-base text-center ${
              activeTab === tab.id
                ? "text-[#E6C37A] border-b border-[#E6C37A]"
                : "text-[#5B5955] hover:text-[#E6C37A] border-b border-[#5B5955]"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
      <OurWorkMobileTabs
        searchParams={searchParams}
        activeTab={activeTab}
        tabs={tabs}
      />
      {/* Блок с фотографиями для поисковых систем */}
      <div className="hidden-for-users">
        {images[activeTab].map((item, index) => (
          <figure key={index} className="sr-only">
            <img src={item.src} alt={`Фото ${index + 1}`} />
            <figcaption>Фотограф: {item.photographer}</figcaption>
          </figure>
        ))}
      </div>

      {/* Клиентский компонент для галереи */}
      <ImageGallery images={images[activeTab]} />
    </div>
  );
}
