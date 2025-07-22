"use client";
import { useRouter } from "next/navigation";

export default function ButtonFormConsultant() {
  const router = useRouter();

  const openPopup = () => {
    router.push("?popup=open", { scroll: false });
  };

  return (
    <button
      className="bg-[#F6C86A] font-anticva text-[#171717] rounded-[30px] px-10 py-4 sm:text-base text-sm hover:bg-[#cba659]"
      onClick={openPopup}
    >
      Получить консультацию
    </button>
  );
}
