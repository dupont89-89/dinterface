export const metadata = {
  title: "Регистрация пользователя",
  description: "Всех ждем в нашем сервисе.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
};

export default function RegPageLayout({ children }) {
  return <div>{children}</div>;
}
