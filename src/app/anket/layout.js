import icons from "../icons";

export const metadata = {
  title:
    "Добавить анкету. Ищем моделей, персонал на мероприятия, ищем сотрудничество",
  description:
    "Добавьте анкету для рассмотрения на нашем сервисе. Это бесплатно. Мы ищем разный персонал для участия в мероприятиях, фотосессиях и других мероприятях с разовым привлечением сотрудников.",
  // OpenGraph мета-теги
  openGraph: {
    title: "Добавь анкету соискателя",
    description:
      "Добавьте анкету для рассмотрения на нашем сервисе. Это бесплатно. Мы ищем разный персонал для участия в мероприятиях, фотосессиях и других мероприятях с разовым привлечением сотрудников.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/anket`,
    siteName: "Услуги для бизнеса",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/icons/wedding-family1200.png`,
        width: 1200,
        height: 630,
        alt: "Профессиональные услуги для бизнеса",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Добавь анкету соискателя. Ищем моделей, персонал на мероприятия, ищем сотрудничество",
    description:
      "Добавьте анкету для рассмотрения на нашем сервисе. Это бесплатно. Мы ищем разный персонал для участия в мероприятиях, фотосессиях и других мероприятях с разовым привлечением сотрудников.",
    images: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/icons/wedding-family1200.png`,
    ],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  // Schema.org разметка
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/anket`,
  },
  icons: icons,
};

export default function AnketLayout({ children }) {
  return <div className="container max-w-screen-xl">{children}</div>;
}
