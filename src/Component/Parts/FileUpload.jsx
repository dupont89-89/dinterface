"use client";
import React, { useState, useRef } from "react";

const FileUpload = ({
  onFileSelect = () => {}, // Значение по умолчанию
  multiple = true,
  accept = "image/*", // По умолчанию принимаем изображения
  className,
  setFormData, // Передаем setFormData напрямую
}) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);
  const [error, setError] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]); // Состояние для хранения загруженных файлов

  // Обработка событий drag
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Обработка события drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;

    // Проверка, есть ли файлы
    if (!files || files.length === 0) {
      setError("Файлы не добавлены.");
      return;
    }

    // Если multiple=false и выбрано больше одного файла
    if (!multiple && files.length > 1) {
      setError("Вы не можете добавить более одного файла.");
      return;
    }

    // Проверка типов файлов
    if (accept) {
      const acceptedTypes = accept.split(",");
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Проверка MIME-типа файла
        const isValidFileType = acceptedTypes.some((type) => {
          const regex = new RegExp(type.replace("*", ".*")); // Преобразуем 'image/*' в 'image/.*'
          return regex.test(file.type);
        });

        if (!isValidFileType) {
          setError(
            `Неправильный формат файла: ${file.name}. Разрешенный тип: ${accept}`
          );
          return;
        }
      }
    }

    // Если всё в порядке, сбрасываем ошибку и передаем файлы
    setError(null);
    onFileSelect(files);

    // Сохраняем файлы для отображения
    const filesArray = Array.from(files);
    setUploadedFiles((prevFiles) =>
      multiple ? [...prevFiles, ...filesArray] : [filesArray[0]]
    );

    // Обновляем состояние images в родительском компоненте
    if (typeof setFormData === "function") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: multiple
          ? [...(prevFormData.images || []), ...filesArray]
          : [filesArray[0]],
      }));
    }
  };

  // Обработка выбора файлов через input
  const handleChange = (e) => {
    if (e.target.files && typeof onFileSelect === "function") {
      const files = e.target.files;
      onFileSelect(files);

      // Сохраняем файлы для отображения
      const filesArray = Array.from(files);
      setUploadedFiles((prevFiles) =>
        multiple ? [...prevFiles, ...filesArray] : [filesArray[0]]
      );

      // Обновляем состояние images в родительском компоненте
      if (typeof setFormData === "function") {
        setFormData((prevFormData) => ({
          ...prevFormData,
          images: multiple
            ? [...(prevFormData.images || []), ...filesArray]
            : [filesArray[0]],
        }));
      }
    }
  };

  // Открытие диалога выбора файлов
  const triggerFileSelect = () => {
    inputRef.current?.click();
  };

  // Удаление файла из списка
  const handleRemoveFile = (index) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    if (typeof setFormData === "function") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: prevFormData.images.filter((_, i) => i !== index),
      }));
    }
  };

  return (
    <>
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={`${className} border-2 border-dashed p-6 rounded-lg text-center cursor-pointer transition-colors ${
          dragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 bg-gray-100"
        }`}
        onClick={triggerFileSelect}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
        />
        <p className="text-gray-500">
          {multiple
            ? "Перетащите ваши изображения или кликните для выбора"
            : "Drag & Drop an image here or click to upload"}
        </p>
        {accept && (
          <p className="text-xs text-gray-400 mt-2">
            Разрешено загружать: {accept}
          </p>
        )}
      </div>

      {/* Отображение загруженных изображений */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg text-white font-semibold mb-2">
            Добавленные фото для новости:
          </h3>
          <div className="flex flex-wrap gap-4">
            {uploadedFiles.map((file, index) => {
              // Проверка, что file является объектом File
              if (!(file instanceof File)) {
                return null; // Пропускаем некорректные файлы
              }

              return (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(file)} // Создаем URL для предпросмотра
                    alt={`Загружено ${index + 1}`}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    &times;
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Отображение ошибок */}
      {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
    </>
  );
};

export default FileUpload;
