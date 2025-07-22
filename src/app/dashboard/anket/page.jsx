import { getUserAnket } from "@/app/api-function/user/user";
import Link from "next/link";

export default async function DashboardAnket() {
  const { data: anket } = await getUserAnket();
  const filteredAnket = anket.filter((item) => item.role !== "admin");

  // Функция для обработки изображений
  const getImageUrl = (img) => {
    return img || "/default-avatar.jpg"; // Запасное изображение
  };

  return (
    <div className="my-8">
      <div className="mb-4">
        <h1 className="text-[#DAC394] text-left text-xl sm:text-3xl">
          Управление соискателями
        </h1>
      </div>

      {filteredAnket.length > 0 ? (
        <div className="space-y-6">
          {filteredAnket.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-2 sm:grid-cols-5 grid-rows-3 sm:grid-rows-2 gap-3.5 p-3 rounded-2xl border bg-[#1b1b1b]"
            >
              {/* Аватар */}
              <div className="flex flex-col items-center justify-center">
                <img
                  className={`rounded-full object-cover w-[75px] h-[75px] sm:w-[155px] sm:h-[155px] p-1 ${
                    item.anketActivation
                      ? "border-2 border-[#F6C86A]"
                      : "border-2 border-[#b4082d]"
                  }`}
                  src={getImageUrl(item.image)}
                  alt={`${item.name || "Пользователь"}`}
                />
              </div>

              {/* Данные пользователя */}
              <UserInfo label="Имя" value={item.name} />
              <UserInfo label="Возраст" value={item.age} />
              <UserInfo label="Телефон" value={item.tel} />

              {/* Комментарий */}
              <div className="col-span-2 sm:col-span-3 bg-[#313131] rounded-xl p-2.5">
                <span className="text-[#F6C86A]">Комментарий</span>
                <p className="text-white line-clamp-3 mt-1">
                  {item.adminComment || "Нет комментария"}
                </p>
              </div>

              {/* Кнопка */}
              <Link
                href={`anket/${item._id}`}
                className="col-span-2 sm:col-span-1 flex items-center justify-center"
              >
                <button className="bg-[#F6C86A] rounded-[30px] px-5 py-2 hover:bg-[#cba659] transition">
                  Подробнее
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-[#e1bc6f] text-2xl mt-8">Анкет нет</div>
      )}
    </div>
  );
}

// Компонент для отображения информации
function UserInfo({ label, value }) {
  return (
    <div className="text-center">
      <p className="text-white mb-1">{label}</p>
      <p className="text-[#F6C86A]">{value || "-"}</p>
    </div>
  );
}
