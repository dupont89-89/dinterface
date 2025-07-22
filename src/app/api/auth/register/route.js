import { dbConnect } from "@/lib/mongodb";
import User from "../../../../models/User";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    await dbConnect(); // Подключаемся к базе данных

    // Проверяем, существует ли пользователь с таким email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "Пользователь уже существует!" }),
        {
          status: 422,
        }
      );
    }

    // Создаем нового пользователя
    const newUser = new User({ email, password });
    await newUser.save();

    return new Response(JSON.stringify({ message: "Пользователь создан!" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Ошибка регистрации:", error);
    return new Response(JSON.stringify({ message: "Ошибка сервера" }), {
      status: 500,
    });
  }
}
