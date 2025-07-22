import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Используем базовый URL из переменных окружения
});

export const sendMail = async (formData) => {
  try {
    const response = await instance.post("send-mail", formData);
    return response.data;
  } catch (error) {
    console.error("Ошибка при отправке письма:", {
      error: error.response?.data || error.message,
      formData: formData,
    });
    throw new Error(
      error.response?.data?.message || "Ошибка при отправке письма"
    );
  }
};
