import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/",
});

// Регистрация нового пользователя
export const regNewUser = async (formData) => {
  try {
    const response = await instance.post("user", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (!response.data.success) {
      throw new Error(response.data.message || "Ошибка сервера");
    }

    return response.data; // Возвращаем только data
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Ошибка при добавлении нового пользователя"
    );
  }
};

// Получение анкет пользователей через API
export async function getUserAnket({ id } = {}) {
  const params = new URLSearchParams();

  if (id) params.append("id", id); // Добавляем id, если он передан
  try {
    const response = await instance.get(`user/anket?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error("API User fetch error:", error);
    return { data: [] };
  }
}

// Обновление анкеты пользователя
export const updateAnketUser = async (anketData) => {
  try {
    const response = await instance.post("user/anket", anketData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Ошибка при обновлении данных пользователя"
    );
  }
};

// Удаление анкеты пользователя
export const deleteUserAnket = async ({ id } = {}) => {
  const params = new URLSearchParams();

  if (id) params.append("id", id); // Добавляем id, если он передан

  try {
    const response = await instance.delete(`/user/anket?${params.toString()}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Ошибка при удалении пользователей";
    console.error("Ошибка запроса пользователей:", errorMessage, error);
    throw new Error(errorMessage);
  }
};

// import axios from "axios";
// import dbConnect from "@/lib/mongodb";
// import User from "@/models/User";

// const instance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/",
// });

// export const regNewUser = async (formData) => {
//   try {
//     const response = await instance.post("user", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     if (!response.data.success) {
//       throw new Error(response.data.message || "Ошибка сервера");
//     }

//     return response.data; // Возвращаем только data
//   } catch (error) {
//     throw new Error(
//       error.response?.data?.message ||
//         "Ошибка при добавлении нового пользователя"
//     );
//   }
// };

// // Серверный вариант (для SSG)
// export async function getUserAnketFromDB() {
//   await dbConnect();
//   try {
//     const users = await User.find({}).select("-password").lean();
//     return { data: users };
//   } catch (error) {
//     console.error("DB User fetch error:", error);
//     return { data: [] };
//   }
// }

// // Клиентский вариант (через API)
// export async function getUserAnketFromAPI() {
//   try {
//     const response = await axios.get("/api/user/anket");
//     return response.data;
//   } catch (error) {
//     console.error("API User fetch error:", error);
//     return { data: [] };
//   }
// }

// // Умная функция для автоматического выбора
// export const getUserAnket =
//   typeof window === "undefined" ? getUserAnketFromDB : getUserAnketFromAPI;

// export const updateAnketUser = async (anketData) => {
//   try {
//     const response = await instance.post("user/anket", anketData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(
//       error.response?.data?.message ||
//         "Ошибка при обновлении данных пользователя"
//     );
//   }
// };

// export const deleteUserAnket = async ({ id } = {}) => {
//   const params = new URLSearchParams();

//   if (id) params.append("id", id); // Добавляем id, если он передан

//   try {
//     const response = await instance.delete(`/user/anket?${params.toString()}`);
//     return response.data;
//   } catch (error) {
//     const errorMessage =
//       error.response?.data?.message ||
//       error.message ||
//       "Ошибка при удалении пользователей";
//     console.error("Ошибка запроса пользователей:", errorMessage, error);
//     throw new Error(errorMessage);
//   }
// };
