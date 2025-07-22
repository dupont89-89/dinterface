"use client";
import { use } from "react";
import { getNews, updateNews } from "@/app/api-function/news/news";
import FileUpload from "@/Component/Parts/FileUpload";
import TextEditor from "@/Component/Parts/TextEditor";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { deserializeFromHtml } from "@/Component/function/htmlSerializer";

export default function EditNews({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: [{ type: "paragraph", children: [{ text: "" }] }],
    images: [],
    minDescription: "",
    existingImages: [], // Текущие изображения (могут изменяться)
    initialImages: [], // Исходные изображения (не изменяются)
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await getNews({ id: id });

        const description = data.description
          ? deserializeFromHtml(data.description)
          : [{ type: "paragraph", children: [{ text: "" }] }];

        setFormData({
          title: data.title || "",
          description,
          minDescription: data.minDescription || "",
          existingImages: data.images || [],
          initialImages: data.images || [], // Сохраняем исходные изображения
          images: [],
        });
      } catch (error) {
        console.error("Ошибка загрузки новости:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.title.trim()) {
      alert("Заголовок не может быть пустым");
      return;
    }

    try {
      const formDataToSend = new FormData();

      // Безопасное формирование deletedImages
      const deletedImages = formData.initialImages.filter(
        (img) => !formData.existingImages.includes(img)
      );

      formDataToSend.append("deletedImages", JSON.stringify(deletedImages));

      // Добавляем текстовые данные
      formDataToSend.append("id", id);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("minDescription", formData.minDescription);
      formDataToSend.append(
        "description",
        serializeToHtml(formData.description)
      );

      // Добавляем новые изображения
      formData.images.forEach((file) => {
        formDataToSend.append("images", file);
      });

      formDataToSend.append("deletedImages", JSON.stringify(deletedImages));

      const { success } = await updateNews(formDataToSend);

      if (success) {
        alert("Новость успешно обновлена!");
        router.push("/dashboard/news");
      }
    } catch (error) {
      alert(error.message || "Ошибка при обновлении новости");
      console.error("Ошибка при обновлении:", error);
    }
  };

  const handleImageDelete = (imageUrl) => {
    setFormData((prev) => ({
      ...prev,
      existingImages: prev.existingImages.filter((img) => img !== imageUrl),
    }));
  };

  if (isLoading) {
    return <div className="text-white">Загрузка...</div>;
  }

  return (
    <div className="my-8">
      <div className="mt-8 grid sm:grid-cols-[1fr_auto] grid-cols-[1fr] items-center justify-between">
        <div>
          <h1 className="text-[#DAC394] text-left text-xl sm:text-3xl">
            Редактировать новость
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
            Сохранить изменения
          </button>
        </div>
      </div>

      <div className="flex gap-4 flex-col mt-6">
        <label htmlFor="title">
          <span className="text-xl text-white">Название</span>
          <input
            placeholder="до 3-4 слов"
            className="form-input block border-b border-[#5B5955] w-full sm:w-2xs text-base"
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
            className="form-input block border-b border-[#5B5955] w-full sm:w-[600px] text-base"
            type="text"
            name="minDescription"
            id="minDescription"
            value={formData.minDescription}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="images">
          <span className="text-xl text-white">Фотографии</span>

          {/* Показ существующих изображений */}
          {formData.existingImages.length > 0 && (
            <div className="mt-2 mb-4">
              <h3 className="text-white mb-2">Текущие изображения:</h3>
              <div className="flex flex-wrap gap-2">
                {formData.existingImages.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={img}
                      alt={`Изображение ${index + 1}`}
                      className="h-24 object-cover rounded"
                    />
                    <button
                      onClick={() => handleImageDelete(img)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Загрузка новых изображений */}
          <div className="mt-2">
            <FileUpload setFormData={setFormData} multiple />
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
      <div className="mt-8 grid grid-cols-[1fr_auto] items-center justify-between gap-2 sm:hidden">
        <Link
          href="../news"
          className="bg-[#147ada] text-white inline-block text-center rounded-[30px] px-5 py-2 sm:px-10 sm:py-4 sm:text-base text-sm hover:bg-[#cba659]"
        >
          Вернуться
        </Link>
        <button
          onClick={handleSubmit}
          className="bg-[#F6C86A] inline-block rounded-[30px] text-center px-5 py-2 sm:px-10 sm:py-4 sm:text-base text-sm hover:bg-[#cba659]"
        >
          Сохранить изменения
        </button>
      </div>
    </div>
  );
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
