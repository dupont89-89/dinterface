import Link from "next/link";
import parse from "html-react-parser";

const faqItems = [
  {
    id: "kak-service",
    question: "Как можно забронировать услугу?",
    answer:
      "<p>Вы можете связаться с нами через наш сайт, по телефону или электронной почте. Мы свяжемся с вами для уточнения деталей.</p>",
  },
  {
    id: "price-service",
    question: "Каковы ваши расценки?",
    answer:
      "<p>Расценки на наши услуги варьируются в зависимости от типа фотосессии и продолжительности. Рекомендуем связаться нами для получения точной информации.</p>",
  },
  {
    id: "time-service",
    question: "Сколько времени занимает подготовка к мероприятию?",
    answer:
      "<p>Время подготовки зависит от сложности мероприятия. Обычно мы рекомендуем подготовку за несколько месяцев до даты события.</p>",
  },
  {
    id: "price-what",
    question: "Что входит в стоимость фотосессии?",
    answer:
      "<p>В стоимость фотосессии входит: предварительная консультация, работа фотографа, обработка фотографий и предоставление готовых снимков в электронном виде. (также дополнительная услуга стилиста)</p>",
  },
  {
    id: "service-redact",
    question:
      "Могу ли я внести изменения в план мероприятия после его утверждения?",
    answer:
      "<p>Да, изменения возможны, но мы рекомендуем делать это как можно раньше для минимизации неудобств.</p>",
  },
  {
    id: "foto-kak",
    question: "Как вы выбираете фотографов для съемки?",
    answer:
      "<p>Мы сотрудничаем с профессиональными фотографами, которые имеют опыт в различных жанрах и стилях. Вы можете ознакомиться с их работами на нашем сайте.</p>",
  },
  {
    id: "plan",
    question: "Что делать, если погода испортилась в день мероприятия?",
    answer:
      "<p>Мы всегда имеем запасной план и готовы предложить альтернативные решения в случае плохих погодных условий.</p>",
  },
  {
    id: "foto-theam",
    question: "Есть ли у вас опыт работы с определенными темами или стилями?",
    answer:
      "<p>У нас есть опыт работы с различными темами и стилями, включая романтические, деловые, художественные и другие.</p>",
  },
  {
    id: "foto-time-finish",
    question: "Как быстро я получу готовые фотографии?",
    answer:
      "<p>Готовые фотографии обычно предоставляются в течение 1-3 недель после фотосессии, в зависимости от объема работы.</p>",
  },
  {
    id: "foto-vid",
    question: "Какие виды фотосессий вы предлагаете?",
    answer: `
<p class="mb-3">Мы предлагаем различные виды фотосессий, включая</p>
<ol class="list-decimal pl-5 space-y-2 mb-3">
  <li>Фотосессии для маркетплейсов</li>
  <li>Предметная съемка</li>
  <li>Индивидуальные фотосессии</li>
  <li>Семейные фотосессии</li>
  <li>Свадебные фотосессии</li>
  <li>Корпоративные фотосессии</li>
  <li>Тематические фотосессии</li>
</ol>
<p>Если у вас есть особые пожелания или идеи, мы готовы обсудить их и предложить наилучшее решение.</p>
`,
  },
];

export default function FAQ({ searchParams }) {
  const activeId = searchParams.faq || faqItems[0].id;

  return (
    <div className="mb-[100px] sm:mb-[120px]">
      <hr className="text-[#5B5955] w-full" />
      {faqItems.map((item) => {
        const isActive = activeId === item.id;

        return (
          <div key={item.id} className="mb-4 border-b border-[#5B5955]">
            <Link
              href={`?faq=${isActive ? "" : item.id}`}
              scroll={false}
              className="flex justify-between items-center w-full text-left py-[33px]"
            >
              <h3 className="text-[20px] sm:text-[22px] font-anticva text-[#DAC394]">
                {item.question}
              </h3>
              <span className="ml-4 flex-shrink-0 flex justify-center items-center">
                <svg
                  className={`transition-transform duration-300 ${
                    isActive ? "rotate-45" : ""
                  }`}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.3"
                    y="0.3"
                    width="39.4"
                    height="39.4"
                    rx="19.7"
                    stroke="#DAC394"
                    strokeWidth="0.6"
                  />
                  <path
                    d="M9.14993 19.5346L20 19.4885M30.8501 19.4424L20 19.4885M20 19.4885V9.48828M20 19.4885V30.5112"
                    stroke="#DAC394"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </Link>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isActive
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pt-2 text-white mb-[33px] text-sm sm:text-base leading-[17px] sm:leading-[19px]">
                  {parse(item.answer)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
