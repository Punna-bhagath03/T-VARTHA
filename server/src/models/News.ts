import mongoose, { Document, Model } from 'mongoose';

export interface INews extends Document {
  title: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const NewsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
  },
  { timestamps: true }
);

const News: Model<INews> = mongoose.model<INews>('News', NewsSchema);

export default News;
