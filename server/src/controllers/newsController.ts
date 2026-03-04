import { Request, Response, NextFunction } from 'express';
import News from '../models/News';

interface CloudinaryMulterFile extends Express.Multer.File {
  path: string;
}

export const createNews = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title, description } = req.body as { title?: string; description?: string };
    const imageFile = req.file as CloudinaryMulterFile | undefined;

    if (!title || !description || !imageFile?.path) {
      res.status(400).json({ message: 'Title, description and image are required' });
      return;
    }

    const imageUrl = imageFile.path;

    const news = await News.create({
      title,
      description,
      imageUrl
    });

    res.status(201).json(news);
  } catch (error) {
    next(error);
  }
};

export const getNews = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.status(200).json(news);
  } catch (error) {
    next(error);
  }
};
