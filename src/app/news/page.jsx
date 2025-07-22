import React from "react";
import { getNews } from "../api-function/news/news";
import NewsCartListingContainer from "@/Component/News/NewsCartListingContainer";

export default async function News(props) {
  const newsData = await getNews();

  return (
    <div className="container max-w-screen-xl my-[70px]">
      <div>
        <h1 className="font-anticva text-[38px] text-[#E6C37A] text-center">
          Новости
        </h1>
      </div>
      <div className="mt-[50px]">
        <NewsCartListingContainer news={newsData?.data || []} />
      </div>
    </div>
  );
}
