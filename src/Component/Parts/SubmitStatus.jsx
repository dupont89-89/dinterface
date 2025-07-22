import Link from "next/link";
import React from "react";
import { LiaUserPlusSolid } from "react-icons/lia";

export default function SubmitStatus({
  submitStatusForm,
  setSubmitStatus,
  isSubmitting,
}) {
  return (
    <div>
      {/* Лоадер */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-amber-400 mx-auto mb-4"></div>
            <p>Отправляем анкету...</p>
          </div>
        </div>
      )}
      {/* Уведомления */}
      {submitStatusForm === "success" && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 bg-[#1b1b1b] border-1 border-white flex flex-col flex-wrap justify-center items-center px-4 py-4 h-[250px] w-[300px] sm:w-[350px] rounded-2xl z-50">
          <p className="text-[18px] sm:text-[22px] text-[#E6C37A] text-center font-anticva">
            Анкета успешно отправлена!
          </p>
          <LiaUserPlusSolid size={50} className="text-[#E6C37A]" />
          <button
            onClick={() => setSubmitStatus(null)}
            className="absolute top-0 right-0 px-2 py-1 text-2xl text-white"
          >
            ×
          </button>
          "success"
          <Link
            className="text-[#f2e9d6] bg-[#0a0a0a] px-6 py-2 rounded-full"
            href="/"
          >
            На главную
          </Link>
        </div>
      )}

      {submitStatusForm === "error" && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#0a0a0a] flex items-center h-[250px] w-[350px] px-4 py-3 rounded z-50">
          <p className="text-[18px] sm:text-[22px] text-red-700 text-center font-anticva">
            Ошибка при отправке анкеты
          </p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="absolute top-0 right-0 px-2 py-1"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
