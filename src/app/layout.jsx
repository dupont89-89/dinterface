import "./globals.css";
import Footer from "@/Component/Footer/Footer";
import Header from "@/Component/Header/Header";
import Cookie from "@/Component/Footer/Cookie";
import StickyHeaderObserver from "@/Component/function/StickyHeaderObserver";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { RiArticleLine } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import icons from "./icons";
import { Suspense } from "react";
import { Metrika } from "@/Component/Analitik/metrika";

export const metadata = {
  title: "Фотосессии в Москве под ключ профессиональная организация фотосъёмок",
  description:
    "Профессиональные фотосессии: эффективный подбор моделей и организация стильных фотосессий. Комплексные решения для вашего бизнеса. Обращайтесь – достигайте большего!",

  // OpenGraph мета-теги
  openGraph: {
    title: "Профессиональные фотосессии",
    description:
      "Профессиональные фотосессии: эффективный подбор моделей и организация стильных фотосессий. Комплексные решения для вашего бизнеса. Обращайтесь – достигайте большего!",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "DinterFace",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/icons/wedding-family1200.png`,
        width: 1200,
        height: 630,
        alt: "Фотосессии в Москве под ключ",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Фотосессии в Москве под ключ",
    description:
      "Профессиональные фотосессии: эффективный подбор моделей и организация стильных фотосессий. Комплексные решения для вашего бизнеса. Обращайтесь – достигайте большего!",
    images: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/icons/wedding-family1200.png`,
    ],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  // Schema.org разметка
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  icons: icons,
};

export default async function RootLayout({ children }) {
  const session = await auth();
  // JSON-LD разметка для Schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DinterFace",
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/icons/wedding-family1200.png`,
    description:
      "Профессиональные фотосессии: эффективный подбор моделей и организация стильных фотосессий. Комплексные решения для вашего бизнеса. Обращайтесь – достигайте большего!",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Москва",
      addressRegion: "Московская область",
      addressCountry: "RU",
    },
    telephone: "+7 (915) 127-22-92",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: ["https://vk.com/club229005350", "https://t.me/dynamicdhs"],
  };
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0A0A0A]">
        <div id="app" className="min-h-screen flex flex-col relative">
          <div id="sticky-header">
            <div className="container max-w-screen-xl mx-auto">
              {session?.user?.role === "admin" && (
                <div className="text-[#F2E9D6] text-[15px] font-normal flex justify-start items-center bg-[#1b1b1b] h-[33px] rounded-[50px] mt-5 md:px-[30px] px-[20px] relative z-1">
                  <div className="relative overflow-hidden">
                    <nav aria-label="Хлебные крошки" className="relative">
                      <ul className="flex items-center flex-nowrap overflow-x-auto scroll-smooth whitespace-nowrap gap-5">
                        <li className="flex-shrink-0">
                          <Link
                            className="hover:underline flex gap-1.5 items-center"
                            href="/dashboard"
                          >
                            <RxDashboard size={15} className="text-[#F2E9D6]" />{" "}
                            Управление
                          </Link>
                        </li>
                        <li className="flex-shrink-0">
                          <Link
                            className="hover:underline flex gap-1.5 items-center"
                            href="/dashboard/news/add-news"
                          >
                            <RiArticleLine
                              size={15}
                              className="text-[#F2E9D6]"
                            />{" "}
                            Добавить новость
                          </Link>
                        </li>
                        <li className="flex-shrink-0">
                          <Link
                            className="hover:underline flex gap-1.5 items-center"
                            href="/dashboard/anket"
                          >
                            <FaUserLarge size={15} className="text-[#F2E9D6]" />{" "}
                            Соискатели
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
              <Header />
            </div>
          </div>
          <StickyHeaderObserver />

          <main className="flex-grow overflow-x-hidden">
            <div className="container max-w-screen-xl mx-auto">{children}</div>
          </main>

          <div id="contact" className="max-w-[1260px] container mx-auto">
            <Footer />
          </div>
          <Cookie />
        </div>
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
