import { getNews } from "@/app/api-function/news/news";
import icons from "@/app/icons";
import formatDate from "@/Component/function/formatDate";
import Breadcrumbs from "@/Component/Parts/Breadcrumbs";
import { ImageGalleryPopup } from "@/Component/Parts/ImageGalleryPopup";
import { notFound } from "next/navigation";

// Явно указываем динамическое поведение
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const response = await getNews({ slug });

    if (!response?.success) {
      return {
        metadataBase: new URL(
          process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
        ),
        title: "Новость не найдена",
        robots: { index: false, follow: false },
      };
    }

    const newsItem = response.data;

    return {
      metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
      ),
      title: `${newsItem.title} - Новости компании`,
      description: newsItem.description?.substring(0, 160) || "",
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/news/${slug}`,
      },
      icons: icons,
      openGraph: {
        title: newsItem.title,
        description: newsItem.description?.substring(0, 160) || "",
        url: `/news/${slug}`,
        images: [
          {
            url: newsItem.images?.[0] || "/icons/wedding-family1200.png",
            width: 1200,
            height: 630,
            alt: newsItem.title,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: newsItem.title,
        description: newsItem.description?.substring(0, 160) || "",
        images: [newsItem.images?.[0] || "/icons/wedding-family1200.png"],
      },
    };
  } catch (error) {
    return {
      metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
      ),
      title: "Ошибка загрузки",
      robots: { index: false, follow: false },
    };
  }
}

export default async function NewsPage({ params }) {
  try {
    const { slug } = params;
    const response = await getNews({ slug });

    if (!response?.success) {
      notFound();
    }

    const newsItem = response.data;
    const descriptionHtml = newsItem.description || "";
    const backgroundImage = newsItem.images?.[0] || "";

    const breadcrumbs = [
      { href: "/news", title: "Новости" },
      { href: `/news/${slug}`, title: newsItem.title },
    ];

    return (
      <div className="container max-w-screen-xl my-[70px]">
        <div
          className="relative h-96 w-full bg-cover bg-center flex flex-col items-center justify-center rounded-2xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
          <div className="relative z-10 px-4 text-center">
            <h1 className="font-anticva text-[38px] text-white">
              {newsItem.title}
            </h1>
            <div className="mt-4 text-xl bg-[#1B1B1B] rounded-sm text-[#f2e9d6] px-3.5 py-2 inline-block">
              {formatDate(newsItem.createdAt)}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {descriptionHtml && (
          <div
            className="my-[50px] text-white news-item-page-text"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        )}

        {newsItem.images?.length > 0 && (
          <ImageGalleryPopup
            images={newsItem.images}
            galleryTitle={`Фотогалерея новости: ${newsItem.title}`}
          />
        )}
      </div>
    );
  } catch (error) {
    if (error?.status === 404) {
      notFound();
    }

    console.error("Error loading news:", error);
    return (
      <div className="container max-w-screen-xl my-[70px] text-center">
        <h1 className="text-2xl font-bold">Ошибка загрузки новости</h1>
        <p>
          Произошла ошибка при загрузке новости. Пожалуйста, попробуйте позже.
        </p>
      </div>
    );
  }
}
