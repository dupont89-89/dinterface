"use client";
import { addNews } from "@/app/api-function/news/news";
import FileUpload from "@/Component/Parts/FileUpload";
import TextEditor from "@/Component/Parts/TextEditor";
import Link from "next/link";
import React, { useState } from "react";

export default function AddNews() {
  const [formData, setFormData] = useState({
    title: "",
    description: [
      {
        type: "paragraph",
        children: [{ text: "" }],
      },
    ],
    images: [],
    minDescription: "",
  });

  // Обработчик изменения текстовых полей
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.title.trim()) {
      throw new Error("Заголовок не может быть пустым");
    }
    if (!formData.description || !Array.isArray(formData.description)) {
      throw new Error("Описание новости не может быть пустым");
    }

    const serializeToHtml = (nodes) => {
      if (!nodes) return "";

      return nodes
        .map((node) => {
          // Обработка текстовых узлов
          if (node.text) {
            let text = node.text.trim(); // Добавляем trim() для удаления пробелов
            if (!text) return ""; // Пропускаем пустые текстовые узлы

            if (node.bold) text = `<strong>${text}</strong>`;
            if (node.italic) text = `<em>${text}</em>`;
            if (node.underline) text = `<u>${text}</u>`;
            return text;
          }

          // Рекурсивная обработка дочерних элементов
          const children = serializeToHtml(node.children);
          const align = node.align ? ` style="text-align:${node.align}"` : "";

          // Улучшенная проверка на пустоту
          const isEmpty =
            !children || children.replace(/<[^>]+>/g, "").trim() === ""; // Удаляем все теги и проверяем текст

          // Пропускаем пустые узлы
          if (isEmpty && node.type === "paragraph") return "";
          if (isEmpty && node.type === "list-item") return "";

          // Обработка разных типов узлов
          switch (node.type) {
            case "heading-two":
              return `<h2${align}>${children}</h2>`;
            case "block-quote":
              return `<blockquote${align}>${children}</blockquote>`;
            case "bulleted-list":
              return children ? `<ul${align}>${children}</ul>` : "";
            case "list-item":
              return `<li${align}>${children}</li>`;
            case "link":
              return children
                ? `<a href="${node.url}"${align}>${children}</a>`
                : "";
            default:
              return `<p${align}>${children}</p>`;
          }
        })
        .filter(Boolean) // Удаляем пустые строки
        .join("");
    };

    // Используйте вместо slateToHtml:
    const htmlDescription = serializeToHtml(formData.description);

    // Создаем FormData для отправки
    const formDataToSend = new FormData();

    // Добавляем текстовые данные
    Object.keys(formData).forEach((key) => {
      if (key !== "images" && key !== "description") {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Добавляем описание (уже преобразованное в HTML)
    formDataToSend.append("description", htmlDescription);

    // Добавляем изображения
    if (Array.isArray(formData.images) && formData.images.length > 0) {
      formData.images.forEach((file) => {
        formDataToSend.append("images", file); // Убедитесь, что поле "images" совпадает с сервером
      });
    }

    // Отправляем данные на сервер
    const data = await addNews(formDataToSend);

    if (data.success) {
      alert("Новость успешно добавлена!");
    } else {
      alert("Ошибка при добавлении новости");
    }
  };

  return (
    <div className="my-8">
      <div className="mt-8 grid grid-cols-[1fr_auto] items-center justify-between">
        <div>
          <h1 className="text-[#DAC394] text-left text-xl sm:text-3xl">
            Добавить новость
          </h1>
        </div>
        <div className="sm:flex gap-2 none">
          <Link
            href="../news"
            className="bg-[#147ada] text-white inline-block rounded-[30px] px-10 py-4 sm:text-base text-sm hover:bg-[#cba659]"
          >
            Вернуться
          </Link>
          <button
            onClick={handleSubmit}
            className="bg-[#F6C86A] inline-block rounded-[30px] px-10 py-4 sm:text-base text-sm hover:bg-[#cba659]"
          >
            Опубликовать
          </button>
        </div>
      </div>
      <div className="flex gap-4 flex-col mt-6">
        <label htmlFor="title">
          <span className="text-xl text-white">Название</span>
          <input
            placeholder="до 3-4 слов"
            className="form-input block border-b border-[#5B5955] w-2xs text-base"
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="minDescription">
          <span className="text-xl text-white">Краткое описание</span>
          <input
            placeholder="до 8-10 слов"
            className="form-input block border-b border-[#5B5955] w-[600px] text-base"
            type="text"
            name="minDescription"
            id="minDescription"
            value={formData.minDescription}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="images">
          <span className="text-xl text-white">Фотографии</span>
          <div className="mt-2">
            <FileUpload setFormData={setFormData} />
          </div>
        </label>
        <label htmlFor="text">
          <span className="text-xl text-white">Текст новости</span>
          <div className="mt-2">
            <TextEditor
              required={true}
              value={formData.description}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, description: value }))
              }
            />
          </div>
        </label>
      </div>
      <div className="mt-8 grid grid-cols-[1fr_1fr] items-center justify-between gap-2 sm:hidden">
        <Link
          href="../news"
          className="bg-[#147ada] text-white text-center inline-block rounded-[30px] px-10 py-4 sm:text-base text-sm hover:bg-[#cba659]"
        >
          Вернуться
        </Link>
        <button
          onClick={handleSubmit}
          className="bg-[#F6C86A] inline-block rounded-[30px] px-10 py-4 sm:text-base text-sm hover:bg-[#cba659]"
        >
          Опубликовать
        </button>
      </div>
    </div>
  );
}
