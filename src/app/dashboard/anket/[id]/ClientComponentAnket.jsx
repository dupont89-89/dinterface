"use client";
import {
  deleteUserAnket,
  getUserAnket,
  updateAnketUser,
} from "@/app/api-function/user/user";
import React, { useState, useRef, useEffect } from "react";
import {
  RiUserForbidLine,
  RiUserFollowLine,
  RiCheckLine,
  RiUserSettingsLine,
  RiLogoutCircleLine,
} from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function ClientComponentAnket({ id, initialData }) {
  const [anketData, setAnketData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    adminComment: "",
    anketActivation: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getUserAnket({ id });
        if (response?.data) {
          setAnketData(response.data);
          setFormData({
            adminComment: response.data.adminComment || "",
            anketActivation: response.data.anketActivation,
          });
        }
      } catch (error) {
        console.error("Error fetching anket data:", error);
        setError("Ошибка загрузки данных анкеты");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Закрытие dropdown при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleUpdate = async (field, value) => {
    try {
      setIsSaving(true);
      setError(null);
      const formData = new FormData();
      formData.append("id", id);
      formData.append(field, value);

      await updateAnketUser(formData);

      setAnketData((prev) => ({ ...prev, [field]: value }));
      setFormData((prev) => ({ ...prev, [field]: value }));

      // Показываем успешное сохранение на 3 секунды
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error(`Error updating ${field}:`, error);
      setError(`Ошибка при сохранении ${field}`);
    } finally {
      setIsSaving(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMenuItemClick = (action) => {
    if (action === "delete_user") {
      setShowDeleteModal(true);
    }
    setDropdownOpen(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!anketData) {
    return (
      <div className="text-red-500 text-center py-10">
        {error || "Ошибка загрузки данных"}
      </div>
    );
  }

  const confirmDelete = async () => {
    if (!id) return;

    setIsDeleting(true);
    try {
      const response = await deleteUserAnket({ id });

      if (response.success) {
        setShowDeleteModal(false);
        // Редирект с небольшим таймаутом для UX
        setTimeout(() => {
          router.push("/dashboard/anket");
        }, 500);
      } else {
        throw new Error(response.message || "Ошибка при удалении");
      }
    } catch (error) {
      console.error("Ошибка при удалении:", error);
      alert(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="my-8">
        {/* Модальное окно подтверждения удаления */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#1b1b1b] p-6 rounded-lg max-w-md w-full">
              <h3 className="text-[#DAC394] text-xl mb-4">
                Подтверждение удаления
              </h3>
              <p className="text-white mb-6">
                Вы уверены, что хотите удалить пользователя "{anketData.name}"?
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
        <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_auto] mb-6 gap-4 sm:gap-0">
          <div className="flex items-center gap-3 order-1 sm:order-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={formData.anketActivation}
                onChange={(e) =>
                  handleUpdate("anketActivation", e.target.checked)
                }
                disabled={isSaving}
              />
              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-400 peer-disabled:opacity-50"></div>
            </label>
            <div className="min-w-[270px]">
              {formData.anketActivation ? (
                <span className="flex justify-center gap-1 bg-amber-400 px-4 py-2 rounded-xl">
                  <RiUserFollowLine size={20} className="text-[#1b1b1b]" />{" "}
                  Профиль активирован
                </span>
              ) : (
                <span className="flex justify-center gap-1 bg-red-700 px-4 py-2 rounded-xl text-white">
                  <RiUserForbidLine size={20} className="text-white" /> Профиль
                  не активирован
                </span>
              )}
            </div>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="bg-[#1B1B1B] group hover:bg-[#f2e9d6] p-2 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <RiUserSettingsLine
                  className="text-[#f2e9d6] group-hover:text-[#1B1B1B]"
                  size={20}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#1B1B1B] rounded-md shadow-lg z-10 border border-[#333]">
                  <div className="py-1">
                    <button
                      onClick={() => handleMenuItemClick("delete_user")}
                      className="flex items-center px-4 py-2 text-sm text-[#f2e9d6] hover:bg-[#333] w-full text-left"
                    >
                      <RiLogoutCircleLine className="mr-2" />
                      Удалить пользователя
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row content-center text-[#DAC394] text-3xl order-2 sm:order-1">
            <h1>{anketData.name},</h1>
            <span className="ml-1">{anketData.age} лет</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <img
              className={`w-full ${
                anketData.gender === "women"
                  ? "sm:h-[613px] h-[425px]"
                  : "sm:h-[578px] h-[425px]"
              } object-cover rounded-2xl`}
              src={anketData.image}
              alt={anketData.name}
            />
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-[#DAC394] text-2xl mb-3">Контакты</h2>
              <div className="text-[#F2E9D6] text-xl space-y-2">
                <div>
                  <span className="font-semibold">Email: </span>
                  <a
                    href={`mailto:${anketData.email}`}
                    className="hover:underline"
                  >
                    {anketData.email}
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Телефон: </span>
                  <a href={`tel:${anketData.tel}`} className="hover:underline">
                    {anketData.tel}
                  </a>
                </div>
              </div>
              <hr className="border-[#333] my-4" />
            </div>

            <div>
              <h2 className="text-[#DAC394] text-2xl mb-3">Данные</h2>
              <div className="text-[#F2E9D6] text-xl space-y-2">
                <div>
                  <span className="font-semibold">Рост:</span>{" "}
                  {anketData.height} см
                </div>
                <div>
                  <span className="font-semibold">Вес:</span> {anketData.weight}{" "}
                  кг
                </div>
                {anketData.gender === "women" && (
                  <div>
                    <span className="font-semibold">Параметры:</span>{" "}
                    {anketData.parameters} см
                  </div>
                )}
              </div>
              <hr className="border-[#333] my-4" />
              <div>
                <h2 className="text-[#DAC394] text-2xl mb-3">
                  Комментарий администратора
                </h2>
                <textarea
                  className="bg-[#1b1b1b] text-[#F2E9D6] w-full h-48 rounded-2xl p-4 resize-none"
                  value={formData.adminComment}
                  onChange={(e) =>
                    setFormData({ ...formData, adminComment: e.target.value })
                  }
                  onBlur={() =>
                    handleUpdate("adminComment", formData.adminComment)
                  }
                  disabled={isSaving}
                  placeholder="Введите комментарий..."
                />

                <div className="flex flex-col sm:flex-row flex-wrap items-start gap-3 mt-3">
                  <button
                    onClick={() =>
                      handleUpdate("adminComment", formData.adminComment)
                    }
                    disabled={
                      isSaving ||
                      formData.adminComment === anketData.adminComment
                    }
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                      isSaving ||
                      formData.adminComment === anketData.adminComment
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-[#DAC394] hover:bg-amber-400 text-[#1b1b1b]"
                    }`}
                  >
                    {isSaving ? (
                      <span className="flex items-center gap-2">
                        <span className="loading text-white loading-spinner loading-xs"></span>
                        Сохранение...
                      </span>
                    ) : (
                      "Сохранить комментарий"
                    )}
                  </button>

                  {saveSuccess && (
                    <div className="flex items-center gap-2 text-[#d2c9b7] text-base font-semibold">
                      <RiCheckLine size={20} />
                      <span>Сохранено!</span>
                    </div>
                  )}

                  {error && <div className="text-red-400">{error}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
