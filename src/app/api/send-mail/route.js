import nodemailer from "nodemailer";

const login = process.env.USER_MAIL_SMTP;
const password = process.env.PASSWORD_MAIL_SMTP;
const pushMail = process.env.PUSH_MAIL_SMTP;

export async function POST(req) {
  try {
    const { name, email, tel, key, comment, service, link } = await req.json();

    // Проверка обязательных переменных окружения
    if (!login || !password || !pushMail) {
      throw new Error("Не настроены почтовые переменные окружения");
    }

    const transporter = nodemailer.createTransport({
      host: "mail.hosting.reg.ru",
      port: 587,
      secure: false,
      auth: {
        user: login,
        pass: password,
      },
    });

    let mailOptions;

    // Явная проверка всех возможных ключей
    switch (key) {
      case "reg":
        mailOptions = {
          from: login,
          to: pushMail,
          subject: `Регистрация новой анкеты от ${name}`,
          html: `
            <h2>Новая регистрация на сайте</h2>
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Телефон:</strong> ${tel || "не указан"}</p>
            <p><strong>Ссылка на анкету:</strong> <a href="${link}">${link}</a></p>
            <p>Пожалуйста, проверьте анкету и активируйте её при необходимости.</p>
          `,
        };
        break;
      case "reg-mail-user":
        mailOptions = {
          from: login,
          to: email,
          subject: `${name}, вы добавили анкету на сайте agencydhs.ru`,
          html: `
            <h2>Вы добавили анкету</h2>
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Телефон:</strong> ${tel || "не указан"}</p>
            <p>Пожалуйста ожидайте. Мы свяжемся с вами дополнительно для уточнения деталей анкеты. Если ваша анкета будет активирована, мы пришлём дополнительное оповещение на вашу почту.</p>
          `,
        };
        break;

      case "account-activated":
        mailOptions = {
          from: login,
          to: email,
          subject: `${name}, ваша анкета активирована на сайте agencydhs.ru`,
          html: `
            <h2>${name}, мы рассмотрели вашу заявка</h2>
            <p>Поздравляем, ваш аккаунт активирован. По всем вопросам обращайтесь по контактам указанным на нашем официальном сайте.</p>
          `,
        };
        break;

      default:
        mailOptions = {
          from: login,
          to: pushMail,
          subject: `Новое сообщение от ${name}`,
          text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${tel}\nУслуга: ${service}\nКомментарий: ${comment}`,
        };
    }

    const info = await transporter.sendMail(mailOptions);
    console.log(`Письмо отправлено (тип: ${key})`, info.messageId);

    return new Response(
      JSON.stringify({ message: "Письмо успешно отправлено!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Ошибка при отправке письма:", {
      error: error.message,
      stack: error.stack,
    });

    return new Response(
      JSON.stringify({
        message: "Ошибка при отправке письма",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
