import { dbConnect } from "@/lib/mongodb";
import News from "@/models/News";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const slug = searchParams.get("slug");
    const id = searchParams.get("id");

    let newsData;

    if (slug) {
      newsData = await News.findOne({ slug });
      if (!newsData) {
        return NextResponse.json(
          { success: false, message: "Новость не найдена" },
          { status: 404 }
        );
      }
    } else if (id) {
      newsData = await News.findOne({ _id: id });
      if (!newsData) {
        return NextResponse.json(
          { success: false, message: "Новость не найдена" },
          { status: 404 }
        );
      }
    } else if (type === "new") {
      newsData = await News.find().sort({ createdAt: -1 }).limit(3);
    } else {
      newsData = await News.find();
    }
    return NextResponse.json({ success: true, data: newsData });
  } catch (error) {
    console.error("Ошибка при получении новостей:", error);
    return NextResponse.json(
      { success: false, message: "Ошибка сервера" },
      { status: 500 }
    );
  }
}
