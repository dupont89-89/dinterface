import { dbConnect } from "@/lib/mongodb";
import News from "@/models/News";
import { promises as fs } from "fs";
import path from "path";

// Функция для генерации slug
function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\u0400-\u04FF]+/g, "-")
    .replace(/[а-яё]/g, (char) => {
      const ru = {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "y",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "h",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "sch",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
      };
      return ru[char] || char;
    })
    .replace(/[^a-z0-9-]+/g, "")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  await dbConnect();

  try {
    const formData = await request.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const minDescription = formData.get("minDescription");

    // Обработка изображений
    const images = [];
    const files = formData.getAll("images");

    for (const file of files) {
      if (file instanceof File) {
        try {
          const buffer = await file.arrayBuffer();
          const fileName = `${Date.now()}-${file.name}`;
          const filePath = path.join(
            process.cwd(),
            "public/uploads/news",
            fileName
          );

          await fs.writeFile(filePath, Buffer.from(buffer));
          images.push(`/uploads/news/${fileName}`);
        } catch (error) {
          console.error("Ошибка при сохранении файла:", error);
        }
      }
    }

    // Генерация уникального slug
    let slug = generateSlug(title);
    let counter = 1;

    // Проверяем существование slug в базе
    let existingNews = await News.findOne({ slug });

    // Если slug уже существует, добавляем числовой суффикс
    while (existingNews) {
      slug = `${generateSlug(title)}-${counter}`;
      existingNews = await News.findOne({ slug });
      counter++;
    }

    // Создаем новость в базе данных
    const news = new News({
      title,
      slug,
      description,
      minDescription,
      images,
    });

    await news.save();

    return new Response(JSON.stringify({ success: true, data: news }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Ошибка при обработке запроса:", error);

    // Специальная обработка ошибки дубликата slug
    if (error.code === 11000 && error.keyPattern?.slug) {
      return new Response(
        JSON.stringify({
          success: false,
          error:
            "Произошла ошибка при генерации уникального URL. Попробуйте изменить заголовок.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Ошибка при создании новости",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
