import React from "react";
import formatDate from "../function/formatDate";
import Link from "next/link";

export default function NewsCartListing({ news }) {
  const date = formatDate(news.createdAt);

  return (
    <article>
      <div>
        <Link href={`/news/${news.slug}`}>
          <img
            className="rounded-[10px] w-full lg:h-[240px] h-[240px] object-cover"
            src={news.images[0]}
            alt={news.title}
          />
        </Link>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div>
          <h3 className="text-[#DAC394] text-lg">{news.title}</h3>
        </div>
        <div className="text-[#5B5955] text-base leading-19px">{date}</div>
      </div>
      <div className="text-[#FFFCF6] text-base leading-19px text-left mt-4">
        {news.minDescription}
      </div>
      <div className="text-left">
        <Link
          className="text-[#DAC394] hover:text-[#ffe2a8] underline text-base leading-19px"
          href={`/news/${news.slug}`}
        >
          Подробнее
        </Link>
      </div>
    </article>
  );
}
