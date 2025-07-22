import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ items }) => {
  if (!items?.length) return null;

  return (
    <nav aria-label="Хлебные крошки" className="py-4 relative">
      {/* Обертка для скрытия полосы прокрутки */}
      <div className="relative overflow-hidden">
        {/* Контейнер с прокруткой */}
        <ol className="flex flex-nowrap overflow-x-auto pb-3 -mb-3 gap-2 items-center text-sm scroll-smooth whitespace-nowrap">
          <li className="flex-shrink-0">
            <Link
              href="/"
              className="block text-[#e1bc6f] text-base hover:text-[#cba659]"
            >
              Главная
            </Link>
          </li>
          {items.map((item, i) => (
            <React.Fragment key={item.href}>
              <span className="text-gray-400 flex-shrink-0">/</span>
              <li className="flex-shrink-0">
                {i === items.length - 1 ? (
                  <span className="text-[#e1bc6f] text-base hover:text-[#cba659]">
                    {item.title}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-[#e1bc6f] text-base hover:text-[#cba659]"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
