import { Router } from 'express';
import { createNews, getNews } from '../controllers/newsController';
import upload from '../middleware/upload';

const router = Router();

router.post('/', upload.single('image'), createNews);
router.get('/', getNews);

export default router;
