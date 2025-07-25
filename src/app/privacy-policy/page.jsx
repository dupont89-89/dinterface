import React from "react";

export default function PagePrivacy(props) {
  return (
    <div className="text-black my-9 min-w-full px-6 py-4 bg-white border border-gray-200 page-text rounded-2xl">
      <div>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start mb-4">
          <div className="flex justify-start">
            <h1 className="sm:text-2xl text-xl">
              Политика в отношении обработки персональных данных
            </h1>
          </div>
          <div className="flex justify-end">в редакции от 01.03.2025 г.</div>
        </div>
        <p>
          <strong>Термины и определения</strong>
        </p>
        <div className="table-container">
          <table className="bg-white border border-gray-200 w-full">
            <tbody className="divide-y divide-gray-200 block md:table-row-group">
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Персональные данные Заказчика</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>
                    Любая информация в соответствии с Федеральным законом
                    &laquo;О персональных данных&raquo;, полученная Исполнителем
                    от Заказчика при заполнении регистрационной формы.
                  </p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Пользователь</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>
                    Любой посетитель сайта{" "}
                    <a href="https://dinterface.ru">https://dinterface.ru</a>
                  </p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Политика в отношении обработки персональных данных</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>
                    Документ, на основании которого Оператор обработки
                    персональных данных (Индивидуальный предприниматель Бабий
                    Ксения Юрьевна) осуществляет обработку данных Заказчика.
                  </p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Обработка персональных данных</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>
                    Любое действие (операция) или совокупность действий
                    (операций), совершаемых с использованием средств
                    автоматизации или без использования таких средств с
                    персональными данными, включая сбор, запись, систематизацию,
                    накопление, хранение, уточнение (обновление, изменение),
                    извлечение, использование, обезличивание, блокирование,
                    удаление, уничтожение персональных данных.
                  </p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Автоматизированная обработка персональных данных</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>
                    Обработка персональных данных с помощью средств
                    вычислительной техники.
                  </p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Блокирование персональных данных</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>
                    Временное прекращение обработки персональных данных (за
                    исключением случаев, если обработка необходима для уточнения
                    персональных данных).
                  </p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Информационная система персональных данных</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>
                    Совокупность содержащихся в базах данных персональных данных
                    и обеспечивающих их обработку информационных технологий и
                    технических средств.
                  </p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Оператор</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>
                    Ответственное за обработку персональных данных лицо и
                    направление соответствующих данных в Роскомнадзор,
                    Администрация сайта &ndash; Индивидуальный предприниматель
                    Бабий Ксения Юрьевна, осуществляющая обработку персональных
                    данных, а также определяющая цели обработки персональных
                    данных, состав персональных данных, подлежащих обработке,
                    действия (операции), совершаемые с персональными данными.
                  </p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Сайт</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>
                    Совокупность графических и информационных материалов, а
                    также программ для ЭВМ и баз данных, обеспечивающих их
                    доступность в сети интернет по сетевому адресу:{" "}
                    <a href="https://dinterface.ru">https://dinterface.ru</a>,
                    на котором размещена основная информация о профессиональных
                    услугах.
                  </p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Обезличивание персональных данных</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>
                    Действия, в результате которых невозможно определить без
                    использования дополнительной информации принадлежность
                    персональных данных конкретному Пользователю или иному
                    субъекту персональных данных.
                  </p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Куки (cookies)</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>
                    Хранящиеся на компьютерах и гаджетах файлы, с помощью
                    которых сайт запоминает информацию о посещениях
                    пользователя.
                  </p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Согласие на обработку персональных данных</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>
                    Документ, являющийся основанием обработки персональных
                    данных Заказчика (Приложение № 2).
                  </p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Согласие на рассылку электронных сообщений</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>
                    Документ, являющийся основанием для рассылки материалов
                    рекламного и (или) информационного характера посредством
                    SMS- серверов и(или) с электронной почты:{" "}
                    <a href="https://dinterface.ru">https://dinterface.ru</a>{" "}
                    (Приложение № 3).
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>&nbsp;</p>
        <ol>
          <li>
            <strong>Общие положения</strong>
          </li>
        </ol>
        <p>
          1.1. Настоящая политика обработки персональных данных (далее &ndash;
          &laquo;Политика&raquo;) разработана на основании Федерального закона
          &laquo;О персональных данных&raquo; от 27 июля 2006 года № 152-ФЗ и
          определяет порядок обработки персональных данных и меры по обеспечению
          безопасности персональных данных Индивидуальным предпринимателем Бабий
          Ксенией Юрьевной ИНН 370254912324 ОГРНИП 325370000015093 (далее
          &ndash; <strong>&laquo;Оператор&raquo;</strong>).
        </p>
        <p>
          1.2. Политика регулирует вопросы обработки персональных посетителей
          сайта <a href="https://dinterface.ru">https://dinterface.ru</a> (далее
          &ndash; <strong>&laquo;Сайт&raquo;</strong>), в том числе их
          представителей (далее &ndash;{" "}
          <strong>&laquo;Субъекты персональных данных&raquo;).</strong>
        </p>
        <p>
          1.3. Лицо организующее и (или) осуществляющее обработку персональных
          данных, а также определяющее цели такой обработки, состав персональных
          данных, подлежащих обработке, действия (операции), совершаемые с
          персональными данными &ndash;Индивидуальный предприниматель Бабий
          Ксения Юрьевна ИНН 370254912324 ОГРНИП 325370000015093.
        </p>
        <p>
          1.4. Оператор осуществляет обработку персональных данных Субъектов
          персональных данных, т.е. совершает все действия с персональными
          данными, включая сбор, запись, систематизацию, накопление, хранение,
          уточнение (обновление, изменение), извлечение, использование,
          обезличивание, блокирование, удаление, уничтожение персональных данных
          (далее &ndash; &laquo;<strong>Обработка персональных данных</strong>
          &raquo;).
        </p>
        <p>
          1.5. К обрабатываемым персональным данным Субъектов персональных
          данных, в соответствии с настоящей Политикой, относятся персональные
          данные учеников, заполнивших заявку на сайте{" "}
          <a href="https://dinterface.ru">https://dinterface.ru</a> (далее
          &ndash; <strong>&laquo;Сведения&raquo;</strong>):{" "}
          <strong>
            ФИО, гражданство, пол, дата рождения, город проживания, рост, вес,
            размер одежды, размер обуви, фото, номер телефона,{" "}
          </strong>
          <strong>e</strong>
          <strong>-</strong>
          <strong>mail</strong>
          <strong>, ссылка на страницу Вконтакте.</strong>
        </p>
        <p>
          1.6. Политика может быть изменена в ходе её периодического пересмотра,
          а также в случае изменения действующего законодательства Российской
          Федерации в области персональных данных.
        </p>
        <p>
          1.7. Обеспечение ознакомления с настоящей Политикой и Приложениями
          реализуется путём личного посещения сайта Оператора по сетевому
          адресу: <a href="https://dinterface.ru">https://dinterface.ru</a>
        </p>
        <p>
          1.8. Оператор ставит своей важнейшей целью и условием осуществления
          своей деятельности соблюдение прав и свобод человека и гражданина при
          обработке его персональных данных, в том числе защиты прав на
          неприкосновенность частной жизни, личную и семейную тайну.
        </p>
        <ol>
          <li>
            <strong>Цели сбора персональных данных</strong>
          </li>
        </ol>
        <p>
          2.1. &nbsp;Целями сбора персональных данных Субъектов персональных
          данных являются:
        </p>
        <ul>
          <li>
            Предоставление Пользователю доступа к персонализированным ресурсам
            сайта.
          </li>
          <li>
            Установление с Пользователем обратной связи, включая направление
            уведомлений, запросов, касающихся использования сайта, оказания
            услуг, обработка запросов и заявок от Пользователя.
          </li>
          <li>
            Определение места нахождения Пользователя для обеспечения
            безопасности, предотвращения мошенничества.
          </li>
          <li>
            Подтверждение достоверности и полноты персональных данных,
            предоставленных Пользователем.
          </li>
          <li>
            Идентификации Пользователя, зарегистрированного на Сайте, для
            оказания услуги и (или) заключения Договора&nbsp;возмездного
            оказания услуг.
          </li>
          <li>
            Оказание Пользователю эффективной клиентской и технической поддержки
            при возникновении проблем, связанных с использованием Сайта.
          </li>
          <li>
            Предоставление Пользователю с его согласия, обновлений
            продукции/услуг, специальных предложений, информации о ценах,
            новостной рассылки и иных сведений от имени Сайта.
          </li>
          <li>Осуществление рекламной деятельности с согласия Пользователя.</li>
        </ul>
        <p>
          2.2. Обработке подлежат только те персональные данные, которые
          отвечают целям их обработки. Не допускается обработка персональных
          данных, несовместимая с целями сбора персональных данных.
        </p>
        <p>
          2.3. Пользователь всегда может отказаться от получения информационных
          и (или) рекламных сообщений, направив Оператору письмо на адрес
          электронной почты: dynamic.hr@yandex.ru с пометкой &laquo;Отказ от
          уведомлений о новых продуктах и услугах и специальных
          предложениях&raquo;.
        </p>
        <p>
          2.4. Оператор обрабатывает обезличенные данные о Пользователе в
          случае, если это разрешено в настройках браузера Пользователя
          (включено сохранение файлов &laquo;cookie&raquo; и использование
          технологии JavaScript).
        </p>
        <p>
          2.5. Правовыми основаниями Обработки персональных данных, в
          соответствии с настоящей Политикой, является Согласие на обработку
          персональных данных.
        </p>
        <p>&nbsp;</p>
        <ul>
          <li>
            <strong>
              Объем и категории обрабатываемых персональных данных, субъекты
              персональных данных
            </strong>
          </li>
        </ul>
        <p>
          3.1. Персональные данные, указанные в пункте 1.5 настоящей Политики,
          обрабатываются в объемах, необходимых для достижения целей,
          предусмотренных в пункте 2.1 настоящей Политики. Оператор обрабатывает
          персональные данные, относящиеся к общей категории.
        </p>
        <p>
          3.2. Оператор гарантирует, что содержание и объем обрабатываемых
          персональных данных соответствует заявленным целям обработки, а сами
          обрабатываемые персональные данные не являются избыточными по
          отношению к заявленным целям их обработки.
        </p>
        <p>
          3.3. Субъектами персональных данных являются граждане, прошедшие
          регистрацию на Сайте и давшие Согласие на обработку персональных
          данных.
        </p>
        <ol>
          <li>
            <strong>Порядок и условия обработки персональных данных</strong>
          </li>
        </ol>
        <p>
          4.1. Обработка персональных данных Пользователя осуществляется без
          ограничения срока, любым законным способом, в том числе в
          информационных системах персональных данных с использованием средств
          автоматизации или без использования таких средств.
        </p>
        <p>
          4.2. Обработка персональных данных начинается с момента получения
          персональных данных. После заполнения всех данных для подачи заявки,
          лицо, желающее получить Услугу, подтверждает правильность и
          достоверность указанных им данных и выражает желание подать заявку
          путем активации поля такого типа как &laquo;Далее&raquo; или иного,
          аналогичного ему по функциональному назначению. Одновременно лицо
          проставляет знак &laquo;V&raquo; напротив граф такого типа как
          &laquo;Я согласен с Политикой обработки персональных данных и принимаю
          ее условия&raquo;, &laquo;Я даю согласие на обработку персональных
          данных&raquo;.
        </p>
        <p>
          4.3. Любая информация, которая передана Оператору в устной или
          письменной форме посредством информационно-телекоммуникационной сети
          &laquo;Интернет&raquo; либо иным способом, считается конфиденциальной.
        </p>
        <p>
          При использовании отдельных сервисов Субъект персональных данных
          соглашается с тем, что определенная часть его персональной информации
          становится общедоступной.
        </p>
        <p>
          4.4. Хранение персональных данных осуществляется в форме, позволяющей
          определить Пользователя, в сроки, указанные в Согласии на обработку
          персональных данных.
        </p>
        <p>
          4.5. Оператор обязан принимать меры в целях обеспечения защиты
          персональных данных Субъектов персональных данных от неправомерного
          или случайного доступа к ним третьими лицами, включая меры по
          уничтожению, изменению, блокированию, ограничению копирования и(или)
          распространения. В случае утечки персональных данных субъекта,
          оператор, в срок, не превышающий 24 часа предпринимает меры по
          реализации процедуры уведомления управления Роскомнадзора, поиску
          потенциально виновных лиц в утечке информации и предпринимает иные
          действия согласно регламенту реагирования, на утечку персональных
          данных.
        </p>
        <p>
          4.6. В случае выявления неточностей в персональных данных,
          Пользователь может актуализировать их самостоятельно, путем
          направления Оператору уведомление на адрес электронной почты:{" "}
          <a href="mailto:dynamic.hr@yandex.ru">dynamic.hr@yandex.ru</a>{" "}
          Оператора с пометкой &laquo;Актуализация персональных данных&raquo;.
        </p>
        <p>
          4.7. Срок обработки персональных данных является неограниченным.
          Пользователь может в любой момент отозвать свое согласие на обработку
          персональных данных, направив Оператору уведомление посредством
          электронной почты на электронный адрес Оператора:
        </p>
        <p>
          dynamic.hr@yandex.ru с пометкой &laquo;Отзыв согласия на обработку
          персональных данных&raquo;.
        </p>
        <ol>
          <li>
            <strong>
              Актуализация, исправление, удаление и уничтожение персональных
              данных, ответы на запросы субъектов на доступ к персональным
              данным
            </strong>
          </li>
        </ol>
        <p>
          5.1. Пользователь вправе обратиться к Оператору с запросом о
          предоставлении информации, касающейся обработки его персональных
          данных, уточнении персональных данных, их блокировании или уничтожении
          в случае, если персональные данные являются неполными, устаревшими,
          неточными, незаконно полученными или не являются необходимыми для
          заявленной цели обработки (далее &ndash;{" "}
          <strong>&laquo;Запрос&raquo;</strong>).
        </p>
        <p>
          5.2. Запрос направляется на электронный адрес Оператора:
          dynamic.hr@yandex.ru
        </p>
        <p>
          5.3. Оператор обязан дать ответ и исполнить требование на Запрос не
          позднее 7 рабочих дней с даты его получения. Сведения должны быть
          предоставлены Субъекту персональных данных Оператором в доступной
          форме, и должны содержать информацию только о Субъекте персональных
          данных, направившего Запрос.
        </p>
        <ol>
          <li>
            <strong>Заключительные положения</strong>
          </li>
        </ol>
        <p>
          6.1. Пользователь может получить любые разъяснения по интересующим
          вопросам, касающимся обработки его персональных данных, обратившись к
          Оператору с помощью электронной почты:dynamic.hr@yandex.ru.&nbsp; Всем
          пользователям вне зависимости от диапазона IP-адресов, при входе на
          сайт показывается баннер о применении куки, где сохраняются данные о
          дате и времени посещения сайта, с какого устройства пользователь
          заходил на страницу, IP-адрес и местоположение пользователя, клики и
          переходы и т.д.
        </p>
        <p>
          6.2. В данном документе будут отражены любые изменения политики
          обработки персональных данных Оператором. Политика действует бессрочно
          до замены ее новой версией. Информирование об изменении Политики
          обработки персональных данных происходит путем рассылки уже
          действующим субъектам персональных данных.
        </p>
        <p>
          Полный и актуальный текст Политики конфиденциальности размещен на
          сайте Оператора{" "}
          <a href="https://dinterface.ru">https://dinterface.ru</a>
        </p>
        <p>
          Срок реагирования на жалобы и заявления субъекта персональных данных
          &ndash; 7 &nbsp;рабочих дней.
        </p>
        <p>&nbsp;</p>
        <p>ИСПОЛНИТЕЛЬ:</p>
        <table className="min-w-full bg-white border border-gray-200">
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td>
                <p>Индивидуальный предприниматель &ndash;</p>
                <p>Бабий Ксения Юрьевна</p>
                <p>ИНН: 370254912324</p>
                <p>ОГРНИП 325370000015093</p>
                <p>e-mail: dynamic.hr@yandex.ru</p>
                <p>Остальные реквизиты указаны</p>
                <p>
                  на Сайте:{" "}
                  <a href="https://dinterface.ru">https://dinterface.ru</a>
                </p>
                <p>&nbsp;</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <p>Приложение № 1 к Политике обработки персональных данных</p>
        <p>
          <strong>&nbsp;</strong>
        </p>
        <p>
          <strong>Оператору:</strong>
        </p>
        <table className="min-w-full bg-white border border-gray-200">
          <tbody>
            <tr className="hover:bg-gray-50">
              <td>
                <p>Индивидуальному предпринимателю</p>
                <p>Бабий Ксении Юрьевне</p>
                <p>
                  &nbsp;ИНН <strong>370254912324</strong>
                </p>
                <p>
                  ОГРНИП <strong>325370000015093</strong>,
                </p>
                <p>&nbsp;электронная почта: dynamic.hr@yandex.ru</p>
                <p>&nbsp;</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <p>
          <strong>
            Согласие на обработку персональных данных, разрешенных субъектом
            персональных данных для распространения
          </strong>
        </p>
        <p>
          Пользователь в соответствии со статьей 9 Федерального закона от 27
          июля 2006 г. N&nbsp;152-ФЗ "О персональных данных" дает свое согласие
          Индивидуальному предпринимателю Бабий Ксении Юрьевне на
          распространение (передачу, предоставление) своих персональных данных.
        </p>
        <p>
          Посредством размещения на сайтах Оператора и в социальных сетях, с
          целью размещения отзывов (видео/фото/голосовом формате) о работе
          Оператора.
        </p>
        <p>&nbsp;</p>
        <div className="table-container">
          <table className="min-w-full bg-white border border-gray-200">
            <tbody className="divide-y divide-gray-200 block md:table-row-group">
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>
                    N<br /> п/п
                  </p>
                </td>
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Персональные данные</p>
                </td>
                <td>
                  <p>Согласие</p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>1</p>
                </td>
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Фамилия</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>ДА</p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>2</p>
                </td>
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Имя</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>ДА</p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>3</p>
                </td>
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Отчество (при наличии)</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>ДА</p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>4</p>
                </td>
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>
                    Фотографическое изображение
                    (личное/мероприятия/видеовстречи/отзывы)
                  </p>
                </td>
                <td className="p-2 md:p-3">
                  <p>ДА</p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>5</p>
                </td>
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Контактные данные (телефон/мессенджеры)</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>ДА</p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>6</p>
                </td>
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>Ссылки на страницы в социальных сетях</p>
                </td>
                <td className="p-2 md:p-3">
                  <p>ДА</p>
                </td>
              </tr>
              <tr className="flex flex-col md:table-row hover:bg-gray-50">
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>7</p>
                </td>
                <td className="font-semibold md:font-normal p-2 md:p-3">
                  <p>
                    Размещение портфолио соискателя на Сайте{" "}
                    <a href="https://dinterface.ru">https://dinterface.ru</a>
                  </p>
                </td>
                <td className="p-2 md:p-3">
                  <p>ДА</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>&nbsp;</p>
        <p>
          Настоящее согласие действует бессрочно, но в любой момент отозвать
          данное согласие можно направив заявление по электронной почте{" "}
          <a href="mailto:dynamic.hr@yandex.ru">dynamic.hr@yandex.ru</a>.
        </p>
      </div>
    </div>
  );
}
