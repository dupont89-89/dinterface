import { NextResponse } from "next/server";
import News from "@/models/News";
import path from "path";
import { dbConnect } from "@/lib/mongodb";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function PUT(request) {
  await dbConnect();

  try {
    const formData = await request.formData();
    const id = formData.get("id");
    const title = formData.get("title");
    const minDescription = formData.get("minDescription");
    const description = formData.get("description");
    const files = formData.getAll("images");

    // Безопасный парсинг deletedImages
    const deletedImagesStr = formData.get("deletedImages");
    const deletedImages = deletedImagesStr ? JSON.parse(deletedImagesStr) : [];

    // Валидация
    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID новости обязателен" },
        { status: 400 }
      );
    }

    // 1. Получаем текущую новость
    const newsItem = await News.findById(id);
    if (!newsItem) {
      return NextResponse.json(
        { success: false, message: "Новость не найдена" },
        { status: 404 }
      );
    }

    // 2. Создаем папку для загрузок
    const uploadDir = path.join(process.cwd(), "public/uploads/news");
    await fs.promises.mkdir(uploadDir, { recursive: true });

    // 3. Удаление старых изображений
    const updatedImages = newsItem.images.filter(
      (img) => !deletedImages.includes(img)
    );

    // Физическое удаление файлов
    await Promise.all(
      deletedImages.map(async (imgPath) => {
        try {
          const fullPath = path.join(process.cwd(), "public", imgPath);
          await fs.promises.unlink(fullPath);
        } catch (err) {
          console.error(`Ошибка удаления ${imgPath}:`, err);
        }
      })
    );

    // 4. Загрузка новых изображений
    for (const file of files) {
      if (file && typeof file.arrayBuffer === "function") {
        const buffer = await file.arrayBuffer();
        const ext = path.extname(file.name) || ".jpg";
        const filename = `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}${ext}`;
        const filePath = path.join(uploadDir, filename);

        await fs.promises.writeFile(filePath, Buffer.from(buffer));
        updatedImages.push(`/uploads/news/${filename}`);
      }
    }

    // 5. Обновление документа
    const updatedNews = await News.findByIdAndUpdate(
      id,
      {
        $set: {
          title,
          minDescription,
          description,
          images: updatedImages,
        },
      },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      data: updatedNews,
    });
  } catch (error) {
    console.error("Ошибка обновления:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Внутренняя ошибка сервера",
      },
      { status: 500 }
    );
  }
}
