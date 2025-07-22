export const metadata = {
  title: "Вход пользователя",
  description: "Войдите, если вы уже прошли регистрацию",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
};

export default function LoginLayout({ children }) {
  return <div>{children}</div>;
}
