import { getUserAnket } from "@/app/api-function/user/user";
import ClientComponentAnket from "./ClientComponentAnket";

// Явно указываем динамическое поведение
export const dynamic = "force-dynamic";

// Отключаем статическую генерацию для этого маршрута
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  // Получаем id из параметров маршрута
  const { id } = await params;

  try {
    // Получаем данные анкеты
    const response = await getUserAnket({ id });

    // Проверяем, что данные получены
    if (!response?.data) {
      return {
        title: "Анкета пользователя",
        description: "Анкета не найдена",
      };
    }

    const { data } = response;

    return {
      metadataBase: new URL(
        process.env.NEXTAUTH_URL || "http://localhost:3000"
      ),
      title: `${data.name || "Пользователь"} - анкета`,
      description: data.description || `Анкета пользователя ${data.name || ""}`,
      openGraph: {
        title: `${data.name || "Пользователь"} - анкета`,
        description:
          data.description || `Анкета пользователя ${data.name || ""}`,
        images: [
          {
            url: data.image || "/default-user.jpg",
            width: 800,
            height: 600,
            alt: data.name || "Пользователь",
          },
        ],
      },
    };
  } catch (error) {
    console.error("Ошибка при генерации метаданных:", error);
    return {
      title: "Анкета пользователя",
      description: "Не удалось загрузить данные анкеты",
    };
  }
}

export default async function Page({ params }) {
  // Получаем id из параметров маршрута
  const { id } = await params;

  try {
    // Получаем данные анкеты
    const response = await getUserAnket({ id });

    // Проверяем, что данные получены
    if (!response?.data) {
      return (
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold">Анкета не найдена</h1>
          <p>Запрошенная анкета не существует или была удалена.</p>
        </div>
      );
    }

    return <ClientComponentAnket id={id} initialData={response.data} />;
  } catch (error) {
    console.error("Ошибка при загрузке анкеты:", error);
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Ошибка загрузки</h1>
        <p>
          Произошла ошибка при загрузке анкеты. Пожалуйста, попробуйте позже.
        </p>
      </div>
    );
  }
}
