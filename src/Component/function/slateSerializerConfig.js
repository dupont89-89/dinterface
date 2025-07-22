const withAlignment = (tag, el, children) => {
  const align = el.align ? ` style="text-align:${el.align}"` : "";
  return `<${tag}${align}>${children}</${tag}>`;
};

// Функция для проверки пустого параграфа
const isEmptyParagraph = (children) => {
  return (
    !children ||
    children.trim() === "" ||
    children === "<br>" ||
    children === "<br/>"
  );
};

export const config = {
  elementTypes: {
    // Блоки
    paragraph: (el, children) => {
      if (isEmptyParagraph(children)) {
        return ""; // Возвращаем пустую строку вместо пустого параграфа
      }
      return withAlignment("p", el, children);
    },
    "heading-two": (el, children) => withAlignment("h2", el, children),
    "block-quote": (el, children) => withAlignment("blockquote", el, children),

    // Списки
    "bulleted-list": (el, children) => withAlignment("ul", el, children),
    "list-item": (el, children) => withAlignment("li", el, children),

    // Ссылки
    link: (el, children) =>
      `<a href="${el.url}"${
        el.align ? ` style="text-align:${el.align}"` : ""
      }>${children}</a>`,
  },

  textTypes: {
    bold: (text) => `<strong>${text}</strong>`,
    italic: (text) => `<em>${text}</em>`,
    underline: (text) => `<u>${text}</u>`,
  },

  defaultBlockType: "paragraph",
};
