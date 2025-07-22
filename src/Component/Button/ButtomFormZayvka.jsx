"use client";
import { useRouter } from "next/navigation";

export default function ButtonFormZayvka(props) {
  const router = useRouter();

  const openPopup = () => {
    // Корректная передача параметра scroll: false
    router.push("?popup=open", { scroll: false });
  };

  return (
    <button
      onClick={openPopup}
      className="hover:bg-[#f6c86a] h-[45px] text-[#171717] text-sm bg-[#FFFCF6] text-[rgba(20, 20, 20, 1)] w-full rounded-l-[30px] rounded-r-[30px]"
    >
      Оставить заявку
    </button>
  );
}
