import icons from "../icons";

export const metadata = {
  title: "Согласие на рекламную рассылку",
  description: "Согласие на рекламную рассылку. Прочитайте, ознакомьтесь.",
  // OpenGraph мета-теги
  openGraph: {
    title: "Согласие на рекламную рассылку",
    description: "Согласие на рекламную рассылку. Прочитайте, ознакомьтесь.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-personal`,
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
    title: "Согласие на обработку персональных данных",
    description:
      "Согласие на обработку персональных данных. Прочитайте, ознакомьтесь.",
    images: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/icons/wedding-family1200.png`,
    ],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  // Schema.org разметка
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-personal`,
  },
  icons: icons,
};

export default function MailPrivaceLayout({ children }) {
  return <div>{children}</div>;
}
