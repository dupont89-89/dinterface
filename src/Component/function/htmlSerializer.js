export const deserializeFromHtml = (html) => {
  // Простая реализация - можно использовать более сложные парсеры
  if (!html) return [{ type: "paragraph", children: [{ text: "" }] }];

  const parsed = new DOMParser().parseFromString(html, "text/html");
  const elements = parsed.body.childNodes;

  return Array.from(elements).map((element) => {
    const type =
      element.tagName.toLowerCase() === "h2"
        ? "heading-two"
        : element.tagName.toLowerCase() === "blockquote"
        ? "block-quote"
        : "paragraph";

    return {
      type,
      children: [{ text: element.textContent }],
    };
  });
};
