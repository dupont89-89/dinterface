"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function OurWorkMobileTabs({ tabs, searchParams, activeTab }) {
  const router = useRouter();
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Находим текущую активную вкладку
  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  // Фильтруем доступные вкладки (исключая текущую)
  const availableTabs = tabs.filter((tab) => tab.id !== activeTab);

  const handleTabChange = (tabId) => {
    router.push(`?tab=${tabId}`, { scroll: false });
    setIsMobileDropdownOpen(false);
  };

  return (
    <div className="md:hidden mt-10 relative">
      {/* Кнопка выпадающего списка */}
      <div
        className="w-full relative z-20 px-[22px] text-sm py-[11px] border border-[#5B5955] rounded-[30px] bg-transparent text-[#E6C37A] flex justify-between items-center cursor-pointer"
        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
      >
        <span>{currentTab?.label || "Выберите раздел"}</span>
        <svg
          className={`transition-transform duration-200 ${
            isMobileDropdownOpen ? "rotate-180" : ""
          }`}
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 10.5L9 1.5L1 10.5" stroke="#E6C37A" />
        </svg>
      </div>

      {/* Выпадающее меню */}
      {isMobileDropdownOpen && (
        <div className="w-full relative z-10 mt-[-18px] bg-[#0A0A0A] border-b border-l border-r border-[#5B5955] rounded-b shadow-lg">
          {/* Доступные для выбора табы */}
          {availableTabs.map((tab) => (
            <div
              key={tab.id}
              className="cursor-pointer first:pt-[32px] px-[22px] text-sm py-[16px] text-[#FCF8EF] hover:bg-[#1A1A1A] border-b border-[#5B5955] last:border-b-0"
              onClick={(e) => {
                e.preventDefault();
                handleTabChange(tab.id);
              }}
            >
              {tab.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
