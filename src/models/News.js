import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true, // Обычный (неуникальный) индекс для поиска
    },
    description: {
      type: String,
      required: true,
    },
    minDescription: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true, // Создает уникальный индекс
      required: true,
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now,
      index: true, // Создает обычный индекс
    },
  },
  { timestamps: true }
);

// Составной индекс для частых запросов по title + дате
NewsSchema.index({ title: 1, createdAt: -1 });

const News = mongoose.models.News || mongoose.model("News", NewsSchema);
export default News;
