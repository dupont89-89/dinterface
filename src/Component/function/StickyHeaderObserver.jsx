"use client";

import { useLayoutEffect } from "react";

export default function StickyHeaderObserver() {
  useLayoutEffect(() => {
    const header = document.getElementById("sticky-header");
    if (!header) return;

    let lastScroll = 0;
    let ticking = false;

    const updateHeaderState = () => {
      const currentScroll = window.scrollY;
      const shouldStick = currentScroll > 50;

      document.documentElement.style.setProperty(
        "--header-sticky",
        shouldStick ? "1" : "0"
      );

      // Обновляем атрибут напрямую
      document.documentElement.setAttribute(
        "data-sticky",
        shouldStick ? "true" : "false"
      );

      lastScroll = currentScroll;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderState);
        ticking = true;
      }
    };

    // Инициализация
    document.documentElement.style.setProperty("--header-sticky", "0");
    document.documentElement.setAttribute("data-sticky", "false");
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.removeProperty("--header-sticky");
      document.documentElement.removeAttribute("data-sticky");
    };
  }, []);

  return null;
}
