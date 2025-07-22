import React, { useMemo, useCallback } from "react";
import {
  createEditor,
  Editor,
  Transforms,
  Range,
  Element as SlateElement,
} from "slate";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatListBulleted,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdFormatAlignJustify,
  MdFormatQuote,
  MdAddLink,
} from "react-icons/md";
import { BsTypeH2 } from "react-icons/bs";

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

const withEmptyParagraphs = (editor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = (entry) => {
    const [node, path] = entry;

    // Удаляем пустые параграфы, кроме последнего
    if (SlateElement.isElement(node) && node.type === "paragraph") {
      const isEmpty = Editor.isEmpty(editor, node);
      const isLast = path[path.length - 1] === editor.children.length - 1;

      if (isEmpty && !isLast) {
        Transforms.removeNodes(editor, { at: path });
        return;
      }
    }

    // Сохраняем стандартное поведение нормализации
    normalizeNode(entry);
  };

  return editor;
};

const insertLink = (editor, url) => {
  if (editor.selection) {
    wrapLink(editor, url);
  }
};

const withInlines = (editor) => {
  const { isInline } = editor;

  editor.isInline = (element) => {
    return element.type === "link" ? true : isInline(element);
  };

  return editor;
};

const wrapLink = (editor, url) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  const link = {
    type: "link",
    url,
    children: isCollapsed ? [{ text: url }] : [],
  };

  if (isCollapsed) {
    Transforms.insertNodes(editor, link);
  } else {
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, { edge: "end" });
  }
};

const unwrapLink = (editor) => {
  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link",
  });
};

const isLinkActive = (editor) => {
  const [link] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link",
  });
  return !!link;
};

const TextEditor = (props) => {
  const { value, onChange } = props;
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withEmptyParagraphs(withInlines(withReact(createEditor()))),
    []
  );

  // Обработчик изменений в редакторе
  const handleChange = (newValue) => {
    onChange(newValue); // Передаем новое значение наружу
  };

  return (
    <div className="bg-white p-5">
      <Slate editor={editor} initialValue={value} onChange={handleChange}>
        <BlockButton format="heading-two" icon={<BsTypeH2 />} />
        <MarkButton format="bold" icon={<MdFormatBold />} />
        <MarkButton format="italic" icon={<MdFormatItalic />} />
        <MarkButton format="underline" icon={<MdFormatUnderlined />} />
        <BlockButton format="link" icon={<MdAddLink />} />
        <BlockButton format="block-quote" icon={<MdFormatQuote />} />
        <BlockButton format="bulleted-list" icon={<MdFormatListBulleted />} />
        <BlockButton format="left" icon={<MdFormatAlignLeft />} />
        <BlockButton format="center" icon={<MdFormatAlignCenter />} />
        <BlockButton format="right" icon={<MdFormatAlignRight />} />
        <BlockButton format="justify" icon={<MdFormatAlignJustify />} />
        <Editable
          className="text-editor"
          style={{
            minHeight: "200px",
            height: "400px",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "4px",
            marginTop: "10px",
            overflowY: "auto",
          }}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          spellCheck
          autoFocus
          onKeyDown={(event) => {
            // Обработка пробела
            if (event.key === " ") {
              const [match] = Editor.nodes(editor, {
                match: (n) =>
                  !Editor.isEditor(n) &&
                  SlateElement.isElement(n) &&
                  n.type !== "paragraph" &&
                  n.type !== "link", // Исключаем ссылки из обработки
              });

              if (match) {
                event.preventDefault();
                Transforms.setNodes(
                  editor,
                  { type: "paragraph" },
                  { match: (n) => Editor.isBlock(editor, n) }
                );
                return;
              }
            }

            // Обработка Enter внутри ссылки
            if (event.key === "Enter" && isLinkActive(editor)) {
              unwrapLink(editor);
            }

            // Обработка пробела после ссылки
            if (event.key === " " && isLinkActive(editor)) {
              const { selection } = editor;
              if (selection && Range.isCollapsed(selection)) {
                const [link] = Editor.nodes(editor, {
                  match: (n) =>
                    !Editor.isEditor(n) &&
                    SlateElement.isElement(n) &&
                    n.type === "link",
                });

                if (link) {
                  // Выходим из ссылки
                  Transforms.move(editor, { distance: 1 });
                  // Вставляем пробел
                  editor.insertText(" ");
                  event.preventDefault();
                  return;
                }
              }
            }
          }}
        />
      </Slate>
    </div>
  );
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  );

  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote
          style={style}
          {...attributes}
          className='before:content-["❝"] before:pr-1 before:text-2xl before:font-semibold after:content-["❞"] after:pl-1 after:text-2xl after:font-semibold'
        >
          <span className="bg-gray-100 p-2 rounded">{children}</span>
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes} className="list-disc">
          {children}
        </ul>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes} className="font-semibold text-xl">
          {children}
        </h2>
      );
    case "link":
      return (
        <a
          href={element.url}
          {...attributes}
          style={{ ...style, display: "inline" }}
          className="text-[#DAC394] hover:text-[#ffe2a8] underline"
          onClick={(e) => e.preventDefault()} // Чтобы не переходить по ссылке в режиме редактирования
        >
          {children}
        </a>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();

  if (format === "link") {
    return (
      <button
        className={`p-2 text-xl rounded mx-1 ${
          isLinkActive(editor) ? "bg-gray-300" : ""
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          const url = window.prompt("Enter the URL of the link:");
          if (!url) return;
          insertLink(editor, url);
        }}
      >
        {icon}
      </button>
    );
  }

  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );

  return (
    <button
      className={`p-2 text-xl rounded mx-1 ${isActive ? "bg-gray-300" : ""}`}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </button>
  );
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  const isActive = isMarkActive(editor, format);
  return (
    <button
      className={`p-2 text-xl rounded mx-1 ${isActive ? "bg-gray-300" : ""}`}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </button>
  );
};

const initialValue = [
  {
    type: "paragraph",
    align: "left",
    children: [{ text: "" }],
  },
];

export default TextEditor;
