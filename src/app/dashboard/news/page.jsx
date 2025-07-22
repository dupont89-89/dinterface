"use client";
import { getNews, deleteNews } from "@/app/api-function/news/news";
import formatDate from "@/Component/function/formatDate";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaBinoculars } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function DashboardNews() {
  const [newsData, setNewsData] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [newsToDelete, setNewsToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Загрузка новостей
  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await getNews();
      setNewsData(data);
    };
    fetchNews();
  }, []);

  const reversedNews = [...newsData].reverse();

  const handleDeleteClick = (newsItem) => {
    setNewsToDelete(newsItem);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!newsToDelete) return;

    setIsDeleting(true);
    try {
      await deleteNews(newsToDelete._id);
      setNewsData(newsData.filter((item) => item._id !== newsToDelete._id));
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="my-8">
      {/* Модальное окно подтверждения удаления */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#1b1b1b] p-6 rounded-lg max-w-md w-full">
            <h3 className="text-[#DAC394] text-xl mb-4">
              Подтверждение удаления
            </h3>
            <p className="text-white mb-6">
              Вы уверены, что хотите удалить новость "{newsToDelete?.title}"?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-white hover:bg-gray-700 rounded"
              >
                Отмена
              </button>
              <button
                onClick={confirmDelete}
                disabled={isDeleting}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
              >
                {isDeleting ? "Удаление..." : "Удалить"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Остальной код */}
      <div className="grid grid-cols-[1fr_auto] items-center justify-between">
        <div>
          <h1 className="text-[#DAC394] text-left text-3xl">Новости</h1>
        </div>
        <div>
          <Link
            className="bg-[#e1bc6f] text-[#454141] inline-block rounded-[30px] px-5 py-2 sm:px-10 sm:py-4 sm:text-base text-sm hover:bg-[#cba659]"
            href={`/dashboard/news/add-news`}
          >
            Добавить новость
          </Link>
        </div>
      </div>

      {reversedNews.length > 0 ? (
        <div className="grid grid-cols-1 gap-3.5 min-w-full mt-8">
          {reversedNews.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-[1fr_auto_auto_auto] gap-5 p-3 rounded-2xl border bg-[#1b1b1b]"
            >
              <div>
                <div className="mb-1.5">
                  <Link
                    className="block text-[#e1bc6f] text-base hover:text-[#cba659]"
                    href={`/news/${item.slug}`}
                  >
                    {item.title}
                  </Link>
                </div>
                <div className="text-[#fff] text-sm">{item.minDescription}</div>
                <div className="text-[#5B5955] text-base leading-19px">
                  {formatDate(item.createdAt)}
                </div>
              </div>
              <div>
                <Link href={`/dashboard/news/edit-news/${item._id}`}>
                  <BiEditAlt
                    size={20}
                    className="text-[#e1bc6f] hover:text-[#cba659]"
                  />
                </Link>
              </div>
              <div>
                <Link href={`/news/${item.slug}`}>
                  <FaBinoculars
                    size={20}
                    className="text-[#e1bc6f] hover:text-[#cba659]"
                  />
                </Link>
              </div>
              <div>
                <button onClick={() => handleDeleteClick(item)}>
                  <MdDelete
                    size={20}
                    className="text-[#e1bc6f] hover:text-[#cba659]"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-[#e1bc6f] text-2xl">Новостей нет</div>
      )}
    </div>
  );
}
