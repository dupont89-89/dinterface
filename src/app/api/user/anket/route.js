import { dbConnect } from "@/lib/mongodb";
import User from "../../../../models/User";
import { NextResponse } from "next/server";
import { sendMail } from "@/app/api-function/send-mail/send-mail";

export async function GET(request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id"); // Получаем id из параметров запроса

    let anketData;

    if (id) {
      anketData = await User.findOne({ _id: id });
    } else {
      // Если ничего не передано, возвращаем все анкеты
      anketData = await User.find();
    }

    // Отправляем ответ с анкетами
    return NextResponse.json({ success: true, data: anketData });
  } catch (error) {
    console.error("Ошибка при получении новостей:", error);

    // Логируем полный объект ошибки для отладки
    console.error("Полный объект ошибки:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
      name: error.name,
    });

    return new Response(
      JSON.stringify({ success: false, message: "Ошибка сервера" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function POST(request) {
  await dbConnect();

  try {
    // Получаем данные из anketData
    const formData = await request.formData();
    const id = formData.get("id");
    const anketActivation = formData.get("anketActivation");
    const adminComment = formData.get("adminComment");

    // Проверяем обязательные поля
    if (!id) {
      return NextResponse.json(
        { message: "ID пользователя обязательно" },
        { status: 400 }
      );
    }

    // Подготавливаем объект для обновления
    const updateFields = {};
    if (anketActivation !== null) {
      updateFields.anketActivation = anketActivation === "true";
    }
    if (adminComment !== null) {
      updateFields.adminComment = adminComment;
    }

    // Обновляем пользователя
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { message: "Пользователь не найден" },
        { status: 404 }
      );
    }

    // Отправляем письмо, если активация была изменена на true
    if (anketActivation === "true") {
      try {
        await sendMail({
          name: updatedUser.name,
          email: updatedUser.email,
          key: "account-activated", // Убедитесь, что у вас есть такой шаблон в системе отправки писем
        });
      } catch (emailError) {
        console.error("Ошибка при отправке письма об активации:", emailError);
        // Можно добавить логирование ошибки, но не прерывать выполнение
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        id: updatedUser._id,
        anketActivation: updatedUser.anketActivation,
        adminComment: updatedUser.adminComment,
      },
    });
  } catch (error) {
    console.error("Ошибка обновления анкеты:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Ошибка сервера",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "ID пользователя не указан",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Проверяем существование пользователя
    const user = await User.findById(id);
    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "Пользователь не найден" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Удаляем пользователя
    const deletedUser = await User.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Пользователь успешно удален",
      data: deletedUser,
    });
  } catch (error) {
    console.error("Ошибка при удалении пользователя:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Ошибка при удалении пользователя",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
