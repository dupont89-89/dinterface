"use client";
import { useState } from "react";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IMaskInput } from "react-imask";
import { BiCheckboxChecked } from "react-icons/bi";
import { regNewUser } from "../api-function/user/user";
import SubmitStatus from "@/Component/Parts/SubmitStatus";
import Link from "next/link";

export default function AddAnket(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatusForm, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [selectedGender, setSelectedGender] = useState(null);
  const [showGrid, setShowGrid] = useState(null);
  const [step, setStep] = useState(1);
  const [anketData, setAnketData] = useState({
    name: "",
    email: "",
    height: "",
    weight: "",
    age: "",
    tel: "",
    gender: "",
    parameters: "",
    politik: false,
    mailPrivacy: false,
    image: null,
    imageUrl: "",
  });

  const handleResetState = () => {
    setSelectedGender(null);
    setShowGrid(null);
    setAnketData({
      name: "",
      email: "",
      height: "",
      weight: "",
      age: "",
      tel: "",
      gender: "",
      parameters: "",
      politik: false, // Сбрасываем чекбокс
      image: null,
    });
  };

  const handleDataChange = async (e) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    const formData = new FormData();
    formData.append("name", anketData.name);
    formData.append("email", anketData.email);
    formData.append("height", anketData.height);
    formData.append("weight", anketData.weight);
    formData.append("age", anketData.age);
    formData.append("tel", anketData.tel);
    formData.append("gender", anketData.gender);
    formData.append("parameters", anketData.parameters);
    formData.append("politik", anketData.politik);
    if (anketData.image) {
      formData.append("image", anketData.image);
    }

    try {
      const result = await regNewUser(formData);

      // Если мы здесь, значит success === true
      setSubmitStatus("success");
      handleResetState();

      // Дополнительно можно показать сообщение из сервера
      console.log("Успех:", result.message);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Ошибка:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAnketData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Создаем временный URL
      setAnketData({ ...anketData, image: file, imageUrl }); // Сохраняем файл и URL
    }
  };

  const handleClick = (gender) => {
    setSelectedGender(gender);
    setAnketData((prevData) => ({
      ...prevData,
      gender: gender,
    }));
    setTimeout(() => setShowGrid(gender), 100);
  };

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
    <div className="form_anket">
      {!showGrid && (
        <div className="grid grid-cols-2 gap-2.5 justify-center mt-2.5 mb-[120px]">
          <div
            onClick={() => handleClick("man")} // Передаём строку 'man'
            className="hover:bg-[#141414] sm:h-[697px] h-[384px] hover:bg-[url(/img/anket/man-active.png)] bg-[url(/img/anket/man.png)] sm:bg-[auto_512px] bg-[auto_293px] bg-no-repeat p-[15px] sm:p-[29px] bg-center rounded-[16px] sm:rounded-[40px] border border-[#5B5955] cursor-pointer"
          >
            <h2 className="font-anticva text-lg sm:text-3xl text-[#E6C37A] text-center">
              Я мужчина
            </h2>
          </div>
          <div
            onClick={() => handleClick("women")} // Передаём строку 'woman'
            className="hover:bg-[#141414] sm:h-[697px] h-[384px] hover:bg-[url(/img/anket/women-active.png)] bg-[url(/img/anket/women.png)] sm:bg-[auto_513px] bg-[auto_293px] bg-no-repeat p-[15px] sm:p-[29px] bg-center rounded-[16px] sm:rounded-[40px] border border-[#5B5955] cursor-pointer"
          >
            <h2 className="font-anticva text-lg sm:text-3xl text-[#E6C37A] text-center">
              Я женщина
            </h2>
          </div>
        </div>
      )}
      {selectedGender && (
        <>
          <div className="mt-10">
            <h2 className="text-center sm:text-[38px] text-[28px] text-[#E6C37A] font-anticva">
              Добавьте анкету
            </h2>
          </div>
          <div
            className={`mt-10 border border-[#5B5955] rounded-[40px] ${
              step === 3 ? "h-[1010px] sm:h-[600px]" : "h-[1010px] sm:h-[527px]"
            } xl:w-[964px] md:w-[794px] w-full mb-[120px] mx-auto`}
          >
            <div
              className={`grid xl:grid-cols-[1fr_574px]  md:grid-cols-[1fr_471px] grid-cols-[1fr] ${
                step === 3 && "h-[600px]"
              }`}
            >
              <div className="p-[20px] sm:p-[30px] flex flex-col flex-wrap justify-center order-2 sm:order-1">
                <div
                  className={`rounded-[30px] bg-[#141414] md:h-[467px] h-[394px] bg-center sm:bg-[auto_390px] bg-[auto_274px] bg-no-repeat ${
                    selectedGender === "man"
                      ? "bg-[url(/img/anket/man.png)]"
                      : "bg-[url(/img/anket/women.png)]"
                  }`}
                >
                  {anketData.image && (
                    <img
                      className="rounded-[30px] sm:h-[467px] h-full sm:w-[330px] w-full object-cover"
                      src={anketData.imageUrl}
                      alt=""
                    />
                  )}
                </div>
              </div>
              <div className="sm:border-l border-b border-[#5B5955] rounded-[40px] order-1 sm:order-2 sm:h-full sm:h-[532px] h-[575px]">
                <div className="sm:mt-[52px] mt-[48px]">
                  <div className="mx-auto xl:w-[465px] md:w-[373px] w-[303px] relative">
                    <hr className="text-[#5B5955]" />
                    <div className="grid grid-cols-3">
                      {/* Шаг 1 */}
                      <div className="flex justify-start">
                        <span
                          className={`absolute top-[-12px] w-[24px] h-[24px] block rounded-full ${
                            step === 1 ? "bg-[#FFFCF6]" : "bg-[#5B5955]"
                          }`}
                        ></span>
                        <span
                          className={`block text-sm mt-[26px] ml-[-5px] ${
                            step === 1 ? "text-[#FCF8EF]" : "text-[#5B5955]"
                          }`}
                        >
                          Шаг 1
                        </span>
                      </div>
                      {/* Шаг 2 */}
                      <div className="flex justify-center">
                        <span
                          className={`absolute top-[-12px] w-[24px] h-[24px] block rounded-full ${
                            step === 2 ? "bg-[#FFFCF6]" : "bg-[#5B5955]"
                          }`}
                        ></span>
                        <span
                          className={`block text-sm mt-[26px] ${
                            step === 2 ? "text-[#FCF8EF]" : "text-[#5B5955]"
                          }`}
                        >
                          Шаг 2
                        </span>
                      </div>
                      {/* Шаг 3 */}
                      <div className="flex justify-end">
                        <span
                          className={`absolute top-[-12px] w-[24px] h-[24px] block rounded-full ${
                            step === 3 ? "bg-[#FFFCF6]" : "bg-[#5B5955]"
                          }`}
                        ></span>
                        <span
                          className={`block text-sm mt-[26px] mr-[-5px] ${
                            step === 3 ? "text-[#FCF8EF]" : "text-[#5B5955]"
                          }`}
                        >
                          Шаг 3
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      step === 3
                        ? "px-[25px] sm:px-[40px]"
                        : "xl:px-[98px] sm:px-[46px] px-[20px]"
                    } mt-[30px]`}
                  >
                    <h2 className="text-[15px] sm:text-[22px] text-[#E6C37A] text-center font-anticva">
                      Информация об участнике
                    </h2>
                    {step === 1 && (
                      <div className="flex flex-col min-h-[190px]">
                        <label className="relative mt-[30px]" htmlFor="name">
                          <input
                            placeholder="Имя"
                            className="form-input border-b border-[#5B5955] w-full text-base"
                            type="text"
                            name="name"
                            id="name"
                            value={anketData.name}
                            onChange={handleInputChange}
                            autoComplete="new-password"
                          />
                        </label>
                        <label className="relative mt-[20px]" htmlFor="age">
                          <input
                            placeholder="Возраст"
                            className="form-input border-b border-[#5B5955] w-full text-base"
                            type="text"
                            name="age"
                            id="age"
                            onChange={handleInputChange}
                            value={anketData.age}
                            autoComplete="new-password"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300">
                            лет
                          </span>
                        </label>
                        <label htmlFor="email" className="relative mt-[20px]">
                          <input
                            placeholder="Email"
                            className="form-input border-b border-[#5B5955] w-full text-base"
                            type="mail"
                            name="email"
                            id="email"
                            value={anketData.email}
                            onChange={handleInputChange}
                            autoComplete="new-password"
                          />
                        </label>
                        <label htmlFor="tel" className="relative mt-[20px]">
                          <IMaskInput
                            mask="0 (000) 000-00-00"
                            placeholder="Телефон"
                            className="form-input border-b border-[#5B5955] w-full text-base"
                            type="tel"
                            name="tel"
                            id="tel"
                            value={anketData.tel}
                            onChange={handleInputChange}
                            autoComplete="new-password"
                          />
                        </label>
                      </div>
                    )}
                    {step === 2 && (
                      <div className="flex flex-col min-h-[190px]">
                        <label htmlFor="height" className="relative mt-[30px]">
                          <input
                            placeholder="Рост"
                            className="form-input border-b border-[#5B5955] w-full text-base"
                            type="text"
                            name="height"
                            id="height"
                            value={anketData.height}
                            onChange={handleInputChange}
                            autoComplete="new-password"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300">
                            см
                          </span>
                        </label>
                        <label className="relative mt-[20px]" htmlFor="weight">
                          <input
                            placeholder="Вес"
                            className="form-input border-b border-[#5B5955] w-full text-base"
                            type="text"
                            name="weight"
                            id="weight"
                            value={anketData.weight}
                            onChange={handleInputChange}
                            autoComplete="new-password"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300">
                            кг
                          </span>
                        </label>
                        {selectedGender === "women" && (
                          <label
                            className="relative mt-[20px]"
                            htmlFor="parameters"
                          >
                            <IMaskInput
                              mask="00-00-00" // Маска для российского номера
                              placeholder="ОГ-ОТ-ОБ"
                              className="form-input border-b border-[#5B5955] w-full text-base"
                              type="text"
                              name="parameters"
                              id="parameters"
                              value={anketData.parameters}
                              onChange={handleInputChange}
                              autoComplete="new-password"
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300">
                              см
                            </span>
                          </label>
                        )}
                        <label className="cursor-pointer inline-block text-[#5B5955] mt-[20px]">
                          <div className="flex items-center gap-1">
                            {anketData.image ? (
                              <>
                                <BiCheckboxChecked size={30} color="#e6c37a" />
                                Заменить фото
                              </>
                            ) : (
                              <>
                                <RiCheckboxBlankLine />
                                Загрузить фото
                              </>
                            )}
                          </div>
                          <input
                            type="file"
                            className="hidden" // Скрываем input
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>
                    )}
                    {step === 3 && (
                      <div className="grid gap-[16px]">
                        <input
                          className="col-span-6 form-input border-b border-[#5B5955] w-full py-2.5 text-sm"
                          type="text"
                          value={
                            anketData.name ? anketData.name : "Имя не заполнено"
                          }
                          readOnly
                        />
                        <input
                          className="col-span-6 form-input border-b border-[#5B5955] w-full py-2.5 text-sm"
                          type="text"
                          value={
                            anketData.tel
                              ? anketData.tel
                              : "Телефон не заполнен"
                          }
                          readOnly
                        />
                        <input
                          className="col-span-12 form-input border-b border-[#5B5955] w-full py-2.5 text-sm"
                          value={
                            anketData.email
                              ? anketData.email
                              : "E-mail не заполнен"
                          }
                          readOnly
                        />
                        <label className="relative col-span-6">
                          <input
                            className="col-span-6 form-input border-b border-[#5B5955] w-full py-2.5 text-sm"
                            type="text"
                            value={
                              anketData.height
                                ? anketData.height
                                : "Рост не заполнен"
                            }
                            readOnly
                          />
                          {anketData.height && (
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300">
                              см
                            </span>
                          )}
                        </label>
                        <label className="relative col-span-6">
                          <input
                            className="col-span-6 form-input border-b border-[#5B5955] w-full py-2.5 text-sm"
                            type="text"
                            value={
                              anketData.weight
                                ? anketData.weight
                                : "Вес не заполнен"
                            }
                            readOnly
                          />
                          {anketData.weight && (
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300">
                              кг
                            </span>
                          )}
                        </label>
                        <label className="relative col-span-6">
                          <input
                            className="col-span-6 form-input border-b border-[#5B5955] w-full py-2.5 text-sm"
                            type="text"
                            value={
                              anketData.age
                                ? anketData.age
                                : "Возраст не заполнен"
                            }
                            readOnly
                          />
                          {anketData.age && (
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300">
                              лет
                            </span>
                          )}
                        </label>
                        {selectedGender === "women" && (
                          <label className="relative col-span-6">
                            <input
                              className="form-input border-b border-[#5B5955] w-full py-2.5 text-sm"
                              type="text"
                              value={
                                anketData.parameters
                                  ? anketData.parameters
                                  : "Параметры тела не заполнены"
                              }
                              readOnly
                            />
                            {anketData.parameters && (
                              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300">
                                см
                              </span>
                            )}
                          </label>
                        )}
                      </div>
                    )}
                    {step === 3 && (
                      <div className="sm:text-sm text-xs mt-2.5 py-[10px]">
                        <label
                          className="text-[#FFFCF6] block mb-1.5"
                          htmlFor="politik"
                        >
                          <input
                            onChange={handleInputChange}
                            type="checkbox"
                            name="politik"
                            id="politik"
                            checked={anketData.politik || false} // Убедитесь, что чекбокс синхронизирован с состоянием
                          />{" "}
                          Я согласен на{" "}
                          <Link
                            className="underline hover:text-[#E6C37A]"
                            href="/privacy-personal/"
                          >
                            обработку моих персональных данных
                          </Link>{" "}
                          в соответствии с{" "}
                          <Link
                            className="underline hover:text-[#E6C37A]"
                            href="/privacy-policy/"
                          >
                            Политикой
                          </Link>
                          .
                        </label>
                        <label
                          className="text-[#FFFCF6] block"
                          htmlFor="mailPrivacy"
                        >
                          <input
                            onChange={handleInputChange}
                            type="checkbox"
                            name="mailPrivacy"
                            id="mailPrivacy"
                            checked={anketData.mailPrivacy || false} // Убедитесь, что чекбокс синхронизирован с состоянием
                          />{" "}
                          Даю согласие на получение информационных и рекламных
                          рассылок в соответствии с{" "}
                          <a
                            className="underline hover:text-[#E6C37A]"
                            href="/mail-privacy-policy/"
                          >
                            Согласием
                          </a>
                        </label>
                      </div>
                    )}
                    <div
                      className={`flex items-center gap-2.5 ${
                        step === 1 && "mt-[54px]"
                      } ${step === 2 && "mt-[54px]"} ${
                        step === 3 && "mt-[5px]"
                      }`}
                    >
                      {/* Кнопка "Назад" */}
                      <button
                        onClick={() => {
                          if (step > 1) {
                            handleStepChange(step - 1); // Переход на предыдущий шаг
                          } else if (step === 1) {
                            handleResetState(); // Сброс состояния
                          }
                        }}
                        className="cursor-pointer group rounded-[30px] sm:px-[43px] px-[20px] py-3.5 border border-[#5B5955] text-white flex items-center"
                      >
                        <span className="transform transition-transform duration-200 group-hover:translate-x-[-4px]">
                          <IoIosArrowRoundBack />
                        </span>
                        <span className="ml-2">Назад</span>
                      </button>

                      {/* Кнопка "Следующий шаг" (отображается только на шагах 1 и 2) */}
                      {(step === 1 || step === 2) && (
                        <button
                          className={`rounded-[30px] w-full px-0 sm:px-8 py-3.5 text-[16px] cursor-pointer ${
                            step < 3
                              ? "bg-[#FFFCF6] hover:bg-[#E6C37A] text-[#141414]"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                          onClick={() => {
                            if (step < 3) {
                              handleStepChange(step + 1);
                            }
                          }}
                          disabled={step >= 3}
                        >
                          Следующий шаг
                        </button>
                      )}

                      {step === 3 && (
                        <button
                          disabled={
                            isSubmitting ||
                            !Object.entries(anketData)
                              .filter(([key]) => key !== "parameters")
                              .every(([, value]) => value)
                          }
                          className={`rounded-[30px] w-full px-0 sm:px-8 py-3.5 text-[16px] relative ${
                            Object.entries(anketData)
                              .filter(([key]) => key !== "parameters")
                              .every(([, value]) => value) && !isSubmitting
                              ? "bg-[#FFFCF6] hover:bg-[#E6C37A] text-[#141414] cursor-pointer"
                              : "bg-gray-300 text-gray-500 !cursor-not-allowed"
                          }`}
                          onClick={() => handleDataChange(anketData)}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                              Отправка...
                            </span>
                          ) : (
                            "Создать анкету"
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <SubmitStatus
        isSubmitting={isSubmitting}
        submitStatusForm={submitStatusForm}
        setSubmitStatus={setSubmitStatus}
      />
    </div>
  );
}
