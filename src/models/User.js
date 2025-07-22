import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Пользователь",
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email обязателен"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Пароль обязателен"],
      minlength: [6, "Пароль должен содержать минимум 6 символов"],
      select: false, // Исключаем пароль из выборок по умолчанию
    },
    role: {
      type: String,
      enum: ["user", "admin", "moderator"],
      default: "user",
    },
    height: {
      type: String,
      default: "Не задан",
    },
    weight: {
      type: String,
      default: "Не задан",
    },
    tel: {
      type: String,
      default: "Не задан",
    },
    gender: {
      type: String,
      default: "Не задан",
    },
    parameters: {
      type: String,
      default: "Не заданы",
    },
    image: {
      type: String,
      default: "/img/icon/no-avatar.png",
    },
    age: {
      type: Number,
      default: 0,
    },
    anketActivation: {
      type: Boolean,
      default: false,
    },
    adminComment: {
      type: String,
      default: "Заметок нет",
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: false, // Отключаем поле updatedAt
    },
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.password; // Удаляем пароль при преобразовании в JSON
        return ret;
      },
    },
    toObject: {
      virtuals: true,
    },
  }
);

// Безопасная регистрация модели
function getUserModel() {
  if (mongoose.models && mongoose.models.User) {
    return mongoose.models.User;
  }
  return mongoose.model("User", userSchema);
}

// Хеширование пароля перед сохранением
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Метод для проверки пароля
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Виртуальное поле для возраста (альтернатива)
userSchema.virtual("ageCategory").get(function () {
  if (this.age < 30) return "Молодой";
  if (this.age < 50) return "Средний возраст";
  return "Старший возраст";
});

const User = getUserModel();
export default User;
