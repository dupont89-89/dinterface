import icons from "../icons";

export const metadata = {
  title: "Новости проекта организации бизнеса",
  description:
    "Новости проекта организации бизнеса. Самая последняя информация о мероприятиях.",
  // OpenGraph мета-теги
  openGraph: {
    title: "Новости проекта организации бизнеса",
    description:
      "Новости проекта организации бизнеса. Самая последняя информация о мероприятиях.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/news`,
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
    title: "Новости проекта организации бизнеса",
    description:
      "Новости проекта организации бизнеса. Самая последняя информация о мероприятиях.",
    images: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/icons/wedding-family1200.png`,
    ],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  // Schema.org разметка
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/news`,
  },
  icons: icons,
};

export default function LoginLayout({ children }) {
  return <div>{children}</div>;
}
