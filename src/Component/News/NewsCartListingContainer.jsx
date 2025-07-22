import React from "react";
import NewsCartListing from "./NewsCartListing";

export default function NewsCartListingContainer({ news }) {
  // Создаем копию массива и переворачиваем его
  const reversedNews = [...news].reverse();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 min-w-full md:min-w-max lg:min-w-full">
      {reversedNews.map((item) => (
        <NewsCartListing key={item._id} news={item} />
      ))}
    </div>
  );
}
