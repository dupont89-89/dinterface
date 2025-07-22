import ButtonFormConsultant from "@/Component/Button/ButtonFormConsultant";
import FAQ from "@/Component/Faq/Faq";
import PopupFormConsultant from "@/Component/Form/PopupFormConsultant";
import NewsCartListingContainer from "@/Component/News/NewsCartListingContainer";
import ArrowListingMobile from "@/Component/Parts/ArrowListingMobile";
import ReviewsCarousel from "@/Component/Reviews/ReviewsCarousel";
import OurWork from "@/Component/Service/OurWork";
import ServiceAbout from "@/Component/Service/ServiceAbout";
import ServiceAboutMe from "@/Component/Service/ServiceAboutMe";
import ServiceFlex from "@/Component/Service/ServiceFlex";
import StepService from "@/Component/Service/StepService";
import { getNews } from "./api-function/news/news";
import Link from "next/link";

export default async function Home({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  let news = [];
  try {
    const { data } = await getNews({ type: "new" });
    news = data;
  } catch (error) {
    console.error("Ошибка при загрузке новостей:", error.message);
  }
  return (
    <>
      <section>
        {/* Контент */}
        <div className="relative text-center sm:mt-[45px] mt-[15px]">
          <h1 className="font-anticva text-[#E6C37A] lg:text-5xl md:text-[38px] text-[28px]">
            Фотосессии в Москве под ключ
          </h1>
          <div className="sm:text-[22px] text-[18px] text-[#F2E9D6] leading-[19px] sm:leading-[66px] mb-2.5">
            <span className="font-love sm:text-[58px] text-[46px]">П</span>
            рофессиональная организация фотосъёмки
          </div>
          <ButtonFormConsultant />
        </div>
      </section>
      <div className="mt-5 rounded-2xl overflow-hidden border border-black shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-full max-w-[1260px] mx-auto h-[320px] sm:h-[699px] relative">
        <video
          className="absolute rounded-2xl sm:mx-0 sm:rounded-0 sm:border-0 border border-[#5B5955] inset-0 sm:mt-0 object-cover w-full h-[320px] sm:h-full"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video/freecompress-0423.mp4" type="video/mp4" />
          <source src="/video/freecompress-0423.webm" type="video/webm" />
        </video>
      </div>
      {news.length > 0 && (
        <div className="container mt-[80px] sm:mt-[120px] max-w-screen-xl">
          <div className="text-center">
            <h2 className="font-anticva text-[38px] text-[#E6C37A]">Новости</h2>
            <div className="none md:block lg:hidden">
              <ArrowListingMobile />
            </div>
            <div className="mt-[50px] relative overflow-x-auto no-scrollbar drag-scroll">
              <NewsCartListingContainer news={news} />
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                className="w-[320px] h-[40px] hover:bg-[#F6C86A] bg-[#FFF9EC] text-[#141414] text-sm flex items-center justify-center rounded-l-[30px] rounded-r-[30px]"
                href="/news/"
              >
                Смотреть все новости
              </Link>
            </div>
          </div>
        </div>
      )}
      <div
        id="service"
        className={`${
          news.length > 0
            ? "mt-[80px] sm:mt-[91px]"
            : "mt-[571px] sm:mt-[646px]"
        }`}
      >
        <ServiceFlex />
      </div>
      <div
        id="promotion-busines"
        className="sm:mt-[124px] mt-[100px] container max-w-screen-xl"
      >
        <StepService />
      </div>
      <div
        id="about"
        className="sm:mt-[124px] mt-[100px] container max-w-screen-xl"
      >
        <ServiceAbout />
      </div>
      <div className="sm:mt-[124px] mt-[100px] container max-w-screen-xl">
        <ServiceAboutMe />
      </div>
      <div id="portfolio" className="sm:mt-[124px] mt-[88px]">
        <div className="container max-w-screen-xl">
          <h2 className="font-anticva text-center sm:text-left text-[28px] sm:text-[38px] text-[#E6C37A]">
            Работы наших фотографов
          </h2>
        </div>
        <OurWork searchParams={resolvedSearchParams} />
      </div>
      <div id="reviews" className="mt-[74px]">
        <div className="container max-w-screen-xl">
          <h2 className="font-anticva text-[28px] sm:text-[38px] text-[#E6C37A] text-center">
            Отзывы довольных клиентов
          </h2>
        </div>
        <ReviewsCarousel />
      </div>
      <div id="faq" className="container max-w-screen-xl mt-[120px]">
        <div>
          <h2 className="font-anticva text-[28px] sm:text-[38px] text-[#E6C37A] text-center">
            Часто задаваемые вопросы при заказе фотосъёмки
          </h2>
        </div>
        <div className="mt-[50px]">
          <FAQ searchParams={resolvedSearchParams} />
        </div>
        <PopupFormConsultant searchParams={resolvedSearchParams} />
      </div>
    </>
  );
}
