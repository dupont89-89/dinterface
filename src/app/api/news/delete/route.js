import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import News from "@/models/News";

export async function DELETE(request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id"); // Получаем id новости для удаления

    if (!id) {
      return new Response(
        JSON.stringify({ success: false, message: "Не указан ID новости" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Удаляем новость по ID
    const deletedNews = await News.findByIdAndDelete(id);

    if (!deletedNews) {
      return new Response(
        JSON.stringify({ success: false, message: "Новость не найдена" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Новость успешно удалена",
      data: deletedNews,
    });
  } catch (error) {
    console.error("Ошибка при удалении новости:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Ошибка сервера при удалении",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
