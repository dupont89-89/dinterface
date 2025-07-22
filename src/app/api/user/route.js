import { sendMail } from "@/app/api-function/send-mail/send-mail";
import { dbConnect } from "@/lib/mongodb";
import User from "../../../models/User";
import { promises as fs } from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export const config = {
  api: {
    bodyParser: false, // Отключаем встроенный парсер для работы с FormData
  },
};

// Обработка GET-запросов
export async function GET() {
  await dbConnect();

  try {
    const users = await User.find({});
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching users", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// Обработка POST-запросов
export async function POST(request) {
  await dbConnect();

  try {
    const formData = await request.formData();

    // Извлекаем текстовые данные
    const name = formData.get("name");
    const email = formData.get("email");
    const height = formData.get("height");
    const weight = formData.get("weight");
    const age = formData.get("age");
    const tel = formData.get("tel");
    const gender = formData.get("gender");
    const parameters = formData.get("parameters");
    const politik = formData.get("politik");

    // Генерация случайного пароля, если не предоставлен
    const generateRandomPassword = () => {
      const length = 12;
      const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
      let password = "";
      for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return password;
    };

    // Извлекаем файл
    const imageFile = formData.get("image");

    // Сохраняем файл на сервере
    let imagePath = null;
    if (imageFile && imageFile.name) {
      // Добавляем проверку на наличие имени файла
      const fileExtension = path.extname(imageFile.name);
      const uniqueFileName = `${uuidv4()}${fileExtension}`;
      const uploadPath = path.join(
        process.cwd(),
        "public",
        "uploads",
        uniqueFileName
      );

      const buffer = await imageFile.arrayBuffer();
      await fs.writeFile(uploadPath, Buffer.from(buffer));
      imagePath = `/uploads/${uniqueFileName}`;
    }

    // Создаем нового пользователя с сгенерированным паролем
    const newUser = new User({
      name,
      email,
      password: generateRandomPassword(), // Добавляем сгенерированный пароль
      height,
      weight,
      age,
      tel,
      gender,
      parameters,
      politik,
      image: imagePath || "/img/icon/no-avatar.png", // Используем путь по умолчанию, если файл не загружен
    });

    await newUser.save();

    // Отправляем письма (неблокирующая операция)
    const dashboardLink = `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/anket/${newUser._id}`;

    try {
      // Параллельная отправка писем
      await Promise.all([
        sendMail({
          name: newUser.name,
          email: newUser.email,
          tel: newUser.tel,
          key: "reg",
          link: dashboardLink,
        }),
        sendMail({
          name: newUser.name,
          email: newUser.email,
          tel: newUser.tel,
          key: "reg-mail-user",
        }),
      ]);
    } catch (emailError) {
      console.error("Ошибка при отправке одного из писем:", emailError);
      // Продолжаем выполнение, даже если одно из писем не отправилось
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Анкета успешно создана",
        data: {
          ...newUser.toObject(),
          password: undefined,
        },
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error creating user",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
