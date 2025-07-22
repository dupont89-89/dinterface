import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/",
});

// Добавление новости
export const addNews = async (formData) => {
  try {
    const response = await instance.post("news/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Ошибка при создании новости"
    );
  }
};

// Получение новостей через API
export const getNews = async (params = {}) => {
  try {
    const response = await instance.get("news/get", { params });

    if (!response.data.success) {
      // Создаем объект ошибки с дополнительными свойствами
      const error = new Error(response.data.message);
      error.response = response;
      throw error;
    }

    return response.data;
  } catch (error) {
    // Улучшенная обработка ошибок
    const errorInfo = {
      message: error.response?.data?.message || error.message,
      status: error.response?.status || 500,
    };

    const customError = new Error(errorInfo.message);
    customError.status = errorInfo.status;
    throw customError;
  }
};

// Удаление новости
export const deleteNews = async (id) => {
  try {
    const response = await instance.delete(`news/delete`, {
      params: { id },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Произошла ошибка при удалении";
    console.error("Ошибка при удалении новости:", errorMessage, error);
    throw new Error(errorMessage);
  }
};

// Обновление новости
export const updateNews = async (formData) => {
  try {
    const response = await instance.put("news", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      timeout: 30000,
    });

    if (response.data.success === false) {
      throw new Error(response.data.message || "Ошибка обновления");
    }

    return response.data;
  } catch (error) {
    console.error("Ошибка обновления новости:", {
      message: error.message,
      response: error.response?.data,
    });

    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Произошла ошибка при обновлении новости"
    );
  }
};

// import dbConnect from "@/lib/mongodb";
// import News from "@/models/News";
// import axios from "axios";

// const instance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/",
// });

// export const addNews = async (formData) => {
//   try {
//     // Отправляем данные на сервер
//     const response = await instance.post("news/add", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data", // Указываем тип контента
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw new Error(
//       error.response?.data?.message || "Ошибка при создании новости"
//     );
//   }
// };

// // Серверный вариант (для SSG) - прямое обращение к БД
// async function getNewsFromDB({ type, slug, id } = {}) {
//   try {
//     await dbConnect();

//     let query = {};
//     if (type) query.type = type;
//     if (slug) query.slug = slug;
//     if (id) query._id = id;

//     const news = await News.find(query).sort({ createdAt: -1 }).lean();
//     return { data: news };
//   } catch (error) {
//     console.error("DB News fetch error:", error);

//     // Если база данных недоступна в режиме разработки, возвращаем пустой массив
//     if (process.env.NODE_ENV === "development") {
//       return { data: [] };
//     }

//     throw new Error("Ошибка при получении новостей из БД");
//   }
// }

// // Клиентский вариант (для браузера) - через API
// async function getNewsFromAPI(params = {}) {
//   try {
//     const response = await instance.get("news/get", { params });
//     return response.data;
//   } catch (error) {
//     const errorMessage =
//       error.response?.data?.message ||
//       error.message ||
//       "Ошибка при получении новостей";
//     console.error("API News fetch error:", errorMessage, error);
//     throw new Error(errorMessage);
//   }
// }

// // Умная функция, выбирает вариант автоматически
// export const getNews =
//   typeof window === "undefined" ? getNewsFromDB : getNewsFromAPI;

// export const deleteNews = async (id) => {
//   try {
//     const response = await instance.delete(`news/delete`, {
//       params: { id }, // Передаём ID как query-параметр
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Ошибка при удалении новости:", error);

//     // Генерируем понятное сообщение об ошибке
//     const errorMessage =
//       error.response?.data?.message ||
//       error.message ||
//       "Произошла ошибка при удалении";

//     throw new Error(errorMessage);
//   }
// };

// export const updateNews = async (formData) => {
//   try {
//     const response = await axios.put("/api/news", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       timeout: 30000, // 30 секунд таймаут
//     });

//     if (response.data.success === false) {
//       throw new Error(response.data.message || "Ошибка обновления");
//     }

//     return response.data;
//   } catch (error) {
//     console.error("Ошибка обновления новости:", {
//       message: error.message,
//       response: error.response?.data,
//     });

//     throw new Error(
//       error.response?.data?.message ||
//         error.message ||
//         "Произошла ошибка при обновлении новости"
//     );
//   }
// };
